/* =========================================================
   1. BANCO DE DADOS CURATORIAL DO ACERVO (8 INVENÇÕES)
   ========================================================= */
const acervoInvencoes = [
  {
    id: "garrett-morgan",
    titulo: "Semáforo de Três Estágios",
    inventor: "Garrett Augustus Morgan",
    ano: "1923",
    patente: "US Patent 1,475,024",
    categoria: "cotidiano",
    categoriaLabel: "Segurança & Cotidiano",
    resumo: "Introduziu o sinal intermediário de alerta (luz amarela) nos semáforos, reduzindo colisões nos cruzamentos urbanos.",
    biografia: "Filho de pessoas anteriormente escravizadas no Kentucky (EUA), Garrett Morgan foi um inventor autodidata e empresário de Cleveland. Após testemunhar um grave acidente entre um automóvel e uma carruagem, projetou um sistema de sinalização que avisava os motoristas antes da parada total.",
    funcionamento: "O mecanismo mecânico em formato de 'T' possuía três posições (Siga, Atenção e Pare), permitindo que os veículos que já estavam no cruzamento liberassem a via antes da abertura do fluxo transversal.",
    impacto: "O conceito do terceiro estágio (luz amarela) tornou-se o padrão mundial de controle de tráfego, salvando milhões de vidas diariamente em todas as cidades do planeta.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <rect x="36" y="10" width="28" height="72" rx="6" />
            <circle cx="50" cy="26" r="7" />
            <circle cx="50" cy="46" r="7" stroke-dasharray="3 2" />
            <circle cx="50" cy="66" r="7" />
            <line x1="50" y1="82" x2="50" y2="95" />
            <line x1="35" y1="95" x2="65" y2="95" />
          </svg>`
  },
  {
    id: "marian-croak",
    titulo: "Tecnologia VoIP (Voz sobre IP)",
    inventor: "Dra. Marian Rogers Croak",
    ano: "1990s–2000s",
    patente: "+200 Patentes (USPTO)",
    categoria: "computacao",
    categoriaLabel: "Computação & Telecom",
    resumo: "Pioneira nos protocolos que convertem voz em pacotes digitais transmitidos pela internet em tempo real.",
    biografia: "Doutora em Psicologia e Análise Quantitativa pela Universidade do Sul da Califórnia, a Dra. Marian Croak liderou equipes de engenharia na AT&T Bell Labs e posteriormente no Google, acumulando mais de 200 patentes em comunicações em rede.",
    funcionamento: "Sua arquitetura digitaliza ondas sonoras em pacotes de dados IP, garantindo sincronização, baixa latência e confiabilidade para chamadas de áudio e vídeo na internet sem depender de linhas telefônicas analógicas.",
    impacto: "Sem as invenções da Dra. Croak, ferramentas modernas como WhatsApp Áudio, Zoom, Google Meet, Microsoft Teams e chamadas online simplesmente não existiriam como conhecemos.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <circle cx="22" cy="50" r="10" />
            <circle cx="78" cy="50" r="10" />
            <path d="M35 42 Q50 28 65 42" />
            <path d="M35 58 Q50 72 65 58" />
            <rect x="44" y="45" width="12" height="10" rx="2" />
          </svg>`
  },
  {
    id: "mark-dean",
    titulo: "Arquitetura do IBM PC e Chip de 1 GHz",
    inventor: "Dr. Mark E. Dean",
    ano: "1981 / 1999",
    patente: "3 das 9 Patentes Originais do IBM PC",
    categoria: "computacao",
    categoriaLabel: "Computação & Telecom",
    resumo: "Co-criador do barramento ISA que permitiu conectar impressoras, monitores e placas ao computador pessoal.",
    biografia: "Engenheiro eletricista formado pela Universidade do Tennessee e doutor por Stanford, Mark Dean foi o primeiro afro-americano a receber o título de IBM Fellow. Ele co-liderou a equipe que desenvolveu o computador pessoal original da IBM.",
    funcionamento: "Desenvolveu o sistema de barramento ISA (Industry Standard Architecture), que padronizou a comunicação entre o processador e dispositivos periféricos, além de liderar a equipe que criou o primeiro processador CMOS de 1 Gigahertz (1 GHz).",
    impacto: "A possibilidade de conectar teclados, monitores, placas de som e impressoras ao seu computador nasceu diretamente das patentes registradas por Mark Dean.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <rect x="25" y="25" width="50" height="50" rx="4" />
            <rect x="37" y="37" width="26" height="26" />
            <line x1="35" y1="15" x2="35" y2="25" /><line x1="50" y1="15" x2="50" y2="25" /><line x1="65" y1="15" x2="65" y2="25" />
            <line x1="35" y1="75" x2="35" y2="85" /><line x1="50" y1="75" x2="50" y2="85" /><line x1="65" y1="75" x2="65" y2="85" />
            <line x1="15" y1="35" x2="25" y2="35" /><line x1="15" y1="50" x2="25" y2="50" /><line x1="15" y1="65" x2="25" y2="65" />
            <line x1="75" y1="35" x2="85" y2="35" /><line x1="75" y1="50" x2="85" y2="50" /><line x1="75" y1="65" x2="85" y2="65" />
          </svg>`
  },
  {
    id: "marie-brown",
    titulo: "Sistema de Segurança Residencial (CFTV)",
    inventor: "Marie Van Brittan Brown",
    ano: "1969",
    patente: "US Patent 3,482,037",
    categoria: "cotidiano",
    categoriaLabel: "Segurança & Cotidiano",
    resumo: "Inventou o primeiro sistema doméstico de monitoramento por câmera, interfone bidirecional e destravamento remoto.",
    biografia: "Enfermeira residente no Queens (Nova York), Marie Van Brittan Brown trabalhava em turnos noturnos e enfrentava a demora policial em seu bairro. Ao lado do marido, Albert Brown, projetou um sistema pioneiro de vigilância doméstica.",
    funcionamento: "Uma câmera motorizada deslizava por quatro visores na porta, transmitindo imagens via circuito fechado para um monitor interno, integrado a um microfone de voz e a um botão de destravamento remoto da fechadura.",
    impacto: "Deu origem aos modernos sistemas de CFTV, videoporteiros inteligentes e câmeras Wi-Fi residenciais usadas em prédios e casas no mundo inteiro.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <path d="M20 40 L65 30 L65 65 L20 55 Z" />
            <circle cx="42" cy="47" r="7" />
            <polyline points="65,42 80,35 80,60 65,53" />
            <path d="M35 65 L35 82 L60 82" />
          </svg>`
  },
  {
    id: "patricia-bath",
    titulo: "Sonda Laserphaco (Cirurgia de Catarata)",
    inventor: "Dra. Patricia Era Bath",
    ano: "1988",
    patente: "US Patent 4,744,360",
    categoria: "saude-engenharia",
    categoriaLabel: "Saúde & Engenharia",
    resumo: "Primeira médica negra dos EUA a patentear um dispositivo médico, revolucionando a remoção da catarata com laser.",
    biografia: "Oftalmologista e pesquisadora nascida no Harlem (Nova York), a Dra. Patricia Bath fundou o Instituto Americano para a Prevenção da Cegueira, defendendo que a visão é um direito humano fundamental.",
    funcionamento: "O dispositivo Laserphaco utiliza um feixe de laser preciso através de uma cânula milimétrica para vaporizar a catarata de forma rápida e indolor, limpando o cristalino para o implante da lente.",
    impacto: "A tecnologia restaurou a visão de milhões de pessoas em todo o mundo, incluindo pacientes que estavam cegos há décadas.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <path d="M15 50 Q50 20 85 50 Q50 80 15 50 Z" />
            <circle cx="50" cy="50" r="12" />
            <line x1="12" y1="22" x2="44" y2="46" stroke-dasharray="4 2" />
          </svg>`
  },
  {
    id: "lewis-latimer",
    titulo: "Filamento de Carbono Durável para Lâmpadas",
    inventor: "Lewis Howard Latimer",
    ano: "1881",
    patente: "US Patent 247,097",
    categoria: "cotidiano",
    categoriaLabel: "Segurança & Cotidiano",
    resumo: "Criou o processo de fabricação de filamentos de carbono que tornou a lâmpada elétrica durável e acessível.",
    biografia: "Filho de fugitivos da escravidão, Lewis Latimer aprendeu desenho técnico por conta própria. Trabalhou com Alexander Graham Bell (desenhando as plantas do telefone) e integrou a equipe de elite de Thomas Edison.",
    funcionamento: "As primeiras lâmpadas queimavam em poucos dias. Latimer desenvolveu um invólucro de papelão que protegia o filamento de carbono durante a carbonização, evitando sua quebra e multiplicando sua vida útil.",
    impacto: "Viabilizou a iluminação elétrica pública e residencial em escala comercial nas grandes cidades, transformando a vida noturna urbana.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <path d="M35 55 C25 40 32 18 50 18 C68 18 75 40 65 55 L60 70 L40 70 Z" />
            <path d="M44 55 L44 38 Q50 30 56 38 L56 55" />
            <rect x="41" y="70" width="18" height="12" rx="2" />
          </svg>`
  },
  {
    id: "otis-boykin",
    titulo: "Resistores Elétricos de Precisão",
    inventor: "Otis Frank Boykin",
    ano: "1959 / 1961",
    patente: "US Patent 2,972,726",
    categoria: "saude-engenharia",
    categoriaLabel: "Saúde & Engenharia",
    resumo: "Desenvolveu resistores eletrônicos baratos e resistentes a variações extremas, essenciais para marca-passos e TVs.",
    biografia: "Nascido em Dallas (Texas), Otis Boykin estudou na Fisk University e no Instituto de Tecnologia de Illinois. Patenteou mais de 25 dispositivos eletrônicos voltados ao controle preciso de corrente elétrica.",
    funcionamento: "Seu resistor de fio de precisão suportava grandes variações de temperatura e pressão sem falhar, reduzindo drasticamente o custo de produção de componentes eletrônicos confiáveis.",
    impacto: "Seus resistores foram incorporados em computadores IBM, televisores, rádios e na unidade de controle do marca-passo cardíaco artificial.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <line x1="12" y1="50" x2="26" y2="50" />
            <polyline points="26,50 32,34 42,66 52,34 62,66 72,34 76,50" />
            <line x1="76" y1="50" x2="88" y2="50" />
          </svg>`
  },
  {
    id: "andre-reboucas",
    titulo: "Engenharia Portuária, Abastecimento e Torpedo",
    inventor: "André Pinto Rebouças",
    ano: "1860s–1880s",
    patente: "Patentes e Obras no Brasil Imperial",
    categoria: "saude-engenharia",
    categoriaLabel: "Saúde & Engenharia",
    resumo: "Engenheiro negro brasileiro pioneiro em docas portuárias, abastecimento de água no Rio e inovações navais.",
    biografia: "Nascido na Bahia em 1838, André Rebouças foi o primeiro engenheiro negro formado pela Escola Militar do Rio de Janeiro, além de destacado abolicionista ao lado de Joaquim Nabuco e José do Patrocínio.",
    funcionamento: "Projetou as docas da Alfândega no Rio de Janeiro, solucionou o abastecimento hídrico da capital com novos reservatórios, construiu a ferrovia Curitiba-Paranaguá e desenvolveu um modelo de torpedo submarino.",
    impacto: "É um dos maiores símbolos da engenharia brasileira, provando que a ciência e a infraestrutura do Brasil contaram com brilhante liderança intelectual negra.",
    svg: `<svg viewBox="0 0 100 100" aria-hidden="true">
            <path d="M15 65 Q32 58 50 65 T85 65" />
            <path d="M15 76 Q32 69 50 76 T85 76" />
            <polyline points="22,60 22,32 78,32 78,60" />
            <line x1="50" y1="22" x2="50" y2="60" />
          </svg>`
  }
];

/* =========================================================
   2. ESTADO DA APLICAÇÃO E RENDERIZAÇÃO DA GALERIA
   ========================================================= */
let categoriaAtual = "todos";
let termoBuscaAtual = "";
let tamanhoFontePercentual = 100;
let ultimoElementoFocado = null;

function renderizarGaleria() {
  const grade = document.getElementById("grade-invencoes");
  const status = document.getElementById("status-galeria");

  const filtrados = acervoInvencoes.filter((item) => {
    const bateCategoria = categoriaAtual === "todos" || item.categoria === categoriaAtual;
    const texto = `${item.titulo} ${item.inventor} ${item.resumo} ${item.patente}`.toLowerCase();
    const bateBusca = texto.includes(termoBuscaAtual.toLowerCase().trim());
    return bateCategoria && bateBusca;
  });

  if (filtrados.length === 0) {
    grade.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: var(--bg-surface); border-radius: 12px; border: 1px solid var(--border-light);">
        <p style="font-size: 1.1rem; font-weight: 600;">Nenhuma patente encontrada para este filtro.</p>
        <p style="color: var(--text-secondary); margin-top: 6px;">Tente limpar o campo de busca ou selecionar "Todos (8)".</p>
      </div>
    `;
    status.textContent = "Nenhuma peça encontrada.";
    return;
  }

  status.textContent = `Exibindo ${filtrados.length} de ${acervoInvencoes.length} peças do acervo.`;

  grade.innerHTML = filtrados
    .map(
      (item) => `
      <article class="exhibit-card">
        <div class="card-blueprint">
          <span class="patent-stamp">${item.patente}</span>
          <span class="year-stamp">${item.ano}</span>
          ${item.svg}
        </div>
        <div class="card-content">
          <span class="card-category">${item.categoriaLabel}</span>
          <h3 class="card-title">${item.titulo}</h3>
          <p class="card-inventor">${item.inventor}</p>
          <p class="card-summary">${item.resumo}</p>
          <button
            type="button"
            class="card-btn"
            onclick="abrirModal('${item.id}')"
            aria-label="Inspecionar patente: ${item.titulo} por ${item.inventor}"
          >
            <span>Inspecionar Patente</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </article>
    `
    )
    .join("");
}

