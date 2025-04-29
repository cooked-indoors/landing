import React from 'react';
export default function Feature() {
  return (
    <section className="bg-gray-50 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        Better Health Starts With Every Meal We Deliver
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: 'Better Health',
            description: 'Scientifically proven meals for optimal health'
          },
          {
            title: 'Delivery',
            description: 'Fresh ingredients delivered to your doorstep'
          },
          {
            title: 'Book A Virtual Appointment',
            description: 'Connect with our expert dietitians online'
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}