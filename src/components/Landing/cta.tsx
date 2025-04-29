'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-orange-500 overflow-hidden relative">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:max-w-xl">
              Join Thousands of Patients on Their Path to Better Health, One Meal at a Time
            </h2>
            <Link 
              href="/meal-plan"
              className="inline-block bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition font-medium"
            >
              Get Started
            </Link>
          </div>
          
          <div className="md:absolute md:right-0 md:bottom-0 mt-8 md:mt-0">
            <Image
              src="/doctor-fruits.png"
              alt="Doctor holding fruits"
              width={400}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Background circular pattern */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="w-full h-full border-4 border-white rounded-full transform scale-150"></div>
      </div>
    </section>
  )
}