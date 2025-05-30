// pages/index.js

import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Header
        bgColor="#7A8AD6"
        logoSrc="https://quantecportal.com/wp-content/uploads/2025/04/logo-angelo-1-1.svg"
        menu={[
          { label: 'Etapas', href: '#sec-como-funciona', small: true },
          { label: 'Quem é Angelo Coviello', href: '#sec-quem-somos', small: true },
        ]}
      />

      <Hero
        bgColor="#7A8AD6"
        title="Teste Básico"
        subtitle="Se esse build subir, ambiente está ok."
        imageSrc="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
        buttonLabel="Botão Teste"
        buttonPhone="5521979658483"
        buttonMessage="Teste"
      />

      {/* Passo 2: Seção 'Como Funciona' */}
      <Section id="sec-como-funciona" columns={2}>
        <div>
          <h2>Terapia Quântica: Como Funciona</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🧠 A terapia busca identificar padrões sutis — emocionais, mentais, físicos ou energéticos — que influenciam a vida da pessoa, mesmo sem que ela perceba de forma consciente.</li>
            <li>⚖️ Esses desequilíbrios podem estar por trás de conflitos, bloqueios ou desconfortos. Lidar com essas causas ajuda a promover mudanças reais no cotidiano.</li>
            <li>🔄 Cada pessoa reage de forma única, por isso os resultados podem variar de acordo com a experiência e o momento de cada um.</li>
            <li>🌱 A terapia não é uma promessa, mas tende a funcionar melhor quando haja abertura para se observar, escutar a si mesmo e aplicar pequenas mudanças conscientes no seu dia a dia.</li>
          </ul>
        </div>
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
          alt="Terapia Quântica: Como Funciona"
        />
      </Section>
    </>
  )
}
