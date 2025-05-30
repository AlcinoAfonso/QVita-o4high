// components/FeatureSection.js

import WaButton from './WaButton'

export default function FeatureSection({
  title,
  features = [],
  imageUrl,
  inverse = false, // false = texto à esquerda, imagem à direita
}) {
  return (
    <section className="bg-white py-16">
      {/* Título centralizado acima do grid */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand text-center">
          {title}
        </h2>
      </div>

      {/* Grid com texto e imagem */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {inverse ? (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="w-full rounded-lg shadow-lg object-cover max-h-96"
            />
            <div className="space-y-6">
              <ul className="space-y-4 list-none text-lg text-gray-700">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-6">
              <ul className="space-y-4 list-none text-lg text-gray-700">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <img
              src={imageUrl}
              alt={title}
              className="w-full rounded-lg shadow-lg object-cover max-h-96"
            />
          </>
        )}
      </div>

      {/* Botão WhatsApp centralizado abaixo do bloco */}
      <div className="mt-8 text-center">
        <WaButton
          label="Entenda os Benefícios"
          phone="5521979658483"
          message="Gostaria de saber mais sobre a terapia"
        />
      </div>
    </section>
  )
}
