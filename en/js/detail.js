function getId() {
    var url = document.location.href;
    var splitedUrl = url.split('?');
    if (splitedUrl.length < 2) window.location = "p404.html";
    if (splitedUrl[1].indexOf('#') === -1) {
        return splitedUrl[1];
    }
    return splitedUrl[1].substr(0, splitedUrl[1].indexOf('#'));
}

function submitTour() {
    var numberOfTours = parseInt(localStorage.getItem(id + "-tours"));
    localStorage.setItem(id + "-tours", numberOfTours + 1);
}

function showNumberOfTours(id) {
    if (localStorage.getItem(id + "-tours") === null) {
        localStorage.setItem(id + "-tours", 0);
    }
    document.querySelector('#num-of-tours').innerHTML = localStorage.getItem(id + "-tours");
}

function showProperty(property) {

    if (property.videos.length > 0) {
        property.photos.unshift(property.videos[0]);
    }

    for (i = 3; i < property.photos.length; i++) {
        document.querySelector('.hidden-images').innerHTML +=
            '<a href="' + property.photos[i] + '" data-lightbox="property-set"></a>'
    }

    var templateSource = document.querySelector("#banner-template").innerHTML;
    var compiledTemplate = Handlebars.compile(templateSource);
    document.querySelector("#banner-parent").innerHTML = compiledTemplate(property);
    templateSource = document.querySelector("#property-template").innerHTML;
    compiledTemplate = Handlebars.compile(templateSource);
    document.querySelector("#property-parent").innerHTML = compiledTemplate(property);
}

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

var id = getId();
showNumberOfTours(id);
$.get("properties.json", function (data) {
    var property = data.find(function (e) {
        return e.id == id;
    });
    if (property === undefined) window.location = "p404.html";
    property.info.heating = get_heating(property.info.heating);
    property.type = get_type(property.type);
    property.sellType = get_sell_type(property.sellType);
    showProperty(property);
});

function addDetailFav() {
    addFav(id);
}