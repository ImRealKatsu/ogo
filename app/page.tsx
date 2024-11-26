import Hero from '@/components/Hero'

import Features from '@/components/Features'

import Testimonials from '@/components/Testimonials'

import CTA from '@/components/CTA'

import LegalInfo from '@/components/LegalInfo'


export default function Home() {

  return (

    <main className="bg-gray-900 text-white">

      <Hero />

      <Features />

      <Testimonials />

      <CTA />

      <LegalInfo />

    </main>

  )

}