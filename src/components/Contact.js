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
        className='flex flex-col gap-[1.5rem] py-[5rem] lg:py-[9.5rem]'
        id='contact'
      >
        <h4>Connect with Me</h4>
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
      </footer>
    </Container>
  );
};

export default Contact;
