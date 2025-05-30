// File: components/FeatureSection.js
// Paste this file into your project's components folder.
import WaButton from './WaButton'

export default function FeatureSection({
  title,
  features = [],
  imageUrl,
  inverse = false, // false = text left, image right
}) {
  return (
    <section className="bg-white py-24">
      {/* Title centered above the grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand text-center">
          {title}
        </h2>
      </div>

      {/* Two-column grid: features list and image */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {inverse ? (
          <> 
            {/* Image on left when inverse */}
            <img
              src={imageUrl}
              alt={title}
              className="w-full rounded-lg shadow-lg object-cover h-auto"
            />
            <div className="space-y-4">
              <ul className="list-none text-lg text-gray-700">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <> 
            {/* Features on left when not inverse */}
            <div className="space-y-4">
              <ul className="list-none text-lg text-gray-700">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <img
              src={imageUrl}
              alt={title}
              className="w-full rounded-lg shadow-lg object-cover h-auto"
            />
          </>
        )}
      </div>

      {/* WhatsApp button centered below the grid */}
      <div className="mt-16 text-center">
        <WaButton
          label="Entenda os Benefícios"
          phone="5521979658483"
          message="Gostaria de saber mais sobre a terapia"
        />
      </div>
    </section>
  )
}

/*
In your page (e.g., pages/index.js), import and use this component:

import FeatureSection from '../components/FeatureSection'

<FeatureSection
  title="Terapia Quântica: Como Funciona"
  features={[
    '🧠 A terapia busca identificar padrões sutis — emocionais, mentais...',
    '⚖️ Esses desequilíbrios podem estar por trás de conflitos...',
    // ...other feature strings
  ]}
  imageUrl="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
/>
*/
