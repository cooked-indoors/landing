import Image from "next/image"

export default function Cook() {
  return (
    <section className="bg-white py-16">
    <div className="container mx-auto px-8">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 md:pr-8 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-4xl md:w-100 font-semibold mb-6 text-black">Tired of thinking about what to cook?</h2>
          <p className="text-base text-[#626262] mb-6 md:pr-24">Our meal kits come packed with pre-portioned, nutritionist-approved ingredients, designed to help you cook delicious, balanced meals at home, with zero stress. </p>
          <div className="text-[#626262] py-6">
            <h3 className="text-lg font-bold mb-2">We make it simple:</h3>
          <ul className="list-disc list-inside ">
            <li>No market stress</li>
            <li>No guessing what to eat</li>
            <li>No wasting food</li>
          </ul>
          Just fresh, healthy meals you can cook in minutes.
          </div>
          <button className="bg-primary text-sm w-60 text-white px-8 py-2.5 cursor-pointer rounded-lg hover:bg-primary/90 transition">
           Order Now
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <Image
            src="/cook.png"
            alt="Online dietitian consultation"
            width={500}
            height={500}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  </section>
  )
}