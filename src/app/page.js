import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import ProjectsSect from '@/components/ProjectsSect';
import WhatIDo from '@/components/WhatIDo';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <WhatIDo />
      <ProjectsSect />
      <Experience />
    </main>
  );
}


