import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Landing from '../landing/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';

// ================= Layer 8 Recicla =================
import rHeroBackground from '/recicla/herobackground.webp';
import rAlvo from '/recicla/missao.webp';
import rVisao from '/recicla/visao.webp';
import rDiamante from '/recicla/valores.webp';
import rRepr1 from '/recicla/repr1.webp';
import rRepr2 from '/recicla/repr2.webp';
import rRepr3 from '/recicla/repr3.webp';
import rMarker from '/recicla/marker.svg';
import rFooterLogo from '/recicla/footerlogo.webp';
import rLayerLogo from '/recicla/layer8logo.webp';
import rWhatsapp from '/recicla/whatsapp.svg';
import rEmail from '/recicla/email.svg';

// ================= Layer 8 Tecnologia =================
import tHeroBackground from '/tecnologia/herobackground.webp';
import tMarker from '/tecnologia/marker.svg';
import tFooterLogo from '/tecnologia/footerlogo.webp';
import tLogo from '/tecnologia/layer8logo.webp';
import tWhatsapp from '/tecnologia/whatsapp.svg';
import tEmail from '/tecnologia/email.svg';
import tRepr1 from '/tecnologia/repr1.webp';
import tRepr2 from '/tecnologia/repr2.webp';
import tRepr3 from '/tecnologia/repr3.webp';
import tRepr4 from '/tecnologia/repr4.webp';

// ================= Components =================
import Header from './components/header/Header';
import heroSection from './components/hero/hero';
import AboutSection from './components/about/about';
import servicesSection from './components/services/services';
import contactSection from './components/contact/contact';
import locationSection from './components/location/location';
import Footer from './components/footer/footer';

// ================= Default Icons =================
import defaultWhatsapp from '/whatsapp.svg';
import defaultInstagram from '/instagram.svg';

