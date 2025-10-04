import './About.css';

// Componente funcional que cria a seção "Sobre Nós"
// Recebe os seguintes parâmetros:
// - texts: array de strings, cada uma representando um parágrafo da seção
// - image: URL da imagem principal da seção
// - mainColor: cor principal usada em títulos, linhas e outros elementos
// - cards: array de objetos, cada um representando um card com image, tittle e description
// - whatsappIcon: URL do ícone do WhatsApp para o link de contato
// - classing: string de classes CSS adicionais para customizar o link de contato
function AboutSection(texts, image, mainColor, cards, whatsappIcon, classing, layout, contactLink) {
    return (
        <section className="about">
            <div className="container">
                <div className="row">

                    {/* Lado do texto */}
                    <div className="col-lg-6">
                        <div className="text-side">
                            {/* Subtítulo */}
                            <h2 className="sup-tittle">Sobre Nós</h2>

                            {/* Título principal com cor dinâmica */}
                            <h1 className="main-tittle" style={{ color: mainColor }}>
                                Um pouco sobre a Layer 8
                            </h1>

                            {/* Linha horizontal estilizada */}
                            <hr className="hr-default spacing" style={{ color: mainColor }} />

                            {/* Renderização dos parágrafos recebidos via props */}
                            {texts.map((text, i) => {
                                return (
                                    <p key={i} className="paragraphs">{text}</p>
                                )
                            })}

                            {/* Link de contato via WhatsApp com ícone */}
                            <a href={contactLink} target="_blank" rel="noopener noreferrer" className={`contact-link spacing ${classing}`}>
                                <img src={whatsappIcon} alt="Whatsapp Icon" />
                                <p>Fale conosco</p>
                            </a>
                        </div>
                    </div>

                    {/* Lado da imagem */}
                    <div className="col-lg-6 col-sm-12 image-side-about">
                        <img
                            alt={`Imagem de representação para serviços da Layer 8 ${classing}`}
                            className="default-border-radius default-shadow"
                            src={image}
                        />
                    </div>
                </div>
            </div>

            {/* Linha horizontal central separadora */}
            <div className="row center-hr">
                <hr className="hr-default" style={{ color: mainColor }} />
            </div>

            {/* Seção de cards */}
            <div className="container">
                {(layout === "tecnologia") && (<h2 className="main-tittle services-tittle" style={{ color: mainColor }}>Nossos serviços</h2>)}
                <div className="row card-row">
                    {cards.map((card, i) => {
                        // Desestruturação do objeto card
                        let cardImage = card.image;
                        let cardTittle = card.tittle;
                        let cardDescription = card.description;

                        return (
                            <div key={i} className="col-xl-4 col-lg-6 card-container">
                                <div className="card-about default-border-radius default-shadow">
                                    {/* Imagem do card */}
                                    {(layout === "recicla") && (
                                        <img src={cardImage} alt={`Imagem do serviço ${cardTittle} da Layer 8`} />
                                    )}

                                    {/* Título do card com cor principal */}
                                    <h3 className="card-tittle" style={{ color: mainColor }}>
                                        {cardTittle}
                                    </h3>

                                    {/* Descrição do card */}
                                    <p className="paragraphs about-paragraph">
                                        {cardDescription}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default AboutSection;