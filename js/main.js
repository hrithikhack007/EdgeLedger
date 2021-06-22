function initMap(){

    const loc ={ lat:42.3561 , lng: -71.05634};

    const map=new google.maps.Map(document.querySelector('.map')
    , {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({position: loc, map:
    map});
}