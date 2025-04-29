import Image from "next/image"

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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Reverse Diseases With a Simple Diet Plan
          </h1>
          <p className="text-lg mb-8 text-white/90">
            Get the perfect meal plan that helps you achieve your health goals
          </p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
    )
}