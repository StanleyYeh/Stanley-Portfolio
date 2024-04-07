'use client';

import Link from 'next/link'

import {
  RiYoutubeFill,
  RiGithubFill,
  RiFacebookBoxFill,
  RiInstagramFill

} from 'react-icons/ri'

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: '/',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiFacebookBoxFill />,
  },
  // {
  //   path: '/',
  //   name: <RiInstagramFill />,
  // },
];

export default function Socials({ containerStyles, iconsStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {
        icons.map((icon, index) => {
          return (
            <Link
              href={icon.path}
              key={index}
              className={`${iconsStyles}`}
            >
              <div>
                {icon.name}
              </div>
            </Link>
          );
        })}
    </div>
  );
}