export default function Home() {
  return (
    <section className="w-full bg-[#7A8AD6] py-12 px-4 flex flex-col md:flex-row items-center justify-between min-h-screen">
      <div className="flex-1 flex flex-col gap-4 max-w-xl">
        <h1 className="text-[2.5rem] font-bold leading-[1.2] tracking-tight font-inter text-white">
          Medicina Quântica Segura Com Tecnologia de Ponta
        </h1>
        <p className="text-[1.25rem] font-semibold leading-[1.4] tracking-normal font-inter text-white">
          Terapia Quântica não invasiva, reconhecida na Europa e aplicada com precisão por profissional experiente.
        </p>
        <a
          href="https://wa.me/5521979658483?text=Gostaria%20de%20saber%20mais%20sobre%20a%20terapia"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-2xl shadow hover:bg-green-700 transition"
        >
          Entenda os Benefícios
        </a>
      </div>
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
          alt="Angelo Coviello"
          className="rounded-2xl w-full max-w-xs shadow"
        />
      </div>
    </section>
  );
}
