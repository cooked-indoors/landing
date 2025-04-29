import React from 'react'
import Image from 'next/image'
import AnimateInView from './animateInView'
import Feature from './Landing/feature'
import Plan from './Landing/plans'
import Testimonial from './Landing/testimonial'
import Dietician from './Landing/dietician'
import Hero from './Landing/hero'
import CTASection from './Landing/cta'

export default function LandingPage() {
    return (
        <main className="min-h-screen">
          {/* Hero Section */}
          <AnimateInView>
       <Hero />
          </AnimateInView>
    
          {/* Meal Plans Section */}
          <AnimateInView>
            <Plan />
          </AnimateInView>
    
          <AnimateInView>
            <Dietician />
          </AnimateInView>
    
          {/* Features Section */}
          <AnimateInView>
         <Feature />
          </AnimateInView>
    
          {/* Testimonials Section */}
          <AnimateInView>
          <Testimonial />
          </AnimateInView>
    
          {/* CTA Section */}
          <AnimateInView>
        <CTASection />
          </AnimateInView>
        </main>
      )
}