import { CareAtlas } from '@/components/home/CareAtlas';
import { DoctorStrip } from '@/components/home/DoctorStrip';
import { HelpSplit } from '@/components/home/HelpSplit';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Stage } from '@/components/home/Stage';
import { Intro } from '@/components/layout/Intro';

export default function HomePage() {
  return (
    <>
      <Intro />
      <main id="main">
        <Hero />
        <Stage />
        <CareAtlas />
        <HowItWorks />
        <DoctorStrip />
        <HelpSplit />
      </main>
    </>
  );
}
