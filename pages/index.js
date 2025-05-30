import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import BenefitCard from '../components/BenefitCard'
import Accordion from '../components/Accordion'
import WaButton from '../components/WaButton'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Section
        id="sec-como-funciona"
        bg=""
        title="Terapia Quântica: Como Funciona"
        columns={2}
        image="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
        content={[
          "🧠 A terapia busca identificar padrões sutis — emocionais, mentais, físicos ou energéticos — que influenciam a vida da pessoa, mesmo sem que ela perceba de forma consciente..",
          "⚖️ Esses desequilíbrios podem estar por trás de conflitos, bloqueios ou desconfortos. Lidar com essas causas ajuda a promover mudanças reais no cotidiano.",
          "🔄 Cada pessoa reage de forma única, por isso os resultados podem variar de acordo com a experiência e o momento de cada um.",
          "🌱 A terapia não é uma promessa, mas tende a funcionar melhor quando há abertura para se observar, escutar a si mesmo e aplicar pequenas mudanças conscientes no seu dia a dia."
        ]}
      />
      <Section
        id="sec-beneficios"
        bg=""
        title="Os Benefícios da Energia Quântica no seu dia a dia."
        columns={3}
        image="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
        content={[
          <BenefitCard
            key="estresse"
            title="🧘‍♀️ Alívio Progressivo do Estresse"
            text="Sinta a diferença no seu ritmo interno. O tratamento busca favorecer um estado de maior equilíbrio e tranquilidade ao longo do tempo."
          />,
          <BenefitCard
            key="energia"
            title="⚡ Energia Renovada para Seu Dia a Dia"
            text="Muitos relatam melhora gradual na disposição. A terapia energética pode colaborar com o equilíbrio no cotidiano."
          />,
          <BenefitCard
            key="imunidade"
            title="🛡️ Fortalecimento do Sistema Imunológico"
            text="O equilíbrio energético pode melhorar o funcionamento do organismo. Muitas pessoas relatam bem-estar durante o processo."
          />,
          <BenefitCard
            key="sono"
            title="🌙 Melhora na Qualidade do Sono"
            text="Alguns clientes percebem mudanças positivas no sono, como sensação de descanso mais profundo e regular."
          />,
          <BenefitCard
            key="clareza"
            title="🧠 Aumento da Clareza Mental"
            text="O reequilíbrio energético pode favorecer estados de maior concentração, contribuindo para decisões mais conscientes no dia a dia."
          />,
          <BenefitCard
            key="harmonia"
            title="💖 Harmonia Emocional Duradoura"
            text="O tratamento atua de forma sutil no campo emocional, podendo favorecer estabilidade interna e maior percepção de equilíbrio ao longo do tempo."
          />,
        ]}
      />
      <Section
        id="sec-tecnologia"
        bg=""
        title="Entenda o Quantec"
        columns={2}
        image="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
        content={[
          {
            subtitle: "🧠 Tecnologia Alemã Avançada",
            text: "Dispositivo exclusivo de biocomunicação instrumental, usado à distância, sem medicamentos ou procedimentos físicos."
          },
          {
            subtitle: "🔍 Leitura do Campo Energético",
            text: "Com uma fotografia digital, o sistema acessa padrões mentais, emocionais, físicos e energéticos. A leitura é feita por um sensor que capta informações do inconsciente."
          },
          {
            subtitle: "🌐 Ajustes Frequenciais com Acompanhamento",
            text: "As frequências vibracionais são programadas pelo terapeuta no início do tratamento e atuam automaticamente, dia e noite."
          },
          {
            subtitle: "🏆 Reconhecimento e Precisão",
            text: "Premiado na Europa como Inovação em Saúde. Combina ciência, tecnologia e acompanhamento profissional para um tratamento personalizado."
          },
        ]}
      />
      <Section
        id="sec-etapas"
        bg=""
        title="Etapas do Tratamento"
        columns={2}
        content={[
          {
            subtitle: "🗂️ 1. Receba o material de orientação",
            text: "Após a contratação, você recebe um e‑mail com um vídeo explicativo e o link para o formulário de planejamento."
          },
          {
            subtitle: "📝 2. Defina seus objetivos no formulário",
            text: "Descreva até dois tratamentos e detalhe suas necessidades; essas informações serão a base do planejamento personalizado."
          },
          {
            subtitle: "📸 3. Envie sua foto digital",
            text: "A fotografia conecta seu campo energético ao sistema, permitindo a análise com o diodo de ruído branco e a identificação de desequilíbrios."
          },
          {
            subtitle: "🚀 4. Início do tratamento e acompanhamento",
            text: "Seu tratamento começa em até 4 dias úteis; as frequências vibracionais atuam dia e noite, você recebe relatórios por e‑mail e conta com suporte via WhatsApp para esclarecer dúvidas."
          }
        ]}
        extra={
          <WaButton
            label="Entenda os Benefícios"
            number="5521979658483"
            mensagem="Gostaria de saber mais sobre a terapia"
          />
        }
      />
      <Section
        id="sec-quem-somos"
        bg=""
        title="Quem é Angelo Coviello"
        columns={2}
        image="https://quantecportal.com/wp-content/uploads/2025/02/terapeuta-quantec-300x231.jpg"
        content={[
          "Angelo Coviello é terapeuta especializado em terapias quânticas, vibracionais e holísticas. Com mais de 8 anos de experiência, integra o uso do aparelho Quantec em protocolos voltados ao bem-estar.",
          "Responsável pelos atendimentos deste site, atua com foco no equilíbrio energético e na harmonização entre corpo, mente e emoções. Utiliza abordagens reconhecidas para favorecer estados de saúde e estabilidade."
        ]}
      />
      <Section
        id="sec-depoimentos"
        bg=""
        title="Depoimentos"
        columns={1}
        content={[
          {
            carrossel: [
              "Depoimento: Tratamento de Autismo;",
              "Depoimento: Melhora no Déficit de Atenção, Prosperidade e no Quadro Psicótico Infantil;",
              "Depoimento de Cliente;",
              "QUANTEC: Depoimento de cliente - segundo mês de terapia;",
              "Relato de Cliente;",
              "Depoimento: tratamento da depressão, ansiedade, estresse. Potencializando prosperidade financeira."
            ],
            youtube: true
          }
        ]}
      />
      <Section
        id="sec-faq"
        bg=""
        title="Perguntas Frequentes (FAQ)"
        columns={1}
        content={[
          <Accordion
            key="faq"
            items={[
              {
                question: "Precisa de consulta para tratamento de medicina quântica?",
                answer: "Não. O processo é iniciado com um formulário digital e envio de foto. Não há necessidade de consulta presencial."
              },
              {
                question: "Como o Quantec analisa minha energia?",
                answer: "Ele escaneia seu campo vibracional, comparando com um banco de dados de frequências saudáveis para sugerir ajustes necessários."
              },
              {
                question: "A terapia quântica é segura? Existem efeitos colaterais?",
                answer: "Sim, nossa terapia é completamente segura e não invasiva. Não há efeitos colaterais conhecidos, pois trabalhamos apenas com frequências naturais para harmonizar seu corpo."
              },
              {
                question: "O Quantec realmente funciona?",
                answer: "Muitos clientes relatam melhorias já nas primeiras semanas. No entanto, recomendamos um tratamento mínimo de 3 meses para resultados mais profundos e duradouros."
              },
              {
                question: "Posso fazer a terapia quântica junto com outros tratamentos?",
                answer: "Absolutamente! Nossa terapia é complementar e pode potencializar os efeitos de outros tratamentos. Sempre informe seu médico sobre todas as terapias que está realizando."
              },
              {
                question: "Como é realizado o tratamento à distância?",
                answer: "Utilizamos tecnologia avançada que permite enviar frequências vibracionais específicas para você, independentemente de sua localização. Não é necessário estar fisicamente presente."
              },
              {
                question: "Qual a diferença entre Quantum Vita e outras terapias alternativas?",
                answer: "Utilizamos tecnologia Quantec de ponta, oferecendo tratamentos personalizados e baseados em princípios da física quântica, com resultados mensuráveis."
              },
              {
                question: "A terapia quântica pode tratar problemas emocionais?",
                answer: "Sim, nossa abordagem holística trabalha com o equilíbrio energético, que impacta diretamente nas emoções. Muitos clientes relatam melhora significativa em questões emocionais."
              }
            ]}
          />
        ]}
      />
      <Section
        id="sec-cta"
        bg=""
        title="Veja como funciona antes de decidir pelo tratamento."
        columns={1}
        content={[
          "O processo com o Quantec é claro: dados objetivos, etapas bem definidas e total respeito ao seu ritmo pessoal."
        ]}
        extra={
          <WaButton
            label="Saiba como é feito na prática"
            number="5521979658483"
            mensagem="Gostaria de saber mais sobre a terapia"
          />
        }
      />
    </>
  )
}
