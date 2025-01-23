import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    name: 'Creative Cooks',
    type: 'Case study',
    pic: '/Cover.png',
    // href: 'https://medium.com/@andrewmonthero/creative-cooks-ui-ux-case-study-5fb14d3332a1',
    href:'/Creative_cooks'
  },
  {
    name: 'Synergia',
    type: 'Website',
    pic: '/Synergia_Cover.png',
    href: 'https://synergia-hrm.vercel.app/',
  },
  {
    name: 'Uniclo',
    type: 'Product Design',
    pic: '/Uniclo_Cover.png',
    href: 'https://www.behance.net/gallery/190496079/Uniclo-HRM',
  },
];

const Projects = () => {
  return (
    <div className='relative flex flex-wrap gap-[2.5rem] overflow-x-auto w-screen'>
      {projects.map((proj, index) => {
        return (
          <Link
            href={proj.href}
            key={index}
            className='lg:min-w-[573px] w-[23rem] h-full gap-2 flex flex-col'
            passHref
            legacyBehaviour 
          ><a target="_blank" rel="noopener noreferrer">
            <div className='relative w-full h-[18rem] lg:h-[25.5rem] lg:w-[35.813rem]'>
              <Image
                src={proj.pic}
                alt={proj.name}
                fill={true}
                className='object-fit'
              />
            </div>
            <div className='flex justify-between uppercase font-semibold'>
              <h5>{proj.name}</h5>
              <span className='text-[#646464] flex items-center text-[0.875rem] lg:text-[1.25rem] font-semibold leading-[1.125] lg:leading-[1.2] gap-1'>
                Type
                <h5 className='text-[#B7AB98]'>{proj.type}</h5>
              </span>
            </div>
           </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Projects;
