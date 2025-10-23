import './Location.css'

// Componente funcional que cria a seção de localização
// Recebe os seguintes parâmetros:
// - mainColor: cor principal usada no título principal
// - iconMarker: URL do ícone de marcador de localização
function locationSection(mainColor, iconMarker, locationLink) {
    return (
        <section className="location">
            <div className="container">
                <div className="row">

                    {/* Lado do mapa */}
                    <div className="map-side col-lg-6">
                        <iframe
                            // Embed do Google Maps para exibir localização
                            title="Layer8"
                            src={locationLink}
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