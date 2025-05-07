import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
      <section className="relative bg-white py-20 min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Hero.jpg"
          alt="Healthy meal preparation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white">
            Reverse Diseases With a<br /> <span className="text-secondary">Simple Diet Plan</span>
          </h1>
          <p className="text-sm sm:text-base mb-8 text-white/90">
          We offer personalized meal plans and medically tailored foods to help you take back your health.
          </p>
          <Link href='https://cookedindoors.bumpa.shop'>
          <button className="bg-primary text-sm cursor-pointer text-white px-10 py-2 rounded-md hover:bg-primary/90 transition">
            Order a Meal Kit
          </button>
          </Link>
        </div>
      </div>
    </section>
    )
}