// components/FeatureSplit.js

export default function FeatureSplit({
  title = 'Terapia Quântica: Como Funciona',
  items = [],
  imgSrc = '',
}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Texto */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-center lg:text-left text-brand">
            {title}
          </h2>
          <ul className="space-y-4 list-disc list-inside">
            {items.map((item, idx) => (
              <li key={idx} className="text-lg">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Imagem */}
        <div className="flex-1">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
