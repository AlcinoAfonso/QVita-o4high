// pages/index.js

import Header from '../components/Header'
import Hero from '../components/Hero'

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

      {/* Debug: Exibe texto puro para validar renderização */}
      <div className="p-8 text-center">
        <h1>🚀 Debug: componente Hero ou página não estão carregando?</h1>
        <p>Se você vê este texto, o React está funcionando.</p>
      </div>
    </>
  )
}
