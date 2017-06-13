function showFilteredData(data) {
    var templateSource = document.querySelector("#entry-template").innerHTML;
    var compiledTemplate = Handlebars.compile(templateSource);
    document.querySelector("#grid-view-parent").innerHTML = "";
    for (var property in data) {
        document.querySelector("#grid-view-parent").innerHTML += compiledTemplate(data[property]);
    }
}

$.get("properties.json", function (data) {
    showFilteredData(sort_by_date_desc(data).slice(0, 6);
});
