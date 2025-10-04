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
                    <hr />
                </div>
            </header>

            {/* ================= MAIN ================= */}
            <main>
                {/* Seção Recicla */}
                <section className="side white-background" id="recicla">
                    <button
                        className="button-to"
                        id="recicla-btn"
                        onClick={() => handleId("load")}
                    >
                        <Link to="/?p=recicla">Entrar</Link>
                    </button>
                </section>

                {/* Seção Tecnologia */}
                <section className="side white-background" id="tecnologia">
                    <button
                        className="button-to"
                        id="tecnologia-btn"
                        onClick={() => handleId("load")}
                    >
                        <Link to="/?p=tecnologia">Entrar</Link>
                    </button>
                </section>
            </main>
        </div>
    );
}