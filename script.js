function initMap() {
    // Coordenadas de exemplo
    var locations = [
      {
        name: "Clínica A",
        lat: -23.5505,
        lng: -46.6333
      },
      {
        name: "Clínica B",
        lat: -23.5608,
        lng: -46.6325
      },
      {
        name: "Clínica C",
        lat: -23.5489,
        lng: -46.6386
      }
    ];

    // Cria um mapa
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: -23.5505, lng: -46.6333} // Coordenadas do centro do mapa
    });

    // Adiciona marcadores para cada localização
    locations.forEach(function(location) {
      var marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.lng},
        map: map,
        title: location.name
      });

      // Cria uma janela de informações para cada marcador
      var infowindow = new google.maps.InfoWindow({
        content: location.name
      });

      // Mostra a janela de informações ao clicar no marcador
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    });
  }
