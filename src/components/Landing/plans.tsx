import Image from "next/image"

export default function Plan() {
    return (
<section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meal Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Standard Healthy Diet',
              'Plant-Based Diet',
              'Low-Carb Diet',
              'General Diet Plan'
            ].map((plan, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <Image
                  src={`/meal-${index + 1}.jpg`}
                  alt={plan}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-4">{plan}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}