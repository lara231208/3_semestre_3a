/* ==============================
   BASE DE DADOS LOCAL
============================== */

let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

function salvarLocal() {
  localStorage.setItem("clientes", JSON.stringify(clientes));
}


/* ==============================
   MODAL
============================== */

function abrirModal() {
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}


/* ==============================
   CADASTRAR CLIENTE (CORRIGIDO)
============================== */

function cadastrarCliente(event) {

  event.preventDefault();

  const novoCliente = {

    id: Date.now(),
    nome: document.getElementById("nome").value.trim(),
    telefone: document.getElementById("telefone").value.replace(/\D/g,''),
    email: document.getElementById("email").value,
    cpf: document.getElementById("cpf").value,
    rg: document.getElementById("rg").value,
    endereco: document.getElementById("endereco").value,
    nacionalidade: document.getElementById("nacionalidade").value,
    estadoCivil: document.getElementById("estadoCivil").value,
    profissao: document.getElementById("profissao").value,
    classeAcao: document.getElementById("classeAcao").value,
    tipoAcao: document.getElementById("tipoAcao").value,
    status: document.getElementById("status").value,
    formaPagamento: document.getElementById("formaPagamento").value,
    valor: document.getElementById("valor").value,
    vencimento: document.getElementById("vencimento").value,
    historico: []

  };

  clientes.push(novoCliente);
  salvarLocal();
  fecharModal();
  listarClientes();

}


/* ==============================
   LISTAR CLIENTES
============================== */

function listarClientes() {

  const lista = document.getElementById("listaClientes");
  if(!lista) return;

  lista.innerHTML = "";

  clientes.forEach(cliente => {

    lista.innerHTML += `
    <div class="card-cliente">

      <div class="cliente-click" onclick="abrirDetalhe(${cliente.id})">

        <h3>${cliente.nome}</h3>

        <div class="cliente-detalhes">

          <span class="info-item">
            <i data-feather="phone" class="icon-phone"></i>
            ${formatarTelefone(cliente.telefone)}
          </span>

          <span class="info-text">
            ${cliente.classeAcao}
          </span>

          <span class="info-text">
            ${cliente.tipoAcao}
          </span>

        </div>

      </div>

      <div class="cliente-acoes">

        <span class="badge ${cliente.status.replace(/\s/g,'-')}">
          ${cliente.status}
        </span>

        <button class="btn-delete" onclick="excluirCliente(${cliente.id})">
          <i data-feather="trash-2"></i>
        </button>

      </div>

    </div>
    `;

  });

  if (window.feather) feather.replace();
}


/* ==============================
   FILTRAR CLIENTES
============================== */

function filtrarClientes() {

  const termo = document.getElementById("pesquisa").value.toLowerCase();
  const statusSelect = document.getElementById("filtroStatus");
  const statusFiltro = statusSelect ? statusSelect.value : "Todos";

  const lista = document.getElementById("listaClientes");
  lista.innerHTML = "";

  clientes
    .filter(cliente => {

      const matchNome = cliente.nome.toLowerCase().includes(termo);

      const matchStatus =
        statusFiltro === "Todos" ||
        cliente.status === statusFiltro;

      return matchNome && matchStatus;

    })
    .forEach(cliente => {

      lista.innerHTML += `
      <div class="card-cliente">

        <div class="cliente-click" onclick="abrirDetalhe(${cliente.id})">

          <h3>${cliente.nome}</h3>

          <div class="cliente-detalhes">

            <span class="info-item">
              <i data-feather="phone" class="icon-phone"></i>
              ${formatarTelefone(cliente.telefone)}
            </span>

            <span class="info-text">
              ${cliente.classeAcao}
            </span>

            <span class="info-text">
              ${cliente.tipoAcao}
            </span>

          </div>

        </div>

        <div class="cliente-acoes">

          <span class="badge ${cliente.status.replace(/\s/g,'-')}">
            ${cliente.status}
          </span>

          <button class="btn-delete" onclick="excluirCliente(${cliente.id})">
            <i data-feather="trash-2"></i>
          </button>

        </div>

      </div>
      `;

    });

  if (window.feather) feather.replace();
}


/* ==============================
   FORMATAR TELEFONE
============================== */

function formatarTelefone(numero) {

  if(numero.length === 11){
    return `(${numero.substring(0,2)}) ${numero.substring(2,7)}-${numero.substring(7)}`;
  }

  return numero;
}


/* ==============================
   EXCLUIR CLIENTE
============================== */

function excluirCliente(id) {

  if(!confirm("Deseja realmente excluir este cliente?")) return;

  clientes = clientes.filter(c => c.id !== id);

  salvarLocal();
  listarClientes();

}


/* ==============================
   ABRIR DETALHE
============================== */

function abrirDetalhe(id) {

  localStorage.setItem("clienteSelecionado", id);
  window.location.href = "cliente-detalhe.html";

}


/* ==============================
   INICIALIZAÇÃO
============================== */

document.addEventListener("DOMContentLoaded", function(){
  listarClientes();
});