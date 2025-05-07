import React from 'react';
import Image from 'next/image';

const data = [
  {
    icon: '/testimonials/sarah.jpg',
    name: 'Sarah A.',
    description: `I've been struggling with diabetes for years, and finding meals that suit my dietary needs has always been a challenge. Sito Health has been a game-changer for me. Their healthy meal delivery service ensures I get nutritious, delicious meals that help me manage my condition better. Living in Lagos, having a reliable service that understands my needs is such a relief. I highly recommend it!`,
  },
  {
    icon: '/testimonials/tunde.jpg',
    name: 'Tunde B.',
    description: `Finding healthy meals that I enjoy has been a real struggle for someone living with obesity. But then, Sito Health's meal delivery service came to my rescue. The variety and quality of their meals are beyond my expectations, and I'm grateful that they cater specifically to people like me. Since I started using their service, I've experienced a significant improvement in my health and energy levels. Sito Health is a game-changer for anyone in Lagos looking to eat healthier! `,
  },
  {
    icon: '/testimonials/mich.jpg',
    name:'Michael O.',
    description: `Managing high blood pressure has always made meal planning stressful, but Sito Health has completely changed that. Their meals are not only healthy but also incredibly tasty. The convenience of having nutritious meals delivered right to my door in Lagos has made sticking to my diet so much easier. Thanks to Sito Health, I feel better and more in control of my health!`,
  },
]

export default function Testimonial() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-8">
        <div className='text-center max-w-3xl mx-auto mb-12'>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className='text-gray-600'>See what people are saying about us</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {data.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
              {/* User info */}
              <div className="flex items-center mt-auto pb-4">
                <Image
                  src={testimonial.icon}
                  alt={`${testimonial.name} avatar`}
                  width={48}
                  height={48}
                  className="rounded-full object-cover h-12 w-12 border-2 border-orange-100"
                />
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                {testimonial.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}