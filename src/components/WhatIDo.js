import Container from './ui/Container';

const expertise = [
  'UI/UX Design',
  'Mobile App Design',
  'Web App Design',
  'Website Design',
  'UI Development',
];

const WhatIDo = () => {
  return (
    <Container>
      <section className='flex flex-col gap-[1.5rem] lg:gap-[3rem] py-[5rem]'>
        <div>
          <h4>What I Do</h4>
        </div>
        <ul>
          {expertise.map((exp, index) => {
            return (
              <li
                key={index}
                className='py-[0.75rem] border-b border-[#3d3c3b] uppercase'
              >
                {exp}
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
};

export default WhatIDo;
