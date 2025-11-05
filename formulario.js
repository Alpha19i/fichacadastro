class Form extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback() {
    this.insertAdjacentHTML('afterbegin', /*html*/`
    <style>
      select{
        height: 31px;
        width: 100%;
        margin-block: 4px;
      }
      #foto {
        background: #fff;
        border: 1px solid #777;
        border-radius: 3px;
        padding: 4px;
        cursor: pointer;
        box-sizing: border-box;
        transition: border-color 0.2s ease;
      }

      #foto:hover {
        border-color: #555;
      }

      #foto::file-selector-button {
        background-color: #989898ff;
        color: white;
        border: none;
        border-radius: 4px;
        padding: 3px 10px;
        margin-right: 10px;
        font-weight: 600;
        cursor: pointer;
        transition: background-color 0.2s ease;
      }

      #foto::file-selector-button:hover {
        background-color: #5a5a5aff;
      }
      .f1 {
        flex: 1;
        min-width: 6.5rem;
      }
      .f2 {
        flex: 1.7;
        min-width: 14rem;
      }
      .f05 {
        flex: 0.5;
      }
      .line{
        display: flex;
        flex-wrap: wrap;
        gap: 1%
      }
    </style>

    <form onSubmit="gerarFicha(); return false;" class="formulario">
      <h1>Preenchimento da Ficha</h1>
      <h2>1 - Dados Pessoais</h2>
      <div class='line'>
        <label class='f2'>Foto do Servidor<br/>
          <input required type="file" id="foto" accept="image/*">
        </label>

        <label class='f1'>Matrícula
          <input type="text" id="matricula">
        </label>

        <label class='f2'>Nome do(a) Servidor(a)
          <input required type="text" id="nome">
        </label>
      </div>
      <div class='line'>
        <label class='f1'>Data de Nascimento
          <input type="date" id="nascimento">
        </label>

        <label class='f1'>Sexo<br/>
          <select  id="sexo">
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </label>

        <label class='f1'>Estado Civil<br/>
          <select id="estado_civil">
            <option value="">Selecione</option>
            <option value="Solteiro(a)">Solteiro(a)</option>
            <option value="Casado(a)">Casado(a)</option>
            <option value="Divorciado(a)">Divorciado(a)</option>
            <option value="Viúvo(a)">Viúvo(a)</option>
            <option value="União Estável">União Estável</option>
          </select>
        </label>
      </div>
      
      <div class='line'>
        <label class='f2'>Naturalidade
          <input type="text" id="naturalidade">
        </label>
        
        <label class='f05'>UF (Estado)
          <input type="text" id="uf" maxlength="2" style="text-transform:uppercase;">
        </label>
      </div>
      
      <div class='line'>
        <label class='f2'>Nome da Mãe
          <input type="text" id="mae">
        </label>

        <label class='f2'>Nome do Pai
          <input type="text" id="pai">
        </label>
      </div>


      <label>Endereço</label>
      <input type="text" id="endereco">

      <label>Número</label>
      <input type="text" id="numero">

      <label>Complemento</label>
      <input type="text" id="complemento">

      <label>Bairro</label>
      <input type="text" id="bairro">

      <label>Cidade</label>
      <input type="text" id="cidade">

      <label>CEP</label>
      <input type="text" id="cep">

      <label>Telefone Fixo</label>
      <input type="text" id="telefone_fixo">

      <label>Celular</label>
      <input type="text" id="celular">

      <label>Email</label>
      <input type="email" id="email">

      <h2>2 - Documentos</h2>

      <label>CPF</label>
      <input type="text" id="cpf">

      <label>PIS/PASEP</label>
      <input type="text" id="pis_pasep">

      <label>Escolaridade</label>
      <input type="text" id="escolaridade">

      <label>RG</label>
      <input type="text" id="rg">

      <label>Data de Emissão (RG)</label>
      <input type="date" id="rg_data_emissao">

      <label>Órgão Expedidor (RG)</label>
      <input type="text" id="rg_orgao_exp">

      <label>UF (RG)</label>
      <input type="text" id="rg_uf" maxlength="2" style="text-transform:uppercase;">

      <label>CTPS</label>
      <input type="text" id="ctps">

      <label>Série (CTPS)</label>
      <input type="text" id="ctps_serie">

      <label>Data de Emissão (CTPS)</label>
      <input type="date" id="ctps_data_emissao">

      <label>UF (CTPS)</label>
      <input type="text" id="ctps_uf" maxlength="2" style="text-transform:uppercase;">

      <label>Título de Eleitor</label>
      <input type="text" id="titulo_eleitor">

      <label>Zona</label>
      <input type="text" id="titulo_zona">

      <label>Seção</label>
      <input type="text" id="titulo_secao">

      <label>Data de Emissão (Título)</label>
      <input type="date" id="titulo_data_emissao">

      <label>UF (Título)</label>
      <input type="text" id="titulo_uf" maxlength="2" style="text-transform:uppercase;">

      <label>Banco / Agência</label>
      <input type="text" id="banco_agencia">

      <label>Conta com DV</label>
      <input type="text" id="conta_dv">

      <label>Sindicato</label>
      <input type="text" id="sindicato">

      <label>Pensão Alimentícia / Judicial</label>
      <input type="text" id="pensao">

      <h2>3 - Dados Funcionais</h2>

      <label>Cargo / Função</label>
      <input type="text" id="cargo">

      <label>Data da Portaria</label>
      <input type="date" id="data_portaria">

      <label>Data da Posse</label>
      <input type="date" id="data_posse">

      <label>Lotação</label>
      <input type="text" id="lotacao">

      <label>Último Local de Trabalho</label>
      <input type="text" id="ultimo_local_trabalho">

      <h2>4 - Dependentes</h2>

      <h4>Dependente 1</h4>
      <label>Nome</label><input type="text" id="dependente_nome1">
      <label>Tipo</label><input type="text" id="dependente_tipo1">
      <label>Data de Nascimento</label><input type="date" id="dependente_nascimento1">
      <label>CPF</label><input type="text" id="dependente_cpf1">

      <h4>Dependente 2</h4>
      <label>Nome</label><input type="text" id="dependente_nome2">
      <label>Tipo</label><input type="text" id="dependente_tipo2">
      <label>Data de Nascimento</label><input type="date" id="dependente_nascimento2">
      <label>CPF</label><input type="text" id="dependente_cpf2">

      <h4>Dependente 3</h4>
      <label>Nome</label><input type="text" id="dependente_nome3">
      <label>Tipo</label><input type="text" id="dependente_tipo3">
      <label>Data de Nascimento</label><input type="date" id="dependente_nascimento3">
      <label>CPF</label><input type="text" id="dependente_cpf3">

      <h4>Dependente 4</h4>
      <label>Nome</label><input type="text" id="dependente_nome4">
      <label>Tipo</label><input type="text" id="dependente_tipo4">
      <label>Data de Nascimento</label><input type="date" id="dependente_nascimento4">
      <label>CPF</label><input type="text" id="dependente_cpf4">

      <h4>Dependente 5</h4>
      <label>Nome</label><input type="text" id="dependente_nome5">
      <label>Tipo</label><input type="text" id="dependente_tipo5">
      <label>Data de Nascimento</label><input type="date" id="dependente_nascimento5">
      <label>CPF</label><input type="text" id="dependente_cpf5">

      <h4>Dependente 6</h4>
      <label>Nome</label><input type="text" id="dependente_nome6">
      <label>Tipo</label><input type="text" id="dependente_tipo6">
      <label>Data de Nascimento</label><input type="date" id="dependente_nascimento6">
      <label>CPF</label><input type="text" id="dependente_cpf6">

      <h2>5 - Observações e Assinaturas</h2>

      <label>Observações</label>
      <textarea id="observacoes" style="width: 100%;" rows="10" placeholder="Digite observações relevantes..."></textarea>
      <!-- <label>Data da Assinatura</label>
      <input type="date" id="data_assinatura"> -->

      <button type='submit'>Gerar PDF</button>
    </form>
      
    `)
    this.querySelector('#foto').addEventListener('change', function (e) {
      console.log('passou aqui')
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById('fotoPerfil').src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
}

customElements.define('formulario-component', Form);