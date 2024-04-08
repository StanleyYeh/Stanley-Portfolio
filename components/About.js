import DevImg from "./DevImg"
import Image from 'next/image'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@/components/ui/tabs'

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneIcon,
  GraduationCap,
  Calendar,
  Briefcase
} from 'lucide-react'
import { RiPhoneCameraFill } from "react-icons/ri"
import { withCoalescedInvoke } from "next/dist/lib/coalesced-function"

const infoData = [
  {
    icon: <User2 size={20} />,
    text: '葉少芃 Stanley Yeh',
  },
  {
    icon: <PhoneIcon size={20} />,
    text: '0919-123456',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'yes0319@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 19 Mar, 1985',
  },
  {
    icon: <GraduationCap size={20} />,
    text: '逢甲大學 資訊工程碩士',
  },
  {
    icon: <HomeIcon size={20} />,
    text: '彰化縣彰化市茄苳路二段100巷18號',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: '中華大學',
        qualification: '生物資訊學系 大學部',
        years: '2003-2007'
      },
      {
        university: '逢甲大學',
        qualification: '資訊工程學系 碩士班',
        years: '2007-2009'
      },
    ]
  },
  {
    title: 'experience',
    data: [
      {
        company: '瑞昱半導體',
        role: '韌體工程師 Firmware Engineer',
        years: '2011-2015'
      },
      {
        company: '英業達集團',
        role: '伺服器韌體工程師 Senior Firmware Engineer',
        years: '2015-2020'
      },
      {
        company: 'Home',
        role: '全端開發工程師 Full Stack developer',
        years: '2022-'
      },
    ]
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development',
      },
      {
        name: 'Javascript, PHP',
      },
      {
        name: 'Back-end Development',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

export default function About() {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className=" xl:h-[860px] pb-12 xl:py-24">
      <div className=" container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark 
              w-[505px] h-[505px] bg-no-repaet relative'
              imgSrc='/about/developer.png'
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              {/* Tabs trigger Container */}
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px]
              xl:border dark:border-none '>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  個人簡介
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='qulifications'>
                  學經歷
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  專業技能
                </TabsTrigger>
              </TabsList>
              {/* Tabs Content */}
              <div className=' text-lg mt-12 xl:mt-8'>
                {/* Personal */}
                <TabsContent value='personal'>
                  <div className=' text-center xl:text-left'>
                    <h3 className="h3 mb-4"> 超過10年的軟體開發經驗</h3>
                    <p className=" subtitle max-w-xl mx-auto xl:mx-0">
                      畢業於逢甲大學資訊工程學系碩士班，先後在瑞昱半導體與英業達集團從事軟韌體開發，之後因為家庭因素，轉而在家接案從事全端網站開發。
                    </p>
                    {/* infoData icons/intro */}
                    <div className=" grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value='qulifications'>
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left"> </h3>
                    {/* experience & education Container */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div>
                        <div className="flex gap-x-4 mb-6 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className=" h4 capitalize font-medium">
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'experience').data
                            .map((item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group"
                                  key={index}
                                >
                                  {/* Dot */}
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary
                                  absolute -left-[5px] group-hover:translate-y-[84px] transition-all
                                  duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none">
                                      {company}
                                    </div>
                                    <div className=" text-lg  text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          }
                        </div>
                      </div>
                      {/* education */}
                      <div>
                        <div className="flex gap-x-4 mb-6 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className=" h4 capitalize font-medium">
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, 'education').data
                            .map((item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group"
                                  key={index}
                                >
                                  {/* Dot */}
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary
                                  absolute -left-[5px] group-hover:translate-y-[84px] transition-all
                                  duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none">
                                      {university}
                                    </div>
                                    <div className=" text-lg  text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* Skills */}
                <TabsContent value='skills'>
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">討生活的工具夥伴們</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills List */}
                      <div className=' '>
                        {getData(skillData, 'skills').data
                          .map((item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          })
                        }
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tools List */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, 'tools').data
                          .map((item, index) => {
                            const { imgPath } = item;
                            return (
                              <div key={index}>
                                <Image src={imgPath} width={48} height={48} alt='' priority />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}