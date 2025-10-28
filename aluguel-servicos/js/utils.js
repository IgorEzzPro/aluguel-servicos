function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function calcularTotalComTaxa(valorBase) {
  const taxa = 0.8;
  return valorBase + (valorBase * taxa);
}

function alertaSucesso(mensagem) {
  alert(`✅ ${mensagem}`);
}

function alertaErro(mensagem) {
  alert(`❌ ${mensagem}`);
}

window.utils = {
  validarEmail,
  formatarValor,
  calcularTotalComTaxa,
  alertaSucesso,
  alertaErro
};
// js/utils.js