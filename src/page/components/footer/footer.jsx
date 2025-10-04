import './Footer.css';
import { Link } from 'react-router-dom';

// Componente funcional que cria o rodapé do site
// Recebe os seguintes parâmetros:
// - mainColor: cor principal usada em títulos e ícones
// - altLinkColor: cor de fundo do link alternativo
// - altLinkText: texto adicional do link alternativo
// - footerLogo: URL do logo do footer
// - whatsapp: URL do ícone do WhatsApp
// - instagram: URL do ícone do Instagram
// - themedWhatsapp: URL do ícone do WhatsApp temático usado no contato
// - themedEmail: URL do ícone de email temático usado no contato
function Footer(mainColor, altLinkColor, altLinkText, altLink, footerLogo, whatsapp, instagram, themedWhatsapp, themedEmail, altNumber, altNumberLink, instagramLink) {
    return (
        <footer>
            <div className="container">
                <div className="row row-gap-5 pt-5">

                    {/* Primeira coluna: link alternativo */}
                    <div className="col-lg-4">
                        <div className="alt-site">
                            <p className="paragraphs">Conheça também a</p>
                            <Link to={`/?p=${altLink}`} style={{ background: altLinkColor }}>
                                Layer 8 {altLinkText}
                            </Link >
                        </div>
                    </div>

                    {/* Segunda coluna: logo e links circulares */}
                    <div className="col-lg-4">
                        <div className="logo-footer">
                            <img src={footerLogo} alt="Layer 8 Logo" />
                        </div>

                        {/* Links circulares para redes sociais */}
                        <div className="circular-links">
                            <div className="icon-container" style={{ backgroundColor: mainColor }}>
                                <a href={altNumberLink} target="_blank" rel="noopener noreferrer">
                                    <img src={whatsapp} alt="Ícone do Whatsapp da Layer 8" />
                                </a>
                            </div>
                            <div className="icon-container" style={{ backgroundColor: mainColor }}>
                                <a href={instagramLink} target="_blank" rel="noopener noreferrer">
                                    <img src={instagram} alt="Ícone do Instagram para a Layer 8" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Terceira coluna: informações de contato */}
                    <div className="col-lg-4">
                        <div className="footer-contact">
                            <div className="contact-group">
                                <div className="tittle-grouping"> {/* Agrupa os elementos do título */}
                                    {/* Título da seção de contato */}
                                    <h2 style={{ color: mainColor }}>Contato</h2>

                                    {/* Linha horizontal estilizada */}
                                    <hr className="hr-default" style={{ color: mainColor }} />
                                </div>

                                {/* Links de contato com ícones */}
                                <div className="link-icons">
                                    <a href={altNumberLink} target="_blank" rel="noopener noreferrer" >
                                        <img src={themedWhatsapp} alt="Ícone do Whatsapp para contato" />
                                        {altNumber}
                                    </a>
                                    <a href="mailto:contato@layer8.com.br">
                                        <img src={themedEmail} alt="Ícone do Email para contato da Layer 8" />
                                        contato@layer8.com.br
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Área de copyright */}
            <div className="copy-area">
                <p>© Todos os direitos reservados -  2024 - Layer 8</p>
            </div>
        </footer>
    )
}

export default Footer;