/* =========================================================
   3. INTERATIVIDADE: FILTROS E BUSCA (ONCLICK / ONINPUT)
   ========================================================= */
function filtrarCategoria(categoria, botaoClicado) {
  categoriaAtual = categoria;

  const botoes = document.querySelectorAll(".filter-btn");
  botoes.forEach((btn) => btn.classList.remove("active"));
  if (botaoClicado) {
    botaoClicado.classList.add("active");
  }

  renderizarGaleria();
}

function pesquisarAcervo(valor) {
  termoBuscaAtual = valor;
  renderizarGaleria();
}

/* =========================================================
   4. MODAL ACESSÍVEL DE DETALHES DA PATENTE
   ========================================================= */
function abrirModal(id) {
  const item = acervoInvencoes.find((inv) => inv.id === id);
  if (!item) return;

  ultimoElementoFocado = document.activeElement;

  document.getElementById("modal-numero-patente").textContent = `${item.patente} • ${item.ano}`;
  document.getElementById("modal-titulo").textContent = item.titulo;
  document.getElementById("modal-inventor").textContent = item.inventor;
  document.getElementById("modal-diagrama").innerHTML = item.svg;
  document.getElementById("modal-biografia").textContent = item.biografia;
  document.getElementById("modal-funcionamento").textContent = item.funcionamento;
  document.getElementById("modal-impacto").textContent = item.impacto;

  const modal = document.getElementById("modal-patente");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  document.getElementById("btn-fechar-modal").focus();
}

