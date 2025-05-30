import Header from '../components/Header'
import Hero from '../components/Hero'
import Section from '../components/Section'
import BenefitCard from '../components/BenefitCard'
import Accordion from '../components/Accordion'
import WaButton from '../components/WaButton'

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
        title="Medicina Quântica Segura Com Tecnologia de Ponta"
        subtitle="Terapia Quântica não invasiva, reconhecida na Europa e aplicada com precisão por profissional experiente."
        imageSrc="https://quantecportal.com/wp-content/uploads/2025/03/foto-angelo.webp"
        buttonLabel="Entenda os Benefícios"
        buttonPhone="5521979658483"
        buttonMessage="Gostaria de saber mais sobre a terapia"
      />

      <Section id="sec-como-funciona" columns={2}>
        <div>
          <h2>Terapia Quântica: Como Funciona</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>🧠 A terapia busca identificar padrões sutis — emocionais, mentais, físicos ou energéticos — que influenciam a vida da pessoa, mesmo sem que ela perceba de forma consciente..</li>
            <li>⚖️ Esses desequilíbrios podem estar por trás de conflitos, bloqueios ou desconfortos. Lidar com essas causas ajuda a promover mudanças reais no cotidiano.</li>
            <li>🔄 Cada pessoa reage de forma única, por isso os resultados podem variar de acordo com a experiência e o momento de cada um.</li>
            <li>🌱 A terapia não é uma promessa, mas tende a funcionar melhor quando há abertura para se observar, escutar a si mesmo e aplicar pequenas mudanças conscientes no seu dia a dia.</li>
          </ul>
        </div>
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
          alt="Terapia Quântica: Como Funciona"
        />
      </Section>

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

      <Section id="tecnologia" columns={2}>
        <h2>Entenda o Quantec</h2>
        <div className="space-y-4">
          <div>
            <h3>🧠 Tecnologia Alemã Avançada</h3>
            <p>Dispositivo exclusivo de biocomunicação instrumental, usado à distância, sem medicamentos ou procedimentos físicos.</p>
          </div>
          <div>
            <h3>🔍 Leitura do Campo Energético</h3>
            <p>Com uma fotografia digital, o sistema acessa padrões mentais, emocionais, físicos e energéticos. A leitura é feita por um sensor que capta informações do inconsciente.</p>
          </div>
          <div>
            <h3>🌐 Ajustes Frequenciais com Acompanhamento</h3>
            <p>As frequências vibracionais são programadas pelo terapeuta no início do tratamento e atuam automaticamente, dia e noite.</p>
          </div>
          <div>
            <h3>🏆 Reconhecimento e Precisão</h3>
            <p>Premiado na Europa como Inovação em Saúde. Combina ciência, tecnologia e acompanhamento profissional para um tratamento personalizado.</p>
          </div>
        </div>
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/03/image-18-300x300.webp"
          alt="Entenda o Quantec"
        />
      </Section>

      <Section id="etapas" columns={2}>
        <h2>Etapas do Tratamento</h2>
        <div className="space-y-6">
          <div>
            <h3>🗂️ 1. Receba o material de orientação</h3>
            <p>Após a contratação, você recebe um e-mail com um vídeo explicativo e o link para o formulário de planejamento.</p>
          </div>
          <div>
            <h3>📝 2. Defina seus objetivos no formulário</h3>
            <p>Descreva até dois tratamentos e detalhe suas necessidades; essas informações serão a base do planejamento personalizado.</p>
          </div>
          <div>
            <h3>📸 3. Envie sua foto digital</h3>
            <p>A fotografia conecta seu campo energético ao sistema, permitindo a análise com o diodo de ruído branco e a identificação de desequilíbrios.</p>
          </div>
          <div>
            <h3>🚀 4. Início do tratamento e acompanhamento</h3>
            <p>Seu tratamento começa em até 4 dias úteis; as frequências vibracionais atuam dia e noite, você recebe relatórios por e-mail e conta com suporte via WhatsApp para esclarecer dúvidas.</p>
          </div>
          <WaButton
            label="Entenda os Benefícios"
            phone="5521979658483"
            message="Gostaria de saber mais sobre a terapia"
          />
        </div>
      </Section>

      <Section id="quem-somos" columns={2}>
        <h2>Quem é Angelo Coviello</h2>
        <div className="space-y-4">
          <p>Angelo Coviello é terapeuta especializado em terapias quânticas, vibracionais e holísticas. Com mais de 8 anos de experiência, integra o uso do aparelho Quantec em protocolos voltados ao bem-estar.</p>
          <p>Responsável pelos atendimentos deste site, atua com foco no equilíbrio energético e na harmonização entre corpo, mente e emoções. Utiliza abordagens reconhecidas para favorecer estados de saúde e estabilidade.</p>
        </div>
        <img
          src="https://quantecportal.com/wp-content/uploads/2025/02/terapeuta-quantec-300x231.jpg"
          alt="Angelo Coviello"
        />
      </Section>

      <Section id="depoimentos" columns={1}>
        <h2>Depoimentos</h2>
        <div className="flex space-x-4 overflow-x-auto py-4">
          <div className="min-w-[250px]">Depoimento: Tratamento de Autismo</div>
          <div className="min-w-[250px]">Depoimento: Melhora no Déficit de Atenção, Prosperidade e no Quadro Psicótico Infantil</div>
          <div className="min-w-[250px]">Depoimento de Cliente</div>
          <div className="min-w-[250px]">QUANTEC: Depoimento de cliente - segundo mês de terapia</div>
          <div className="min-w-[250px]">Relato de Cliente</div>
          <div className="min-w-[250px]">Depoimento: tratamento da depressão, ansiedade, estresse. Potencializando prosperidade financeira</div>
        </div>
      </Section>

      <Section id="faq" columns={1}>
        <h2>Perguntas Frequentes (FAQ)</h2>
        <Accordion
          allowMultiple={false}
          items={[
            {
              question: 'Precisa de consulta para tratamento de medicina quântica?',
              answer: 'Não. O processo é iniciado com um formulário digital e envio de foto. Não há necessidade de consulta presencial.'
            },
            {
              question: 'Como o Quantec analisa minha energia?',
              answer: 'Ele escaneia seu campo vibracional, comparando com um banco de dados de frequências saudáveis para sugerir ajustes necessários.'
            },
            {
              question: 'A terapia quântica é segura? Existem efeitos colaterais?',
              answer: 'Sim, nossa terapia é completamente segura e não invasiva. Não há efeitos colaterais conhecidos, pois trabalhamos apenas com frequências naturais para harmonizar seu corpo.'
            },
            {
              question: 'O Quantec realmente funciona?',
              answer: 'Muitos clientes relatam melhorias já nas primeiras semanas. No entanto, recomendamos um tratamento mínimo de 3 meses para resultados mais profundos e duradouros.'
            },
            {
              question: 'Posso fazer a terapia quântica junto com outros tratamentos?',
              answer: 'Absolutamente! Nossa terapia é complementar e pode potencializar os efeitos de outros tratamentos. Sempre informe seu médico sobre todas as terapias que está realizando.'
            },
            {
              question: 'Como é realizado o tratamento à distância?',
              answer: 'Utilizamos tecnologia avançada que permite enviar frequências vibracionais específicas para você, independentemente de sua localização. Não é necessário estar fisicamente presente.'
            },
            {
              question: 'Qual a diferença entre Quantum Vita e outras terapias alternativas?',
              answer: 'Utilizamos tecnologia Quantec de ponta, oferecendo tratamentos personalizados e baseados em princípios da física quântica, com resultados mensuráveis.'
            },
            {
              question: 'A terapia quântica pode tratar problemas emocionais?',
              answer: 'Sim, nossa abordagem holística trabalha com o equilíbrio energético, que impacta diretamente nas emoções. Muitos clientes relatam melhora significativa em questões emocionais.'
            }
          ]}
        />
      </Section>

      <Section id="cta-final" columns={1}>
        <h2>Veja como funciona antes de decidir pelo tratamento.</h2>
        <h3>O processo com o Quantec é claro: dados objetivos, etapas bem definidas e total respeito ao seu ritmo pessoal.</h3>
        <WaButton
          label="Saiba como é feito na prática"
          phone="5521979658483"
          message="Gostaria de saber mais sobre a terapia"        
      </Section>      
    </>
  )
}
