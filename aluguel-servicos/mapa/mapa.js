const profissionais = [
  {
    nome: "João Pedreiro",
    tipo: "Construção Civil",
    tempoRestante: "1h 30min",
    foto: "../assets/img/joao.jpg",
    lat: -8.2845,
    lng: -35.9699
  },
  {
    nome: "Maria Limpeza",
    tipo: "Limpeza Residencial",
    tempoRestante: "45min",
    foto: "../assets/img/maria.jpg",
    lat: -8.2900,
    lng: -35.9650
  }
];

function initMap() {
  const mapa = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: -8.2845, lng: -35.9699 },
    styles: [
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#0A1F44" }]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "on" }]
      }
    ]
  });

  profissionais.forEach((prof) => {
    const marker = new google.maps.Marker({
      position: { lat: prof.lat, lng: prof.lng },
      map: mapa,
      icon: "../assets/icons/profissional.png"
    });

    const info = `
      <div style="color:#0A1F44; font-family:'Poppins', sans-serif;">
        <h3>${prof.nome}</h3>
        <p><strong>Serviço:</strong> ${prof.tipo}</p>
        <p><strong>Tempo restante:</strong> ${prof.tempoRestante}</p>
        <img src="${prof.foto}" width="100" style="border-radius:8px; margin-top:10px;" />
      </div>
    `;

    const popup = new google.maps.InfoWindow({ content: info });
    marker.addListener("click", () => popup.open(mapa, marker));
  });
}

window.onload = initMap;
