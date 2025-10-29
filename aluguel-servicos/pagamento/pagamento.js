const valorBase = parseFloat(localStorage.getItem("valorServico")) || 0;
const taxa = valorBase * 0.8;
const total = valorBase + taxa;

document.getElementById("valorBase").textContent = `R$ ${valorBase.toFixed(2).replace('.', ',')}`;
document.getElementById("taxa").textContent = `R$ ${taxa.toFixed(2).replace('.', ',')}`;
document.getElementById("total").textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;

document.getElementById("pagamentoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(`✅ Pagamento de R$ ${total.toFixed(2)} realizado! R$ ${valorBase.toFixed(2)} será repassado ao profissional.`);
});
// pagamento/pagamento.js