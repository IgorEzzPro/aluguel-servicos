const valorBase = 100;
const total = utils.calcularTotalComTaxa(valorBase);
const taxa = total - valorBase;

document.getElementById("valorBase").textContent = utils.formatarValor(valorBase);
document.getElementById("taxa").textContent = utils.formatarValor(taxa);
document.getElementById("total").textContent = utils.formatarValor(total);

document.getElementById("pagamentoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  utils.alertaSucesso(`Pagamento realizado! Total pago: ${utils.formatarValor(total)}. Valor repassado ao profissional: ${utils.formatarValor(valorBase)}.`);
});
// pagamento/pagamento.js