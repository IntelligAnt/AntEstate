function getFavorites() {
    return localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
}

function setFavorites(favs) {
    localStorage.favorites = JSON.stringify(favs);
}

function addToFavorites(id) {
    var favs = getFavorites();
    if (favs.indexOf(id) < 0) favs.push(id);
    setFavorites(favs);
}

function removeFromFavorites(id) {
    var favs = getFavorites();
    if (favs.length < 1) return;
    var i = favs.indexOf(id);
    if (i >= 0) {
        favs.splice(i, 1);
        setFavorites(favs);
    }
}

Handlebars.registerHelper('isFavorite', function (id, options) {
    return (getFavorites().indexOf(id) >= 0) ? options.fn(this) : options.inverse(this);
});

// function showFilteredData(data) {
//     document.querySelector("#number-of-results").innerHTML = data.length + " favorites";
//     var templateSource = document.querySelector("#entry-template").innerHTML;
//     var compiledTemplate = Handlebars.compile(templateSource);
//     document.querySelector("#grid-view-parent").innerHTML = "";
//     for (var property in data) {
//         document.querySelector("#grid-view-parent").innerHTML += compiledTemplate(data[property]);
//     }
// }

// var favs = [0, 1, 2];
// var f_data = [];
// getDataFromArray(favs);

// function getDataFromArray(arr) {
//     $.get("properties.json", function (data) {
//         for (var i = 0; i < arr.length; i++) {
//             var property = data.find(function (e) {
//                 return e.id == arr[i];
//             });
//             if (property !== undefined) f_data.push(property);
//         }
//         showFilteredData(f_data);
//     });
// }

// function sortClick(type) {
//     showFilteredData(sort(f_data, type));
// }
