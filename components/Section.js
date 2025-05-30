// components/Section.js

export default function Section({ id, columns = 1, layout, gray, children }) {
  // Determina classes de grid quando layout="grid"
  const gridClasses = layout === 'grid'
    ? `grid gap-8 md:grid-cols-${columns}`
    : '';

  return (
    <section id={id} className={`${gray ? 'bg-bg-light' : ''} mb-24`}>      
      <div className={`max-w-[1200px] mx-auto px-6 py-15 ${gridClasses}`}>        
        {children}
      </div>
    </section>
  );
}
