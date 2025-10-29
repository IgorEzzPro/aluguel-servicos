document.getElementById("valorServico").textContent = localStorage.getItem("valorServico") || "N/A";

function contratar() {
  window.location.href = "../pagamento/pagamento.html";
}
document.getElementById("contratarBtn").addEventListener("click", contratar);
// perfil/profissional.js