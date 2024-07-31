
import Banner from '@/components/banners/banner'
import Banner01 from '@/components/banners/banner-01'
import React from 'react'
const banners = [
  {
    title: 'Banner 01',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    image: 'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw4fHxzaG9wcGluZ3xlbnwwfHx8fDE3MjIzNDkxMDF8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=1080&w=1080',
    cta: 'Get Started',
    background: '/banner-01.jpeg',
    variant: '01'
  },
  {
    title: 'Banner 02',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    image: 'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw4fHxzaG9wcGluZ3xlbnwwfHx8fDE3MjIzNDkxMDF8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=1080&w=1080',
    cta: 'Get Started',
    background: 'https://images.unsplash.com/photo-1512658740823-0ebb97b3b86e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    variant: '02'
  },
  {
    title: 'Banner 03',
    description: 'Lorem ipsum dolor sit nec, ultricies sed, dolor.',
    image: 'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw4fHxzaG9wcGluZ3xlbnwwfHx8fDE3MjIzNDkxMDF8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=1080&w=1080', cta: 'Get Started',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png',
    variant: '03'
  },
  {
    title: 'Banner 04',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.',
    image: 'https://images.unsplash.com/photo-1487744480471-9ca1bca6fb7d?ixid=M3w0NTY3MTh8MHwxfHNlYXJjaHw4fHxzaG9wcGluZ3xlbnwwfHx8fDE3MjIzNDkxMDF8MA&ixlib=rb-4.0.3&crop=edges&fit=crop&h=1080&w=1080',
    cta: 'Get Started',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png',
    variant: '04'
  }
]

export default function Home() {
  return (
    <div className='grid md:grid-cols-5 gap-4 p-5 auto-rows-fr auto-cols-fr grid-cols-1'>
      {banners.map((banner, index) => (
        <Banner
          key={index}
          title={banner.title}
          description={banner.description}
          image={banner.image}
          cta={banner.cta}
          background={banner.background}
          variant={banner.variant}
        />
      ))}

    </div>
  )
}
