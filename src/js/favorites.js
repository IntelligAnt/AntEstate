function showFilteredData(data) {
    document.querySelector("#number-of-results").innerHTML = data.length + " favorites";
    var templateSource = document.querySelector("#entry-template").innerHTML;
    var compiledTemplate = Handlebars.compile(templateSource);
    document.querySelector("#grid-view-parent").innerHTML = "";
    for (var property in data) {
        document.querySelector("#grid-view-parent").innerHTML += compiledTemplate(data[property]);
    }
}

var favs = [0, 1, 2];
var f_data = [];
getDataFromArray(favs);

function getDataFromArray(arr) {
    $.get("properties.json", function (data) {
        for (var i = 0; i < arr.length; i++) {
            var property = data.find(function (e) {
                return e.id == arr[i];
            });
            if (property !== undefined) f_data.push(property);
        }
        showFilteredData(f_data);
    });
}

function sortClick(type) {
    showFilteredData(sort(f_data, type));
}

