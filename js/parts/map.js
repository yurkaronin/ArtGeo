if (document.querySelector('.js-map')) {
  let center = [55.707223, 37.425486];


  function init() {

    let map = new ymaps.Map("map", {
      center: center, // ваши данные
      zoom: 15
    });

    let placemark = new ymaps.Placemark([55.707223, 37.425486], {}, {
      iconLayout: 'default#image', /* говорим что будем отображать на карте в качестве геометки  */
      iconImageHref: './svg/balun.svg', /* указываем пусть к картинке на нашем сайте  */
      iconImageSize: [48, 56],
      iconImageOffset: [-24, -29]
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);

    placemark.events
      .add('mouseenter', function (e) {
        e.get('target').options.set('iconImageHref', './svg/balun-hover.svg');
      })
      .add('mouseleave', function (e) {
        e.get('target').options.set('iconImageHref', './svg/balun.svg');
      });
  }

  ymaps.ready(init);
};

