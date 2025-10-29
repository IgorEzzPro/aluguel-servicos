function formatarValor(valor) {
  return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function alertaSucesso(mensagem) {
  alert(`✅ ${mensagem}`);
}

function alertaErro(mensagem) {
  alert(`❌ ${mensagem}`);
}

window.utils = {
  formatarValor,
  alertaSucesso,
  alertaErro
};
// js/utils.js