'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary overflow-hidden opacity-90 relative pb-6">
      <div className="container mx-auto px-8 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10">
            <h2 className="text-3xl font-semibold text-white mb-8">
              Join Thousands of Patients on Their Path to Better Health, One Meal at a Time
            </h2>
            <Link
              href="#"
              className="inline-block bg-white text-primary px-12 py-2 rounded-sm hover:bg-gray-100 transition font-medium"
            >
              Get Started
            </Link>
          </div>

          <div className="md:absolute md:right-0 md:bottom-0 mt-8 md:mt-0">
            <Image
              src="/cta.png"
              alt="Doctor holding fruits"
              width={400}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background circular patterns */}
      <div className="absolute right-0 top-0 w-96 h-96 opacity-10">
        <div className="absolute inset-0 border-4 border-white rounded-full transform scale-150 animate-pulse-slow"></div>
        <div className="absolute inset-0 border-4 border-white rounded-full transform scale-125"></div>
        <div className="absolute inset-0 border-4 border-white rounded-full transform scale-100"></div>
        <div className="absolute inset-0 border-4 border-white rounded-full transform scale-75"></div>
      </div>  
    </section>
  )
}