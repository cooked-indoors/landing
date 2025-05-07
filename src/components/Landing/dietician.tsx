import Image from "next/image"

export default function Dietician() {
  return (
    <section className="bg-white py-16">
    <div className="container mx-auto px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-black">Need to Speak to a <span className="text-secondary">Dietitian?</span></h2>
          <p className="text-lg text-[#626262] mb-6 md:pr-24">
          95% of our patients meet with a dietitian for free and get up to 80% off their personalized meal plans
          </p>
          <button className="bg-primary text-sm text-white px-8 py-2.5 cursor-pointer rounded-lg hover:bg-primary/90 transition">
            Book a Free Session
          </button>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/dietitian.png"
            alt="Online dietitian consultation"
            width={400}
            height={400}
            className="rounded-lg w-auto"
          />
        </div>
      </div>
    </div>
  </section>
  )
}