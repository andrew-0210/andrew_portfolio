import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    name: 'about',
    href: '/#about-me',
  },
  {
    name: 'work',
    href: '/#projects',
  },
  {
    name: 'contact',
    href: '/#contact',
  },
];
const Navbar = () => {
  return (
    <div className='fixed z-[999] flex w-screen justify-center lg:pt-[1rem] nav-gradient backdrop-blur-[6px]'>
      <nav className='nav-gradient flex w-screen items-center justify-between py-[1.25rem] px-[1rem] md:px-0 backdrop-blur-[6px] xl:max-w-[1420px] '>
        <Link href='/'>
          <div className='relative lg:h-[2.5rem] lg:w-[3.75rem] h-[2rem] w-[2rem]'>
            <Image
              src='./andrew.svg'
              alt='andrew_logo'
              fill={true}
              className='object-fit'
            />
          </div>
        </Link>
        <div>
          <ul className='flex gap-5 font-semibold leading-[1.5] -tracking-[1]'>
            {links.map(link => (
              <li
                key={link.name}
                className='text-[0.875rem] lg:text-[1.125rem]'
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
