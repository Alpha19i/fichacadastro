const secoes = [
  "sections/pessoais.html",
  "sections/documentos.html",
  "sections/funcionais.html",
  "sections/dependentes.html",
  "sections/observacoes.html"
];

let indice = 0;
const formContent = document.getElementById("form-content");
const btnAnterior = document.getElementById("btnAnterior");
const btnProximo = document.getElementById("btnProximo");

// 🧩 Carregar seção dinamicamente
async function carregarSecao(i) {
  const res = await fetch(secoes[i]);
  const html = await res.text();
  formContent.innerHTML = html;

  const campos = formContent.querySelectorAll("input, select, textarea");

  campos.forEach((input) => {
    const output = document.getElementById(`out_${input.id}`);
    console.log(output);
    
    
    if (!!output && !!input && !!(output.textContent)) input.value = input.type === "date" && output.textContent ? output.textContent.split('/').reverse().join('-') : output.textContent.toUpperCase();
  });

  ativarEspelhamento();
  btnAnterior.disabled = i === 0;
  btnProximo.textContent = i === secoes.length - 1 ? "Gerar PDF" : "Próximo";
}

// 🪞 Atualizar ficha em tempo real
function ativarEspelhamento() {
  const inputs = formContent.querySelectorAll("input, select, textarea");

  inputs.forEach((input) => {
    input.addEventListener("input", () => atualizarCampo(input.id));
  });
  inputs.forEach((input) => {
    input.addEventListener("change", () => atualizarCampo(input.id));
  });
}

function atualizarCampo(id) {
  const input = document.getElementById(id);
  const output = document.getElementById(`out_${id}`);
  // input.value = input.value.toUpperCase();
  if (input && output) output.textContent = input.type === "date" && input.value ? input.value.split('-').reverse().join('/') : input.value.toUpperCase();
}

// ▶ Navegação
btnProximo.addEventListener("click", () => {

  const campos = formContent.querySelectorAll("input, select, textarea");
  let valido = true;
  for (const campo of campos) {
    if (!campo.checkValidity()) {
      campo.reportValidity();
      valido = false;
      break;
    }
  }
  // if (!valido) return;

  if (indice < secoes.length - 1) {
    indice++;
    carregarSecao(indice);
  } else {
    gerarPDF();
  }
});

btnAnterior.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    carregarSecao(indice);
  }
});

// 📸 Foto
document.addEventListener("change", (e) => {
  if (e.target.id === "foto") {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      document.getElementById("fotoPerfil").src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Inicializar
carregarSecao(indice);

// 📄 Gerar PDF
function gerarPDF() {
  const element = document.getElementById('ficha');
  const opt = {
    margin: 0,
    filename: "ficha_servidor.pdf",
    // image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 5 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(element).save();
}
