// Shared queues so elements that appear together animate as one staggered batch, even though each element sets up
// its own trigger (an element's own effect is the only safe place to touch it: by then it has hydrated).
import { gsap } from './gsap';
import { introDelay } from './intro';

function batcher(play: (els: HTMLElement[]) => void) {
  let queue: HTMLElement[] = [];
  let frame = 0;
  return (el: HTMLElement) => {
    queue.push(el);
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const batch = queue;
      queue = [];
      play(batch);
    });
  };
}

/** Fade up as the element scrolls into view */
export const queueReveal = batcher((els) =>
  gsap.to(els, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.08, clearProps: 'transform,opacity' }),
);

/** Hero supporting content: rises just after the heading (and after the first-visit intro) */
export const queueLead = batcher((els) =>
  gsap.to(els, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', stagger: 0.08, delay: introDelay() + 0.45, clearProps: 'transform,opacity' }),
);
