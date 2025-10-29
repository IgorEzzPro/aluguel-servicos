document.getElementById("tipoConta").addEventListener("change", function () {
  const area = document.getElementById("areaPrestador");
  area.style.display = this.value === "prestador" ? "block" : "none";
});

document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const tipo = document.getElementById("tipoConta").value;
  const valorServico = parseFloat(document.getElementById("valorServico").value);

  if (tipo === "prestador") {
    localStorage.setItem("valorServico", valorServico);
  }

  alert("✅ Cadastro realizado com sucesso!");
  window.location.href = tipo === "prestador" ? "../perfil/profissional.html" : "../index.html";
});
