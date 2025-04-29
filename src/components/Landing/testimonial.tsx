import React from 'react';
import Image from 'next/image';

export default function Testimonial() {
  return (
<section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={`/avatar-${testimonial}.jpg`}
                    alt="User avatar"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">Client Name</h4>
                    <p className="text-gray-600">Verified Customer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The meal plans have completely transformed my health journey. I feel more energetic and healthier than ever!"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}