'use client';

import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from 'react';
import type { BookingPreset } from '@/types';

/* ---------- menu ---------- */
interface MenuApi {
  open: boolean;
  setOpen(open: boolean): void;
}
const MenuContext = createContext<MenuApi | null>(null);

/* ---------- doctor profile drawer ---------- */
interface ProfileApi {
  doctorId: string | null;
  openProfile(id: string): void;
  closeProfile(): void;
}
const ProfileContext = createContext<ProfileApi | null>(null);

/* ---------- booking ---------- */
export interface BookingStatus {
  step: number;
  dept: string | null;
}
interface BookingActions {
  /** Opens the booking sheet (or, on the appointment page, presets the inline concierge) */
  openBooking(preset?: BookingPreset): void;
  closeBooking(): void;
  /** The inline concierge registers itself so triggers on its page use it instead of the sheet */
  registerInline(handler: ((preset: BookingPreset) => void) | null): void;
  reportStatus(status: BookingStatus): void;
}
interface BookingSheetState {
  open: boolean;
  preset: BookingPreset;
  /** bumps on every open, so the same preset can be applied again */
  nonce: number;
}
const BookingActionsContext = createContext<BookingActions | null>(null);
const BookingSheetContext = createContext<BookingSheetState | null>(null);
const BookingStatusContext = createContext<BookingStatus>({ step: 1, dept: null });

export function UIProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [doctorId, setDoctorId] = useState<string | null>(null);
  const [sheet, setSheet] = useState<BookingSheetState>({ open: false, preset: {}, nonce: 0 });
  const [status, setStatus] = useState<BookingStatus>({ step: 1, dept: null });
  const inline = useRef<((preset: BookingPreset) => void) | null>(null);

  const closeProfile = useCallback(() => setDoctorId(null), []);
  const profile = useMemo<ProfileApi>(
    () => ({ doctorId, openProfile: (id) => setDoctorId(id), closeProfile }),
    [doctorId, closeProfile],
  );

  const menu = useMemo<MenuApi>(() => ({ open: menuOpen, setOpen: setMenuOpen }), [menuOpen]);

  const actions = useMemo<BookingActions>(
    () => ({
      openBooking(preset = {}) {
        setMenuOpen(false);
        setDoctorId(null);
        if (inline.current) {
          inline.current(preset);
          return;
        }
        setSheet((s) => ({ open: true, preset, nonce: s.nonce + 1 }));
      },
      closeBooking() {
        setSheet((s) => ({ ...s, open: false }));
      },
      registerInline(handler) {
        inline.current = handler;
      },
      reportStatus(next) {
        setStatus((s) => (s.step === next.step && s.dept === next.dept ? s : next));
      },
    }),
    [],
  );

  return (
    <MenuContext.Provider value={menu}>
      <ProfileContext.Provider value={profile}>
        <BookingActionsContext.Provider value={actions}>
          <BookingSheetContext.Provider value={sheet}>
            <BookingStatusContext.Provider value={status}>{children}</BookingStatusContext.Provider>
          </BookingSheetContext.Provider>
        </BookingActionsContext.Provider>
      </ProfileContext.Provider>
    </MenuContext.Provider>
  );
}

function required<T>(value: T | null, name: string): T {
  if (!value) throw new Error(`${name} must be used inside <UIProvider>`);
  return value;
}

export const useMenu = () => required(useContext(MenuContext), 'useMenu');
export const useProfile = () => required(useContext(ProfileContext), 'useProfile');
export const useBooking = () => required(useContext(BookingActionsContext), 'useBooking');
export const useBookingSheet = () => required(useContext(BookingSheetContext), 'useBookingSheet');
export const useBookingStatus = () => useContext(BookingStatusContext);
