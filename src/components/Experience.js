import Container from './ui/Container';

const experience = [
  {
    duration: 'Now',
    designation: 'UI/UX Designer',
    company: 'Adaptify Digital, Australia',
  },
  {
    duration: '2022 - 2024',
    designation: 'UI/UX Designer',
    company: 'Terado Engineering, India',
  },
  {
    duration: '2021 - 2022',
    designation: 'UI/UX Designer(Intern)',
    company: 'Thinkarz Technologies, India',
  },
];

const Experience = () => {
  return (
    <Container>
      <section className='flex flex-col gap-0 lg:gap-[1.5rem] py-[5rem]'>
        <div>
          <h4>Experience</h4>
        </div>
        <div>
          {experience.map((exp, index) => {
            return (
              <div
                className='py-[2.5rem] border-b border-[#3d3c3b] flex flex-col lg:flex-row lg:gap-[10rem] gap-[1.25rem]'
                key={index}
              >
                <h3 className=' uppercase font-bold w-[210px]'>
                  {exp.duration}
                </h3>
                <div className='flex flex-col flex-1 gap-2'>
                  <h3 className='uppercase font-bold '>{exp.designation}</h3>
                  <h5 className='lg:text-[1.125rem] text-[0.875rem] uppercase font-medium text-[#6c6c6c]'>
                    {exp.company}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
        <div className='inline-block pt-6 lg:pt-0'>
          <a
            href='/Andrew_Monthero_resume.pdf'
            target='_blank'
            alt='Andrew_Resume'
            rel='noopener noreferrer'
            className='text-[#FFF] font-semibold px-5 py-3 bg-[#EB5939] inline-block rounded-lg'
          >
            Download Resume
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Experience;
