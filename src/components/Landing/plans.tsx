import Image from "next/image"
import HoverTextEffect from "../HoverTextEffect"

const data = [
  {
    icon: '/plans/diabIcon.svg',
    title: 'Diabetes-Friendly Diet',
    description: 'Whole foods high in fiber lean protein, and healthy fats to manage blood sugar levels.',
    image: '/plans/diabbg.png'
  },
  {
    icon: '/plans/heartIcon.svg',
    title: 'Heart-Friendly Diet',
    description: 'Low sodium diet to help manage blood pressure and reduce the risk of cardiovascular diseases.',
    image: '/plans/heartbg.png'
  },
  {
    icon: '/plans/carbIcon.svg',
    title: 'Low-Carb Diet',
    description: 'Providing fewer calories than the body expends to a calorie deficit and subsequent weight loss.',
    image: '/plans/carbbg.png'
  },
  {
    icon: '/plans/wellnessIcon.svg',
    title: 'General Wellness',
    description: 'Balanced nutrition to promote overall health and well-being.',
    image: '/plans/wellnessbg.png'
  },
]

export default function Plan() {
  return (
    <section className="bg-[#F7F9FF] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-black text-2xl md:text-4xl font-bold mb-3">Meal Plans</h2>
          <p className="text-gray-600">Whether you&apos;re managing diabetes, hypertension, trying to lose weight, or simply seeking healthier meals, we&apos;ve got you covered</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {data.map((plan, index) => (
            <div key={index} className="group p-3 md:p-4 flex flex-col h-full hover:bg-gray-50 rounded-lg transition-colors duration-300 border-gray-100">
              {/* Top section with icon and title */}
              <div className="flex-none">
                <div className="flex justify-start mb-2">
                  <Image
                    src={plan.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                </div>
                <HoverTextEffect>
                  <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>
                </HoverTextEffect>
              </div>

              {/* Middle section with description - fixed height */}
              <div className="flex-grow min-h-[60px]">
                <p className="text-[#626262] text-sm group-hover:text-gray-800 transition-colors duration-300">{plan.description}</p>
              </div>

              {/* Bottom section with image - always at bottom */}
              <div className="flex-none mt-4">
                <div className="flex justify-start">
                  <Image
                    src={plan.image}
                    alt=""
                    width={120}
                    height={120}
                    className="rounded-full mb-2 w-40 h-40 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
