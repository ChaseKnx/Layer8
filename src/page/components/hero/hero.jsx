import "./Hero.css";

// Componente funcional que cria a seção Hero do site
// Recebe os seguintes parâmetros:
// - heroBackgroundImage: URL da imagem de fundo da seção
// - heroImpactText: texto principal de impacto (grande destaque)
// - heroMutedText: texto secundário, mais discreto
// - whatsappIcon: URL do ícone do WhatsApp para o link de contato
// - classing: string de classes CSS adicionais para customizar o link de contato
function heroSection(heroBackgroundImage, heroImpactText, heroMutedText, whatsappIcon, classing, contactLink) {
    return (
        <section style={{
            // Define a imagem de fundo da seção e propriedades de exibição
            backgroundImage: `url(${heroBackgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }} fetchPriority="high">
            <div className="container">
                <div className="hero-content">
                    {/* Texto de impacto principal */}
                    <h1>{heroImpactText}</h1>

                    {/* Texto secundário mais discreto */}
                    <h2>{heroMutedText}</h2>

                    {/* Link de contato via WhatsApp com ícone */}
                    <a href={contactLink} target="_blank" rel="noopener noreferrer" className={`contact-link ${classing}`}>
                        <img src={whatsappIcon} alt="Whatsapp logo para contato" />
                        <p>Fale conosco</p>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default heroSection;