import React from 'react';
import ProjectAnim from './ProjectAnim';
import Projects from './Projects';
import Container from './ui/Container';

const ProjectsSect = () => {
  return (
    <div id='projects' className='relative py-[5rem]'>
      <div
        id='projects'
        className=' overflow-hidden flex flex-col gap-[1.5rem]'
      >
        <div className='sticky top-0 h-full'>
          <ProjectAnim />
        </div>

        <Container>
          <Projects />
        </Container>
      </div>
    </div>
  );
};

export default ProjectsSect;
