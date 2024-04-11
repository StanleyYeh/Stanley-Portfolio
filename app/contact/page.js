import Form from '@/components/Form';

import {
  MailIcon,
  HomeIcon,
  PhoneCall
} from 'lucide-react'

export default function Contact({ children }) {
  return (
    <section>
      <div className=' container mx-auto'>
        {/* text &  illustration */}
        <div className=' grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            <div className='flex items-center gap-x-4 text-primary text-lg mb-4'>
              <span className='w-[30px] h-[2px] bg-primary'></span>
              Say Hello!
            </div>
            <h1 className='h1 max-w-md mb-8'>Let's Work Together.</h1>
            <p className=' subtitle max-w-[400px]'>
              Eid al-Fitr, the holiday marking the end of the Ramadan fast, will begin Wednesday, according to Saudi Arabia, home to two of Islam’s holiest sites.
            </p>
          </div>
          {/* illustration */}
          <div className=' hidden xl:flex w-full bg-contact_illustration_light
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'>
          </div>
        </div>
        {/* info text & form */}
        <div className='grid xl:grid-cols-2 mb-24 xl:mb-32'>
          {/* info text */}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24
          text-base xl:text-lg'>
            {/* mail */}
            <div className='flex items-center gap-8'>
              <MailIcon size={18} className='text-primary' />
              <div>yes0319@gmail.com</div>
            </div>
            {/* address */}
            <div className='flex items-center gap-8'>
              <HomeIcon size={18} className='text-primary' />
              <div>彰化縣彰化市茄苳路二段100巷25號</div>
            </div>
            {/* phone */}
            <div className='flex items-center gap-8'>
              <PhoneCall size={18} className='text-primary' />
              <div>0919-087888</div>
            </div>
          </div>
          <Form />
        </div>

      </div>
    </section>
  );
}