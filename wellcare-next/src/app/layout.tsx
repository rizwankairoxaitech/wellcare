import type { Metadata, Viewport } from 'next';
import { Inter_Tight, JetBrains_Mono } from 'next/font/google';
import { BookingSheet } from '@/components/booking/BookingSheet';
import { DoctorDrawer } from '@/components/doctors/DoctorDrawer';
import { Cursor } from '@/components/layout/Cursor';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteMenu } from '@/components/layout/SiteMenu';
import { SvgDefs } from '@/components/ui/Icon';
import { MOTION_BOOT_SCRIPT } from '@/lib/motion/intro';
import { AppProviders } from '@/providers/AppProviders';
import './globals.css';

const interTight = Inter_Tight({ subsets: ['latin'], weight: ['300', '400', '500', '600'], variable: '--font-inter-tight' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-jetbrains-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.wellcarehospital.net'),
  title: {
    default: 'Wellcare Hospital & Research Institute | Trichy',
    template: '%s | Wellcare Hospital Trichy',
  },
  description:
    'Multispecialty hospital in Thillai Nagar, Trichy: general medicine, orthopaedics, cardiology, gynecology, neurology and pediatrics, 24/7 emergency care and appointments booked in under a minute.',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${interTight.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* decides, before first paint, whether motion is allowed and whether the first-visit intro plays */}
        <script dangerouslySetInnerHTML={{ __html: MOTION_BOOT_SCRIPT }} />
      </head>
      <body>
        <AppProviders>
          <a
            href="#main"
            className="fixed -top-[60px] left-3 z-[300] rounded-full bg-ink px-4 py-2.5 text-white transition-[top] duration-200 focus:top-3"
          >
            Skip to content
          </a>
          <SvgDefs />
          <SiteHeader />
          <SiteMenu />
          {children}
          <SiteFooter />
          <DoctorDrawer />
          <BookingSheet />
          <Cursor />
        </AppProviders>
      </body>
    </html>
  );
}
