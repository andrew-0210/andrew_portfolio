import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import WhatIDo from '@/components/WhatIDo';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <WhatIDo />
      <Projects />
      <Experience />
    </main>
  );
}
