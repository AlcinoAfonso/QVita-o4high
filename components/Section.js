// components/Section.js

export default function Section({ id, columns = 1, layout, gray, children }) {
  const isGrid = layout === 'grid';
  const gridClasses = isGrid
    ? `grid gap-x-8 gap-y-12 md:grid-cols-${columns}`
    : `flex flex-col gap-y-12`;

  return (
    <section id={id} className={`${gray ? 'bg-bg-light' : ''} mb-24`}>
      <div className={`max-w-[1200px] mx-auto px-4 md:px-6 py-12 md:py-16 ${gridClasses}`}>
        {children}
      </div>
    </section>
  );
}
