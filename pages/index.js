// pages/index.js

import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import BenefitCard from '../components/BenefitCard'

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
      <Section id="sec-como-funciona" columns={2} layout="grid">
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

      {/* Passo 3: Seção 'Benefícios' */}
      <Section id="beneficios" columns={3} layout="grid">
        <BenefitCard
          title="🧘‍♀️ Alívio Progressivo do Estresse"
          description="Sinta a diferença no seu ritmo interno. O tratamento busca favorecer um estado de maior equilíbrio e tranquilidade ao longo do tempo."
        />
        <BenefitCard
          title="⚡ Energia Renovada para Seu Dia a Dia"
          description="Muitos relatam melhora gradual na disposição. A terapia energética pode colaborar com o equilíbrio no cotidiano."
        />
        <BenefitCard
          title="🛡️ Fortalecimento do Sistema Imunológico"
          description="O equilíbrio energético pode melhorar o funcionamento do organismo. Muitas pessoas relatam bem-estar durante o processo."
        />
        <BenefitCard
          title="🌙 Melhora na Qualidade do Sono"
          description="Alguns clientes percebem mudanças positivas no sono, como sensação de descanso mais profundo e regular."
        />
        <BenefitCard
          title="🧠 Aumento da Clareza Mental"
          description="O reequilíbrio energético pode favorecer estados de maior concentração, contribuindo para decisões mais conscientes no dia a dia."
        />
        <BenefitCard
          title="💖 Harmonia Emocional Duradoura"
          description="O tratamento atua de forma sutil no campo emocional, podendo favorecer estabilidade interna e maior percepção de equilíbrio ao longo do tempo."
        />
      </Section>
    </>
  )
}
