document.getElementById("dataAtual").innerText = new Date().toLocaleDateString("pt-BR");

function aplicarMascaraCPF(input) {
  input.value = input.value
    .replace(/\D/g, '')                       // Remove tudo que não é número
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .slice(0, 13)
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('input[id^="cpf"], input[id^="dependente_cpf"]').forEach(el => {
      el.addEventListener('input', () => aplicarMascaraCPF(el));
});})

function gerarFicha() {
  const dados = {
    matricula: document.getElementById('matricula').value,
    nome: document.getElementById('nome').value,
    nascimento: document.getElementById('nascimento').value.split('-').reverse().join('/'),
    sexo: document.getElementById('sexo').value,
    estado_civil: document.getElementById('estado_civil').value,
    naturalidade: document.getElementById('naturalidade').value,
    uf: document.getElementById('uf').value,
    mae: document.getElementById('mae').value,
    pai: document.getElementById('pai').value,
    endereco: document.getElementById('endereco').value,
    numero: document.getElementById('numero').value,
    complemento: document.getElementById('complemento').value,
    bairro: document.getElementById('bairro').value,
    cidade: document.getElementById('cidade').value,
    cep: document.getElementById('cep').value,
    telefone_fixo: document.getElementById('telefone_fixo').value,
    celular: document.getElementById('celular').value,
    email: document.getElementById('email').value,

    cpf: document.getElementById('cpf').value,
    pis_pasep: document.getElementById('pis_pasep').value,
    escolaridade: document.getElementById('escolaridade').value,
    rg: document.getElementById('rg').value,
    rg_data_emissao: document.getElementById('rg_data_emissao').value,
    rg_orgao_exp: document.getElementById('rg_orgao_exp').value,
    rg_uf: document.getElementById('rg_uf').value,
    ctps: document.getElementById('ctps').value,
    ctps_serie: document.getElementById('ctps_serie').value,
    ctps_data_emissao: document.getElementById('ctps_data_emissao').value,
    ctps_uf: document.getElementById('ctps_uf').value,
    titulo_eleitor: document.getElementById('titulo_eleitor').value,
    titulo_zona: document.getElementById('titulo_zona').value,
    titulo_secao: document.getElementById('titulo_secao').value,
    titulo_data_emissao: document.getElementById('titulo_data_emissao').value,
    titulo_uf: document.getElementById('titulo_uf').value,
    banco_agencia: document.getElementById('banco_agencia').value,
    conta_dv: document.getElementById('conta_dv').value,
    sindicato: document.getElementById('sindicato').value,
    pensao: document.getElementById('pensao').value,
    cargo: document.getElementById('cargo').value,
    data_portaria: document.getElementById('data_portaria').value,
    data_posse: document.getElementById('data_posse').value,
    lotacao: document.getElementById('lotacao').value,
    ultimo_local_trabalho: document.getElementById('ultimo_local_trabalho').value,

    dependente_nome1: document.getElementById('dependente_nome1').value,
    dependente_tipo1: document.getElementById('dependente_tipo1').value,
    dependente_nascimento1: document.getElementById('dependente_nascimento1').value,
    dependente_cpf1: document.getElementById('dependente_cpf1').value,

    dependente_nome2: document.getElementById('dependente_nome2').value,
    dependente_tipo2: document.getElementById('dependente_tipo2').value,
    dependente_nascimento2: document.getElementById('dependente_nascimento2').value,
    dependente_cpf2: document.getElementById('dependente_cpf2').value,

    dependente_nome3: document.getElementById('dependente_nome3').value,
    dependente_tipo3: document.getElementById('dependente_tipo3').value,
    dependente_nascimento3: document.getElementById('dependente_nascimento3').value,
    dependente_cpf3: document.getElementById('dependente_cpf3').value,

    dependente_nome4: document.getElementById('dependente_nome4').value,
    dependente_tipo4: document.getElementById('dependente_tipo4').value,
    dependente_nascimento4: document.getElementById('dependente_nascimento4').value,
    dependente_cpf4: document.getElementById('dependente_cpf4').value,

    dependente_nome5: document.getElementById('dependente_nome5').value,
    dependente_tipo5: document.getElementById('dependente_tipo5').value,
    dependente_nascimento5: document.getElementById('dependente_nascimento5').value,
    dependente_cpf5: document.getElementById('dependente_cpf5').value,

    dependente_nome6: document.getElementById('dependente_nome6').value,
    dependente_tipo6: document.getElementById('dependente_tipo6').value,
    dependente_nascimento6: document.getElementById('dependente_nascimento6').value,
    dependente_cpf6: document.getElementById('dependente_cpf6').value,
    observacoes: document.getElementById('observacoes').value,
    // data_assinatura: document.getElementById('data_assinatura').value,
  };

  // 2️⃣ Preenche o documento
  document.getElementById("out_matricula").textContent = dados.matricula;
  document.getElementById("out_nome").textContent = dados.nome;
  document.getElementById("out_nascimento").textContent = dados.nascimento;
  document.getElementById("out_sexo").textContent = dados.sexo;
  document.getElementById("out_estado_civil").textContent = dados.estado_civil;
  document.getElementById("out_naturalidade").textContent = dados.naturalidade;
  document.getElementById("out_uf").textContent = dados.uf;
  document.getElementById("out_mae").textContent = dados.mae;
  document.getElementById("out_pai").textContent = dados.pai;
  document.getElementById("out_endereco").textContent = dados.endereco;
  document.getElementById("out_numero").textContent = dados.numero;
  document.getElementById("out_complemento").textContent = dados.complemento;
  document.getElementById("out_bairro").textContent = dados.bairro;
  document.getElementById("out_cidade").textContent = dados.cidade;
  document.getElementById("out_cep").textContent = dados.cep;
  document.getElementById("out_telefone_fixo").textContent = dados.telefone_fixo;
  document.getElementById("out_celular").textContent = dados.celular;
  document.getElementById("out_email").textContent = dados.email;

  document.getElementById("out_cpf").textContent = dados.cpf;
  document.getElementById("out_pis_pasep").textContent = dados.pis_pasep;
  document.getElementById("out_escolaridade").textContent = dados.escolaridade;
  document.getElementById("out_rg").textContent = dados.rg;
  document.getElementById("out_rg_data_emissao").textContent = dados.rg_data_emissao;
  document.getElementById("out_rg_orgao_exp").textContent = dados.rg_orgao_exp;
  document.getElementById("out_rg_uf").textContent = dados.rg_uf;
  document.getElementById("out_ctps").textContent = dados.ctps;
  document.getElementById("out_ctps_serie").textContent = dados.ctps_serie;
  document.getElementById("out_ctps_data_emissao").textContent = dados.ctps_data_emissao;
  document.getElementById("out_ctps_uf").textContent = dados.ctps_uf;
  document.getElementById("out_titulo_eleitor").textContent = dados.titulo_eleitor;
  document.getElementById("out_titulo_zona").textContent = dados.titulo_zona;
  document.getElementById("out_titulo_secao").textContent = dados.titulo_secao;
  document.getElementById("out_titulo_data_emissao").textContent = dados.titulo_data_emissao;
  document.getElementById("out_titulo_uf").textContent = dados.titulo_uf;
  document.getElementById("out_banco_agencia").textContent = dados.banco_agencia;
  document.getElementById("out_conta_dv").textContent = dados.conta_dv;
  document.getElementById("out_sindicato").textContent = dados.sindicato;
  document.getElementById("out_pensao").textContent = dados.pensao;

  document.getElementById("out_cargo").textContent = dados.cargo;
  document.getElementById("out_data_portaria").textContent = dados.data_portaria;
  document.getElementById("out_data_posse").textContent = dados.data_posse;
  document.getElementById("out_lotacao").textContent = dados.lotacao;
  document.getElementById("out_ultimo_local_trabalho").textContent = dados.ultimo_local_trabalho;

  for (let i = 1; i <= 6; i++) {
    document.getElementById(`out_dependente_nome${i}`).textContent = dados[`dependente_nome${i}`];
    document.getElementById(`out_dependente_tipo${i}`).textContent = dados[`dependente_tipo${i}`];
    document.getElementById(`out_dependente_nascimento${i}`).textContent = dados[`dependente_nascimento${i}`];
    document.getElementById(`out_dependente_cpf${i}`).textContent = dados[`dependente_cpf${i}`];
  }

  document.getElementById("out_observacoes").textContent = dados.observacoes;
  // document.getElementById("out_data_assinatura").textContent = dados.data_assinatura || ;

  // 3️⃣ Gera PDF
  const element = document.getElementById('ficha');
  const options = {
    margin:  0,
    filename: `ficha_${dados.nome || 'servidor'}.pdf`,
    html2canvas: { scale: 5 },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  html2pdf().set(options).from(element).save();
    // .outputPdf('blob')
    // .then((blob) => {
    //   const url = URL.createObjectURL(blob);
    //   window.open(url, '_blank');
    // });
}

    
    // function preencherFormulario(dados) {
    //   for (const chave in dados) {
    //     const campo = document.getElementById(chave);
    //     if (campo) {
    //       const valor = dados[chave];
    //       const tag = campo.tagName.toLowerCase();
    //       const tipo = campo.type?.toLowerCase();

    //       if (tag === 'input' && (tipo === 'checkbox' || tipo === 'radio')) {
    //         campo.checked = Boolean(valor);
    //       } else if (tag === 'select') {
    //         campo.value = valor;
    //       } else if (tag === 'textarea' || tag === 'input') {
    //         campo.value = valor;
    //       }
    //     }
    //   }
    // }
    // document.addEventListener("DOMContentLoaded", () => {
//       const dadosServidor = {
//         matricula: "12345",
//         nome: "João da Silva",
//         nascimento: "1988-04-22",
//         sexo: "Masculino",
//         estado_civil: "Casado(a)",
//         naturalidade: "Junco do Maranhão",
//         uf: "MA",
//         mae: "Maria de Souza",
//         pai: "José da Silva",
//         endereco: "Rua Marcelo Martins de Moura",
//         numero: "111",
//         complemento: "Casa",
//         bairro: "Centro",
//         cidade: "Junco do Maranhão",
//         cep: "65295-000",
//         telefone_fixo: "9833552211",
//         celular: "98988887777",
//         email: "joaosilva@junco.ma.gov.br",
                
//         cpf: "123.456.789-00",
//         pis_pasep: "12345678901",
//         escolaridade: "Ensino Superior Completo",
//         rg: "1234567",
//         rg_data_emissao: "2010-05-12",
//         rg_orgao_exp: "SSP",
//         rg_uf: "MA",
//         ctps: "654321",
//         ctps_serie: "0021",
//         ctps_data_emissao: "2012-08-01",
//         ctps_uf: "MA",
//         titulo_eleitor: "1234 5678 9012",
//         titulo_zona: "051",
//         titulo_secao: "123",
//         titulo_data_emissao: "2008-10-20",
//         titulo_uf: "MA",
//         banco_agencia: "BB / 1234-5",
//         conta_dv: "98765-0",
//         sindicato: "SINDSERV",
//         pensao: "Não",

//         cargo: "Professor de Matemática",
//         data_portaria: "2015-03-10",
//         data_posse: "2015-03-20",
//         lotacao: "Escola Municipal José do Povo",
//         ultimo_local_trabalho: "Escola Estadual João de Barro",


//         dependente_nome1: "Ana Clara Silva",
//         dependente_tipo1: "Filha",
//         dependente_nascimento1: "2010-05-15",
//         dependente_cpf1: "123.456.789-10",

//         dependente_nome2: "Pedro Henrique Silva",
//         dependente_tipo2: "Filho",
//         dependente_nascimento2: "2013-11-22",
//         dependente_cpf2: "234.567.890-21",

//         dependente_nome3: "Maria Eduarda Silva",
//         dependente_tipo3: "Filha",
//         dependente_nascimento3: "2016-07-08",
//         dependente_cpf3: "345.678.901-32",

//         dependente_nome4: "Lucas Ferreira Silva",
//         dependente_tipo4: "Filho",
//         dependente_nascimento4: "2018-02-03",
//         dependente_cpf4: "456.789.012-43",

//         dependente_nome5: "Bruna Ribeiro Silva",
//         dependente_tipo5: "Filha",
//         dependente_nascimento5: "2020-09-27",
//         dependente_cpf5: "567.890.123-54",

//         dependente_nome6: "Carlos Eduardo Silva",
//         dependente_tipo6: "Filho",
//         dependente_nascimento6: "2022-06-11",
//         dependente_cpf6: "678.901.234-65",
//         observacoes: `O servidor apresentou todos os documentos solicitados para o recadastramento, incluindo cópias autenticadas de RG, CPF, comprovante de residência e título de eleitor. Constatou-se que o endereço informado está atualizado e condiz com os registros anteriores.

// Durante o preenchimento, o servidor informou possuir dois vínculos anteriores na rede municipal, os quais já foram devidamente encerrados.

// Não há pendências financeiras, administrativas ou disciplinares registradas até a presente data.`,

//         // data_assinatura: "2025-10-21",
//       };

//       // Preenche o formulário automaticamente
//       preencherFormulario(dadosServidor);
//     });