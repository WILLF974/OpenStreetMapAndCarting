window.onload = function(){
    let macarte = L.map('carte').setView([48.852969, 2.349903], 13)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'})
        .addTo(macarte)

    // On active la gestion d'itinéraire
        L.Routing.control({
            geocoder: L.Control.Geocoder.nominatim()
        }).addTo(macarte)
}