import './Header.css'

function Header(logo, classing, contactLink, number, whatsappIcon) {
    const altText = classing === "recicla" ? "Logo da Layer 8 Recicla" : "Logo da Layer 8 Soluções e Serviços"

    return (
        <header className="container d-flex flex-row align-items-center justify-content-between">
            <img src={logo} alt={altText} className="logo" />
            <a target="_blank" rel="noopener noreferrer" href={contactLink} className={classing}>
                <img src={whatsappIcon} alt="Ícone do Whatsapp para contato" />
                <p>{number}</p>
            </a>
        </header>
    )
}

export default Header;