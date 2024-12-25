import Container from './Container';
import Image from 'next/image';

const links = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/andrew-monthero/',
  },

  {
    name: 'Behance',
    href: 'https://www.behance.net/andrew_monthero',
  },
];

const Contact = () => {
  return (
    <Container>
      <footer
        className='flex flex-col gap-[4rem] py-[2rem] lg:py-0 lg:pt-[9.5rem]'
        id='contact'
      >
        <div className='flex flex-col gap-[1rem]'>
          <h4>Connect with Me</h4>
          <span className='text-[#B7AB98] font-semibold'>
            If you have a job opportunity in mind, I would like to hear from
            you.
          </span>
        </div>
        <div>
          <div className='flex lg:flex-row flex-col gap-[5rem] lg:gap-[9.5rem]'>
            <ul className='flex flex-col gap-5 font-semibold leading-[1.5] -tracking-[1]'>
              {links.map(link => (
                <li
                  key={link.name}
                  className='text-[1.5rem] lg:text-[2rem] uppercase flex items-center gap-2'
                >
                  <div className='relative h-[0.75rem] w-[0.75rem] '>
                    <Image
                      src='./arrow.svg'
                      alt='arrow'
                      fill={true}
                      className='object-fit'
                    />
                  </div>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
            <div>
              <h5 className='uppercase'>Email</h5>
              <a href='mailto:andrewmonthero0210@gmail.com' id='gmail'>
                andrewmonthero0210@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className='py-[1.5rem] border-t border-[#3d3c3b]'>
          <p className='text-[0.875rem] text-center font-bold' id='footer '>
            &copy; 2021 - {new Date().getFullYear()} Andrew.
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Contact;
