import Benefits from '@/components/Benefits'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Images from '@/components/Images'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-[100vw]">
      <Hero />
      <Benefits />
      <Services />
      <Testimonials />
      <Images />
      
    </main>
  )
}