const pageConf = {
    recicla: {
        layout: "recicla",
        title: "Recicla",
        page: "recicla",
        header: {
            logo: rLayerLogo,
            altText: "(84) 99175-7676",
            classing: "recicla",
            contactLink: "http://wa.me/5584991757676"
        },
        hero: {
            heroBackground: rHeroBackground,
            impactText: "DESTINO CORRETO PARA O SEU LIXO ELETRÔNICO",
            mutedText: "Gerenciamento de resíduos eletrônicos",
            classing: "recicla",
            contactLink: "http://wa.me/5584991757676",
        },
        about: {
            texts: [
                "Somos a Layer 8 Recicla. Estamos sediados em Natal, Rio Grande do Norte, trabalhando dia após dia com um único propósito: cuidar da natureza para o amanhã!",
                "Coletando, separando e reciclando os resíduos eletrônicos. Somos a solução e o destino ideal para o seu lixo eletrônico.",
            ],
            image: rRepr1,
            color: "#00b18b",
            cards: [
                {
                    image: rAlvo,
                    tittle: "Missão",
                    description: "Gerir e destinar corretamente todo e qualquer resíduo eletrônico visando o reaproveitamento e reutilização, por meio da matéria prima gerada. Oferecendo assim, novas soluções sustentáveis para o mercado e criando um novo estilo de vida para a população."
                },
                {
                    image: rVisao,
                    tittle: "Visão",
                    description: "Ser referência no mercado nacional no gerenciamento de resíduos eletrônicos."
                },
                {
                    image: rDiamante,
                    tittle: "Valores",
                    description: "• Respeito ao Meio Ambiente.\n• Preservação da Saúde e Segurança dos nossos funcionários.\n• Ética e transparência no relacionamento com todas as partes interessadas.\n • Compromisso com a verdade."
                }
            ],
            classing: "recicla",
            contactLink: "http://wa.me/5584991757676"
        },
        services: {
            cards: [
                {
                    image: rRepr3,
                    tittle: "Reciclagem de Eletrônicos",
                    description: "Temos o destino certo para seu Lixo Eletrônico, trabalhando com os 5Rs, Reciclar, Repensar, Recusar, Reutilizar e Reduzir.",
                },
                {
                    image: rRepr1,
                    tittle: "Coleta de Resíduos Eletrônicos",
                    description: "Gestão de Resíduos Eletrônicos, temos as melhores soluções que você precisa.",
                }, {
                    image: rRepr2,
                    tittle: "Gerenciamento de Dispositivos em Desuso",
                    description: "Tvs, computadores, monitores, geladeiras, micro-ondas, freezers e etc..."
                }
            ],
            color: "#00b18b"
        },
        contact: {
            image: rRepr3,
            color: "#00b18b"
        },
        location: {
            color: "#00b18b",
            icon: rMarker,
            link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4218705538788!2d-35.20103822547457!3d-5.79593555718241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301f728df82bf%3A0xb3e55ed372ab1adc!2sLayer%208%20Recicla!5e0!3m2!1spt-BR!2sbr!4v1761228435377!5m2!1spt-BR!2sbr"
        },
        footer: {
            color: "#00b18b",
            altColor: "#00b18b",
            altText: "Soluções e Serviços",
            altLink: "tecnologia",
            logo: rFooterLogo,
            whatsapp: rWhatsapp,
            email: rEmail,
            altNumber: "(84) 99175-7676",
            altNumberLink: "http://wa.me/5584991757676",
            instagramLink: "https://www.instagram.com/layer8_recicla/"
        }
    },
    tecnologia: {
        layout: "tecnologia",
        title: "Tecnolgia",
        page: "tecnologia",
        header: {
            logo: tLogo,
            altText: "(84) 99455-4040",
            classing: "tecnologia",
            contactLink: "http://wa.me/5584994554040"
        },
        hero: {
            heroBackground: tHeroBackground,
            impactText: "SOLUÇÕES ESPECÍFICAS PARA O SEU NEGÓCIO",
            mutedText: "Otimizamos rotinas, reduzimos custos e minimizando risco",
            classing: "tecnologia",
            contactLink: "http://wa.me/5584994554040"
        },
        about: {
            texts: [
                "A Layer 8 Soluções e Serviços, se posiciona no mercado nacional como parceiro estratégico de empresas do setor privado e público.",
                "Somos especialistas em tecnologia da informação, oferecemos serviços de alto valor agregado para ambientes corporativos, on-premises e em cloud, transformamos e conectamos os negócios de nossos clientes.",
                "Seremos seu braço direito na tomada da melhor decisão.",
                "Pensamos além das fronteiras da tecnologia, ou fabricante."
            ],
            image: tRepr1,
            color: "#044bab",
            cards: [
                {
                    image: "",
                    tittle: "Network Assessment",
                    description: "Avaliação de redes locais (On-Premises) e em nuvem (Azure, AWS e Oracle Cloud), identificando riscos, oportunidades e garantindo escalabilidade e integração segura."
                },
                {
                    image: "",
                    tittle: "Outsourcing",
                    description: "Outsourcing em redes com profissionais especializados, presenciais ou remotos, para garantir continuidade, segurança e evolução da infraestrutura sem custos de contratação e gestão interna."
                },
                {
                    image: "",
                    tittle: "Network Support & Operations",
                    description: "Gestão de redes com suporte e monitoramento 24x7, garantindo SLA, incidentes tratados rapidamente, manutenção preventiva, melhoria contínua e satisfação do cliente."
                },
                {
                    image: "",
                    tittle: "Network Design (On-premises/Cloud)",
                    description: "Projetos de rede sob medida para alta performance e segurança, com escopo técnico, requisitos e design. Implementação com boas práticas, principais vendors, testes e documentação."
                },
                {
                    image: "",
                    tittle: "Wi-fi Design",
                    description: "Planejamento e configuração personalizada de Wi-Fi, com cobertura otimizada, alta disponibilidade, segurança corporativa, além de ajustes, atualizações e suporte especializado."
                },
                {
                    image: "",
                    tittle: "Firewall Design (On-premises/Cloud)",
                    description: "Implementação, sustentação e monitoramento de firewalls, com instalação, resolução de problemas, manutenção, gestão, métricas de performance e visibilidade contínua dos serviços."
                },
                {
                    image: "",
                    tittle: "Network Architecture - Disaster Recovery",
                    description: "Consultoria e implementação de Disaster Recovery, com avaliação de rede, adequação da infraestrutura, definição de ambientes (on-premises/cloud), implantação, documentação e validação do plano."
                },
                {
                    image: "",
                    tittle: "Cabling",
                    description: "Organização e padronização a infraestrutura de TI, permite expansão de equipamentos, reduz custos de manutenção e garante alta performance e conectividade estável."
                }
            ],
            classing: "tecnologia",
            contactLink: "http://wa.me/5584994554040"
        },
        services: {
            cards: [
                {
                    image: tRepr2,
                    tittle: "Redes e Noc",
                    description: "Central de Operações de Rede atuamos de forma preventiva e proativa com objetivo de manter o ambiente de TI o mais estável possível.",
                },
                {
                    image: tRepr3,
                    tittle: "Gestão de TI e Outsourcing",
                    description: "Gestão de time para TI, você encontra os melhores profissionais para suas demandas.",
                }, {
                    image: tRepr4,
                    tittle: "Cidades Wi-Fi Inteligentes",
                    description: "Uma Casa ou Cidade inteligente possui dispositivos que funcionam com a internet, além de executar funções com sistemas de automação."
                }
            ],
            color: "#044bab"
        },
        contact: {
            image: tRepr2,
            color: "#044bab"
        },
        location: {
            color: "#044bab",
            icon: tMarker,
            link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4218154016753!2d-35.198456199999995!3d-5.7959434000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b301dc81ebc629%3A0x5c8d34da4c692ecd!2zTGF5ZXIgOCBTb2x1w6fDtWVzIGUgU2VydmnDp29z!5e0!3m2!1spt-BR!2sbr!4v1761224504692!5m2!1spt-BR!2sbr"
        },
        footer: {
            color: "#044bab",
            altColor: "#044bad",
            altText: "Recicla",
            altLink: "recicla",
            logo: tFooterLogo,
            whatsapp: tWhatsapp,
            email: tEmail,
            altNumber: "(84) 99455-4040",
            altNumberLink: "http://wa.me/5584994554040",
            instagramLink: "https://www.instagram.com/layer8_tecnologia/"
        }
    }
}


