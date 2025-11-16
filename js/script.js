// ===============================
// Função genérica para carregar JSON local
// ===============================
async function getLocalJSON(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Erro ao carregar ${path}:`, error);
    return null;
  }
}

// ==========================================
// Função para inserir dados no HTML dinamicamente
// ==========================================
function loadData(element, data) {
  const el = document.getElementById(element);
  if (el) el.innerHTML = data;
}

// ==========================================
// Caminhos dos arquivos locais
// ==========================================
const pathExperiencia = "exp.json";
const pathHabilidades = "habilidades.json";

// ==========================================
// Carregar dados e preencher a página
// ==========================================
async function carregarDados() {
  const dadosExperiencia = await getLocalJSON(pathExperiencia);
  const dadosHabilidades = await getLocalJSON(pathHabilidades);

  if (!dadosExperiencia || !dadosHabilidades) return;

  // ======= EXPERIÊNCIAS =======
  loadData('relevantTime1', dadosExperiencia.first.tempo);
  loadData('relevantPosition1', dadosExperiencia.first.empresa);
  loadData('relevantCompany1', dadosExperiencia.first.cargo);
  loadData('relevantCompany1.2', dadosExperiencia.first.cargo);
  loadData('relevantCompany1.3', dadosExperiencia.first.cargo);
  loadData('relevantCompany1.4', dadosExperiencia.first.cargo);
  loadData('relevantCompany1.5', dadosExperiencia.first.cargo);
  loadData('relevantCompany1.6', dadosExperiencia.first.cargo);
  loadData('relevantCompany1.7', dadosExperiencia.first.cargo);
  loadData('relevantSkills1', dadosExperiencia.first.atribuicoes);
    loadData('relevantSkills1.2', dadosExperiencia.first.atribuicoes);
    loadData('relevantSkills1.3', dadosExperiencia.first.atribuicoes);
    loadData('relevantSkills1.4', dadosExperiencia.first.atribuicoes);
    loadData('relevantSkills1.5', dadosExperiencia.first.atribuicoes);
    loadData('relevantSkills1.6', dadosExperiencia.first.atribuicoes);



  loadData('relevantTime2', dadosExperiencia.second.tempo);
  loadData('relevantPosition2', dadosExperiencia.second.empresa);
  loadData('relevantCompany2', dadosExperiencia.second.cargo);
  loadData('relevantSkills2', dadosExperiencia.second.atribuicoes);

  loadData('relevantTime3', dadosExperiencia.third.tempo);
  loadData('relevantPosition3', dadosExperiencia.third.empresa);
  loadData('relevantCompany3', dadosExperiencia.third.cargo);
  loadData('relevantSkills3', dadosExperiencia.third.atribuicoes);

  // ======= HABILIDADES =======
  loadData('language1', dadosHabilidades.first.linguagem);
  loadData('experience1', dadosHabilidades.first.tempo);
  loadData('level1', dadosHabilidades.first.nivel);

  loadData('language2', dadosHabilidades.second.linguagem);
  loadData('experience2', dadosHabilidades.second.tempo);
  loadData('level2', dadosHabilidades.second.nivel);

  loadData('language3', dadosHabilidades.third.linguagem);
  loadData('experience3', dadosHabilidades.third.tempo);
  loadData('level3', dadosHabilidades.third.nivel);
}

// ==========================================
// Função para modo noturno
// ==========================================
function ativarModoNoturno() {
  const nightMode = document.querySelector('#switch-shadow');
  if (nightMode) {
    nightMode.addEventListener('click', () => {
      document.documentElement.classList.toggle('night-mode');
    });
  }
}

// ==========================================
// Funções para ajustar tamanho da fonte
// ==========================================
let min = 12;
const newLocal = 32;
let max = newLocal;

function aumentarTamanhoLetra() {
  const el = document.getElementById('texto');
  if (!el) return;
  let tamanhoAtual = parseInt(window.getComputedStyle(el).fontSize);
  if (tamanhoAtual < max) {
    el.style.fontSize = (tamanhoAtual + 2) + 'px';
  }
}

function diminuirTamanhoLetra() {
  const el = document.getElementById('texto');
  if (!el) return;
  let tamanhoAtual = parseInt(window.getComputedStyle(el).fontSize);
  if (tamanhoAtual > min) {
    el.style.fontSize = (tamanhoAtual - 2) + 'px';
  }
}


// ==========================================
// Função para mudar cor do texto
// ==========================================
function mudarCorTexto() {
  const el = document.getElementById('texto');
  if (!el) return;
  let corAtual = window.getComputedStyle(el).color;
  if (corAtual === 'rgb(0, 0, 0)') {
    el.style.color = 'white';
  } else {
    el.style.color = 'black';
  }
}

// ==========================================
// Inicialização ao carregar página
// ==========================================
window.onload = function () {
  carregarDados();
  ativarModoNoturno();
};
