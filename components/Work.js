'use client';

import Link from 'next/link'
import { Button } from './ui/button'

//swiper react components
import { Swiper, SwiperSlide } from 'swiper/react'

//swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

//required modules
import { Pagination } from 'swiper/modules'

//component
import ProjectCard from './ProjectCard';
import { Description } from '@radix-ui/react-dialog'

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Nexa Website Nexa Website Nexa Website Nexa Website Nexa Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/4.png',
    category: 'react js',
    name: 'Nexa Website',
    description: 'Nexa Website Nexa Website Nexa Website Nexa Website Nexa Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/2.png',
    category: 'next js',
    name: 'Nexa Website',
    description: 'Nexa Website Nexa Website Nexa Website Nexa Website Nexa Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'next js',
    name: 'Nexa Website',
    description: 'Nexa Website Nexa Website Nexa Website Nexa Website Nexa Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/3.png',
    category: 'next js',
    name: 'Nexa Website',
    description: 'Nexa Website Nexa Website Nexa Website Nexa Website Nexa Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/1.png',
    category: 'fullstack',
    name: 'Nexa Website',
    description: 'Nexa Website Nexa Website Nexa Website Nexa Website Nexa Website',
    link: '/',
    github: '/',
  },
];

export default function Work() {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className=' container mx-auto'>
        {/* text */}
        <div className=' max-w-[400px] mx-auto xl:mx-0 text-center
        xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
        xl:items-start'>
          <h2 className='section-title mb-4'>近期作品</h2>
          <p className=' subtitle mb-8'>Latest Projects Latest Projects Latest Projects Latest Projects</p>
          <Link href='/projects'>
            <Button>
              All Projects
            </Button>
          </Link>
        </div>
        {/* Slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[550px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only the first 4 projects for the slider*/}
            {
              projectData.slice(0, 4)
                .map((project, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <ProjectCard project={project} />
                    </SwiperSlide>
                  );
                })
            }
          </Swiper>
        </div>
      </div>
    </section>
  );
}