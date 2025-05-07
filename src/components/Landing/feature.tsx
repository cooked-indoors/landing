import React from 'react';
import Image from 'next/image';


const data = [
  {
    icon: '/features/orderIcon.svg',
    title: 'Order Online',
    description: 'Place your orders online, ensuring to do so at least 24 hours before your preferred delivery time.',
  },
  {
    icon: '/features/deliveryIcon.svg',
    title: 'Delivery',
    description: 'Flexibly choose the day and time to receive your meals, fitting perfectly into your busy schedule.',
  },
  {
    icon: '/features/virtualIcon.svg',
    title: 'Book A Virtual Appointment',
    description: 'If you need more clarification about your diet or meal plan options, speak to a registered dietitian online from anywhere.',
  },
]


export default function Feature() {
  return (
    <section className="bg-[#FFF7F1] py-16 md:py-24">
    <div className="container mx-auto px-8">
      <div className="text-center mx-auto mb-16">
        <h2 className="text-2xl md:text-4xl text-gray-800 font-bold mb-4">
          <span className='text-primary'>Better Health</span> Starts With <span className='text-secondary'>Every Meal</span> We Deliver
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:h-[400px]">
        <div className="w-full md:w-5/12 h-auto md:h-full">
          <div className="relative w-full h-full">
            <Image
              src="/features/feature.png"
              alt="Online dietitian consultation"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover shadow-md"
              // style={{ objectFit: 'cover', height: '100%' }}
              priority
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 mb-8 md:mb-0 pl-0 md:pl-4 flex flex-col">
          <div className="flex-grow">
            {data.map((feature, index) => (
              <div
                key={index}
                className="group flex justify-start items-start py-2 md:p-4 mb-2 hover:shadow transition-all duration-300 hover:border-secondary"
              >
                <div className="flex-shrink-0 mr-4 md:p-2 bg-orange-50 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                  <Image src={feature.icon} alt="" width={40} height={40} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-auto bg-primary text-sm font-medium w-50 text-white px-8 py-2 cursor-pointer rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg flex items-center">
            <span>Explore Meals</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}