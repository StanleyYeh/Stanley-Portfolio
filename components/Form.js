'use client';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare
} from 'lucide-react'

export default function Form() {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      {/* Name */}
      <div className=' relative flex items-center'>
        <Input type='name' id='name' placeholder='Name' />
        <User className='absolute right-6' size={20} />
      </div>
      {/* Email */}
      <div className=' relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* TexArea */}
      <div className=' relative flex items-center'>
        <Textarea placeholder='在此輸入您的需求' />
        <MessageSquare className='absolute right-6 top-4' size={20} />
      </div>
      <Button className='flex items-center gap-x-1 max-w-[166px]'>
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
}