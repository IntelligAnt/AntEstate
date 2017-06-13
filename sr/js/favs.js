function getFavs() {
    return localStorage.favs ? JSON.parse(localStorage.favs) : [];
}

function setFavs(favs) {
    localStorage.favs = JSON.stringify(favs);
}

function addFav(id) {
    var favs = getFavs();
    if (favs.indexOf(id) < 0) favs.push(id);
    setFavs(favs);
}

function removeFav(id) {
    var favs = getFavs();
    if (favs.length < 1) return;
    var i = favs.indexOf(id);
    if (i >= 0) {
        favs.splice(i, 1);
        setFavs(favs);
    }
}

Handlebars.registerHelper('isFav', function (id, options) {
    return (getFavs().indexOf(id) >= 0) ? options.fn(this) : options.inverse(this);
});
