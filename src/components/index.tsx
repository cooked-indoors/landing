import React from 'react'
import AnimateInView, { AnimationVariant } from './animateInView'
import Feature from './Landing/feature'
import Plan from './Landing/plans'
import Testimonial from './Landing/testimonial'
import Dietician from './Landing/dietician'
import Hero from './Landing/hero'
import Cook from './Landing/cook'
import CTASection from './Landing/cta'
import ScrollIndicator from './ScrollIndicator'
import ScrollProgress from './ScrollProgress'

// Define the sections with their animation variants for better organization
type SectionConfig = {
  id: string;
  Component: React.ComponentType;
  animation: AnimationVariant;
  delay: number;
  intensity: 'light' | 'medium' | 'strong';
};

const sections: SectionConfig[] = [
  {
    id: 'plans',
    Component: Plan,
    animation: 'bounce',
    delay: 0.2,
    intensity: 'medium'
  },
  {
    id: 'dietician',
    Component: Dietician,
    animation: 'fadeIn',
    delay: 0.2,
    intensity: 'strong'
  },
  {
    id: 'cook',
    Component: Cook,
    animation: 'bounce',
    delay: 0.3,
    intensity: 'strong'
  },
  {
    id: 'features',
    Component: Feature,
    animation: 'flip',
    delay: 0.3,
    intensity: 'medium'
  },
  {
    id: 'testimonials',
    Component: Testimonial,
    animation: 'parallax',
    delay: 0.2,
    intensity: 'strong'
  },
  {
    id: 'cta',
    Component: CTASection,
    animation: 'parallax',
    delay: 0.1,
    intensity: 'strong'
  },
];

export default function LandingPage() {
  return (
    <div className="w-full">
      {/* Scroll progress indicator */}
      <ScrollProgress />

      {/* Scroll indicator to encourage scrolling */}
      <ScrollIndicator />

      {/* Hero section without animation */}
      <section id="hero" className="relative overflow-hidden">
        <Hero />
      </section>

      {/* Animated sections */}
      {sections.map(({ id, Component, animation, delay, intensity }) => (
        <section key={id} id={id} className="relative overflow-hidden">
          <AnimateInView
            variant={animation}
            delay={delay}
            intensity={intensity}
            once={false} // Set to false to make animations repeat when scrolling up/down
            duration={0.8}
          >
            <Component />
          </AnimateInView>
        </section>
      ))}
    </div>
  )
}