import "./Services.css";

// Componente funcional que cria a seção de serviços
// Recebe os seguintes parâmetros:
// - serviceCard: array de objetos, cada um representando um serviço com image, tittle e description
// - mainColor: cor principal usada em títulos e linhas
function servicesSection(serviceCard, mainColor, layout) {
    if (layout != "recicla") return null

    return (
        <section className="services">
            <div className="container">

                {/* Títulos da seção */}
                <div className="service-tittles">
                    <h2 className="sup-tittle">Conheça os</h2>

                    {/* Título principal com cor dinâmica */}
                    <h1 className="main-tittle" style={{ color: mainColor }}>
                        Nossos serviços
                    </h1>

                    {/* Linha horizontal estilizada */}
                    <hr className="hr-default" style={{ color: mainColor }} />
                </div>

                {/* Container de cards de serviços */}
                <div className="cards-container row">
                    {serviceCard.map((card, i) => {
                        // Desestruturação do objeto card
                        let image = card.image
                        let tittle = card.tittle
                        let description = card.description

                        return (
                            <div className="col-xl-4 col-lg-12 card-padding" key={i}>
                                <div className="service-card default-border-radius default-shadow">

                                    {/* Imagem do serviço */}
                                    <img src={image} className="default-border-radius" alt={`Imagem do serviço de ${tittle}`} />

                                    {/* Título do serviço com cor principal */}
                                    <h2 className="card-tittle" style={{ color: mainColor }}>
                                        {tittle}
                                    </h2>

                                    {/* Descrição do serviço */}
                                    <p className="paragraphs service-paragraph">
                                        {description}
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

export default servicesSection;