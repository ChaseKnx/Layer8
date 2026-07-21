// landing/Landing.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import './Landing.css';

export default function Landing() {
    // Estado para controlar o id da barra de carregamento
    const [targetId, setId] = useState("");

    // Função para atualizar o id do elemento load-bar
    const handleId = (id) => setId(id);

    return (
        <div className="landing">
            {/* Barra de carregamento */}
            <div className="load-bar" id={targetId}></div>

            {/* ================= HEADER ================= */}
            <header>
                <div className="header-content">
                    <h1>
                        Seja bem-vindo à <strong>Layer 8</strong>
                    </h1>
                    <p>Escolha sua experiência</p>
                    {/* <hr /> */}
                </div>
            </header>

            {/* ================= MAIN ================= */}
            <main>
                {/* Seção Recicla */}
                <section className="side">
                    <div className="enter-card" id="recicla">
                        <button
                            className="button-to"
                            id="recicla-btn"
                            onClick={() => handleId("load")}
                        >
                            <Link to="/?p=recicla">Acessar Layer 8 Recicla</Link>
                        </button>
                    </div>
                </section>

                {/* Seção Tecnologia */}
                <section className="side">
                    <div className="enter-card" id="tecnologia">
                        <button
                            className="button-to"
                            id="tecnologia-btn"
                            onClick={() => handleId("load")}
                        >
                            <Link to="/?p=tecnologia">Acessar Layer 8 Soluções e Serviços</Link>
                        </button>
                    </div>
                </section>
            </main>

            <footer >
                <div className="feats">
                    <div className="feat">
                        <h5>Sustentabilidade</h5>
                        <p>Compromisso com o meio ambiente</p>
                    </div>
                    <div className="line"></div>
                    <div className="feat">
                        <h5>Segurança</h5>
                        <p>Protção do que é essencial.</p>
                    </div>
                    <div className="line"></div>
                    <div className="feat">
                        <h5>Experiência</h5>
                        <p>Equipe preparada e pronta para atender você.</p>
                    </div>
                    <div className="line"></div>
                    <div className="feat">
                        <h5>Inovação</h5>
                        <p>Tecnologia que gera resultados.</p>
                    </div>
                </div>
                <div className="rights">
                    <p>&copy; 2026 Layer 8. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}