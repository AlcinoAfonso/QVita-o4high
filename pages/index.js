// pages/index.js

import FeatureSection from '../components/FeatureSection'

export default function Home() {
  return (
    <>
      <FeatureSection
        title="Terapia Quântica: Como Funciona"
        features={[
          '🧠 A terapia busca identificar padrões sutis — emocionais, mentais, físicos ou energéticos — que influenciam a vida da pessoa, mesmo sem que ela perceba de forma consciente.',
          '⚖️ Esses desequilíbrios podem estar por trás de conflitos, bloqueios ou desconfortos. Lidar com essas causas ajuda a promover mudanças reais no cotidiano.',
          '🔄 Cada pessoa reage de forma única, por isso os resultados podem variar de acordo com a experiência e o momento de cada um.',
          '🌱 A terapia não é uma promessa, mas tende a funcionar melhor quando haja abertura para se observar, escutar a si mesmo e aplicar pequenas mudanças conscientes no seu dia a dia.',
        ]}
        imageUrl="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
        inverse={false}
      />
    </>
  )
}
