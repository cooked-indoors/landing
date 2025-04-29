import Image from "next/image"

export default function Dietician() {
  return (
    <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6">Need to Speak to a Dietitian?</h2>
          <p className="text-lg mb-6">
            Get personalized meal plans and advice from our expert dietitians
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Book a Call
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/dietitian.jpg"
            alt="Online dietitian consultation"
            width={400}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  </section>
  )
}