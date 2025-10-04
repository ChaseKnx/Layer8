import './Contact.css';

// Componente funcional que cria a seção "Fale Conosco"
// Recebe os seguintes parâmetros:
// - mainImage: URL da imagem principal da seção
// - mainColor: cor principal usada em títulos, linha e botão
function contactSection(mainImage, mainColor, layout) {
    const altText = layout === "tecnologia"
        ? "Equipe Layer 8 trabalhando em laboratório de robótica"
        : "Equipe Layer 8 realizando monitoramento de redes"

    return (
        <section className="contact">
            <div className="container">
                <div className="row">

                    {/* Lado da imagem */}
                    <div className="col-lg-6 col-sm-12 image-side">
                        <img
                            className="default-border-radius default-shadow"
                            src={mainImage}
                            alt={altText}
                        />
                    </div>

                    {/* Lado do formulário */}
                    <div className="col-lg-6 col-sm-12 form-side">
                        {/* Subtítulo */}
                        <h2 className="sup-tittle">Fale conosco</h2>

                        {/* Título principal com cor dinâmica */}
                        <h1 className="main-tittle" style={{ color: mainColor }}>
                            Para Mais Informações!
                        </h1>

                        {/* Linha horizontal estilizada */}
                        <hr className="hr-default" style={{ color: mainColor }} />

                        {/* Texto explicativo sobre o formulário */}
                        <p className="paragraphs">
                            Entre em contato conosco, temos diversas soluções para você e
                            seu negócio. Preencha o formulário abaixo:
                        </p>

                        {/* Formulário de contato */}
                        <form method="POST" action="https://formspree.io/f/xqaybloz">
                            {/* Campo de nome */}
                            <label className="visually-hidden">Nome</label>
                            <input type="text" placeholder="Nome" aria-label="Nome" autoComplete="name" />

                            {/* Campo de email */}
                            <label className="visually-hidden">Email</label>
                            <input type="text" placeholder="Email" aria-label="Email" autoComplete="email" />

                            {/* Campo de telefone */}
                            <label className="visually-hidden">Telefone</label>
                            <input type="text" placeholder="Telefone" aria-label="Telefone" autoComplete="tel" />

                            {/* Botão de envio com cor dinâmica */}
                            <button type="submit" style={{ backgroundColor: mainColor }}>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default contactSection;