function fecharModal() {
  const modal = document.getElementById("modal-patente");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (ultimoElementoFocado) {
    ultimoElementoFocado.focus();
  }
}

function fecharModalFora(evento) {
  if (evento.target.id === "modal-patente") {
    fecharModal();
  }
}

// Fecha o modal ao pressionar a tecla ESC
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    const modal = document.getElementById("modal-patente");
    if (modal.classList.contains("open")) {
      fecharModal();
    }
  }
});

/* =========================================================
   5. CONTROLES DE ACESSIBILIDADE E CÓPIA DE CÓDIGO
   ========================================================= */
function alterarFonte(direcao) {
  tamanhoFontePercentual = Math.min(125, Math.max(85, tamanhoFontePercentual + direcao * 10));
  document.documentElement.style.fontSize = tamanhoFontePercentual + "%";
}

function resetarFonte() {
  tamanhoFontePercentual = 100;
  document.documentElement.style.fontSize = "100%";
}

function alternarContraste() {
  const body = document.body;
  const botao = document.getElementById("btn-contraste");
  const ativo = body.classList.toggle("high-contrast");
  botao.setAttribute("aria-pressed", ativo ? "true" : "false");
}

function copiarComandos() {
  const texto = document.getElementById("comandos-git").textContent;
  navigator.clipboard.writeText(texto).then(() => {
    const botao = document.querySelector(".copy-btn");
    botao.textContent = "Copiado!";
    setTimeout(() => {
      botao.textContent = "Copiar";
    }, 2000);
  });
}

// Inicializa o museu ao carregar a página