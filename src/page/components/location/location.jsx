import './Location.css'

// Componente funcional que cria a seção de localização
// Recebe os seguintes parâmetros:
// - mainColor: cor principal usada no título principal
// - iconMarker: URL do ícone de marcador de localização
function locationSection(mainColor, iconMarker) {
    return (
        <section className="location">
            <div className="container">
                <div className="row">

                    {/* Lado do mapa */}
                    <div className="map-side col-lg-6">
                        <iframe
                            // Embed do Google Maps para exibir localização
                            title="Layer8"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.3554605918547!2d-35.19910703046478!3d-5.795939565387442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301f728df82bf%3A0xb3e55ed372ab1adc!2sLayer%208%20Recicla!5e0!3m2!1spt-BR!2sbr!4v1758914692029!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* Lado do texto */}
                    <div className="text-side col-lg-6">
                        {/* Subtítulo */}
                        <h2 className="sup-tittle">Nossa localização</h2>

                        {/* Título principal com cor dinâmica */}
                        <h1 className="main-tittle" style={{ color: mainColor }}>
                            Faça uma visita!
                        </h1>

                        {/* Informações de endereço com ícone */}
                        <div className="text-icon">
                            <img src={iconMarker} alt="Ícone localização da Layer 8" />
                            <p className="paragraphs">
                                Rua Professor Severino Bezerra - Tirol - Natal, RN - CEP 59014-630
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default locationSection;