function Page() {
    // Hook do React Router para acessar query parameters da URL
    const [searchParams] = useSearchParams();

    // Obtém o valor do parâmetro "p" da URL
    // Ex.: ?p=tecnologia → page = "tecnologia"
    const page = searchParams.get("p");

    // Busca a configuração da página correspondente no objeto pageConf
    const currentPage = pageConf[page];

    // Para depuração: imprime os dados da página atual
    console.log(currentPage);

    // Atualiza o título do documento sempre que a página atual muda
    useEffect(() => {
        if (currentPage) {
            document.title = `Layer 8 - ${currentPage.title}`;
        }
    }, [currentPage]);

    // Se não houver parâmetro "p" na URL, renderiza a página inicial (Landing)
    if (!page || (page != "recicla" && page != "tecnologia")) {
        const qParam = new URLSearchParams;
        qParam.set("p", "landing");
        window.history.pushState({}, "", "?" + qParam.toString());
        return <Landing />;
    }

    return (
        <>
            {/* ================= HEADER ================= */}
            {Header(
                currentPage.header.logo,            // Logo da página
                currentPage.header.classing,        // Classe CSS personalizada
                currentPage.header.contactLink,     // Link de contato
                currentPage.header.altText,         // Texto alternativo para logo
                defaultWhatsapp                     // Ícone padrão do Whatsapp (branco)
            )}

            <main>
                {/* ================= HERO ================= */}
                {heroSection(
                    currentPage.hero.heroBackground,  // Imagem de fundo do hero
                    currentPage.hero.impactText,      // Texto de impacto principal
                    currentPage.hero.mutedText,       // Subtexto complementar
                    defaultWhatsapp,                  // Ícone padrão do Whatsapp (branco)
                    currentPage.hero.classing,        // Classe CSS do botão
                    currentPage.hero.contactLink      // Link de contato Whatsapp
                )}

                {/* ================= ABOUT ================= */}
                {AboutSection(
                    currentPage.about.texts,          // Parágrafos da seção
                    currentPage.about.image,          // Imagem principal
                    currentPage.about.color,          // Cor de textos e elementos
                    currentPage.about.cards,          // Lista de cartões (imagem, título, descrição)
                    defaultWhatsapp,                  // Ícone padrão do Whatsapp
                    currentPage.about.classing,       // Classe CSS do botão
                    currentPage.layout,               // Layout geral da página
                    currentPage.about.contactLink     // Link de contato Whatsapp
                )}

                {/* ================= SERVICES ================= */}
                {servicesSection(
                    currentPage.services.cards,       // Cartões de serviços
                    currentPage.services.color,       // Cor de textos e elementos
                    currentPage.layout                // Layout geral da página
                )}

                {/* ================= CONTACT ================= */}
                {contactSection(
                    currentPage.contact.image,        // Imagem principal da seção
                    currentPage.contact.color,        // Cor de textos e elementos
                    currentPage.layout                // Layout geral da página
                )}

                {/* ================= LOCATION ================= */}
                {locationSection(
                    currentPage.location.color,        // Cor de textos e elementos
                    currentPage.location.icon,         // Ícone marcador do mapa
                    currentPage.location.link
                )}
            </main>

            {/* ================= FOOTER ================= */}
            {Footer(
                currentPage.footer.color,            // Cor de textos e elementos
                currentPage.footer.altColor,         // Cor do link alternativo
                currentPage.footer.altText,          // Texto do link alternativo
                currentPage.footer.altLink,          // Complemento do link (ex.: recicla/tecnologia)
                currentPage.footer.logo,             // Logo da Layer 8
                defaultWhatsapp,                     // Ícone padrão do Whatsapp
                defaultInstagram,                    // Ícone padrão do Instagram
                currentPage.footer.whatsapp,         // Ícone colorido do Whatsapp
                currentPage.footer.email,            // Ícone colorido do email
                currentPage.footer.altNumber,        // Número alternativo
                currentPage.footer.altNumberLink,    // Link para número alternativo
                currentPage.footer.instagramLink     // Link para Instagram
            )}
        </>
    );
}

export default Page;