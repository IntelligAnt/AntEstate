function showFilteredData(data) {
    document.querySelector("#number-of-results").innerHTML = data.length + " резултата";
    var templateSource = document.querySelector("#entry-template").innerHTML;
    var compiledTemplate = Handlebars.compile(templateSource);
    document.querySelector("#grid-view-parent").innerHTML = "";
    for (var property in data) {
        document.querySelector("#grid-view-parent").innerHTML += compiledTemplate(data[property]);
    }
}

function loadFormValues(urlFilters) {
    if ('min_price' in urlFilters) {
        document.querySelector('#price-min').value = urlFilters.min_price;
    }
    if ('max_price' in urlFilters) {
        document.querySelector('#price-max').value = urlFilters.max_price;
    }
    if ('min_area' in urlFilters) {
        document.querySelector('#area-min').value = urlFilters.min_area;
    }
    if ('max_area' in urlFilters) {
        document.querySelector('#area-max').value = urlFilters.max_area;
    }
    if ('min_rooms' in urlFilters) {
        document.querySelector('#rooms-min').value = urlFilters.min_rooms;
    }
    if ('max_rooms' in urlFilters) {
        document.querySelector('#rooms-max').value = urlFilters.max_rooms;
    }
    if ('type' in urlFilters) {
        document.querySelector('#type').value = urlFilters.type;
    }
    if ('sellType' in urlFilters) {
        document.querySelector('#sell-type').value = urlFilters.sellType;
    }
    if ('city' in urlFilters) {
        document.querySelector('#city').value = urlFilters.city;
    }
    if ('address' in urlFilters) {
        document.querySelector('#address').value = urlFilters.address;
    }
    if ('parking' in urlFilters) {
        document.querySelector('#parking').checked = urlFilters.parking;
    }
    if ('heating0' in urlFilters) {
        document.querySelector('#heating0').checked = urlFilters.heating0;
    }
    if ('heating1' in urlFilters) {
        document.querySelector('#heating1').checked = urlFilters.heating1;
    }
    if ('heating2' in urlFilters) {
        document.querySelector('#heating2').checked = urlFilters.heating2;
    }
    if ('heating3' in urlFilters) {
        document.querySelector('#heating3').checked = urlFilters.heating3;
    }
    if ('heating4' in urlFilters) {
        document.querySelector('#heating4').checked = urlFilters.heating4;
    }
}

var defaultFilters = {
    type: -1,
    sellType: -1,
    min_price: 0,
    max_price: Number.MAX_VALUE,
    min_area: 0,
    max_area: Number.MAX_VALUE,
    min_rooms: 0,
    max_rooms: Number.MAX_VALUE,
    parking: false,
    heating0: true,
    heating1: true,
    heating2: true,
    heating3: true,
    heating4: true,
    city: "*",
    address: "*",
    sort: 4
};
var urlFilters = extract_from_url();

var filters = $.extend({}, defaultFilters);
for (var attribute in urlFilters) {
    filters[attribute] = urlFilters[attribute];
}
var filteredData = [];

loadFormValues(urlFilters);

applyFilters();

function sortClick(type) {
    showFilteredData(sort(filteredData, type));
    filters.sort = type;
}

function applyFilters() {
    $.get("properties.json", function (data) {
        filteredData = sort(filter(data, filters), filters.sort);
        showFilteredData(filteredData);
    });
}

function filterClick() {
    var minPrice = document.querySelector('#price-min').value;
    var maxPrice = document.querySelector('#price-max').value;
    var minArea = document.querySelector('#area-min').value;
    var maxArea = document.querySelector('#area-max').value;
    var minRooms = document.querySelector('#rooms-min').value;
    var maxRooms = document.querySelector('#rooms-max').value;
    var type = document.querySelector('#type').value;
    var sellType = document.querySelector('#sell-type').value;
    var city = document.querySelector('#city').value;
    var address = document.querySelector('#address').value;
    var parking = document.querySelector('#parking').checked;
    var heating0 = document.querySelector('#heating0').checked;
    var heating1 = document.querySelector('#heating1').checked;
    var heating2 = document.querySelector('#heating2').checked;
    var heating3 = document.querySelector('#heating3').checked;
    var heating4 = document.querySelector('#heating4').checked;

    if (minPrice !== "") {
        filters.min_price = parseInt(minPrice);
    } else {
        filters.min_price = defaultFilters.min_price;
    }

    if (maxPrice !== "") {
        filters.max_price = parseInt(maxPrice);
    } else {
        filters.max_price = defaultFilters.max_price;
    }

    if (minArea !== "") {
        filters.min_area = parseInt(minArea);
    } else {
        filters.min_area = defaultFilters.min_area;
    }

    if (maxArea !== "") {
        filters.max_area = parseInt(maxArea);
    } else {
        filters.max_area = defaultFilters.max_area;
    }

    if (minRooms !== "") {
        filters.min_rooms = parseInt(minRooms);
    } else {
        filters.min_rooms = defaultFilters.min_rooms;
    }

    if (maxRooms !== "") {
        filters.max_rooms = parseInt(maxRooms);
    } else {
        filters.max_rooms = defaultFilters.max_rooms;
    }

    if (type !== "") {
        filters.type = type;
    } else {
        filters.type = defaultFilters.type;
    }

    if (sellType !== "") {
        filters.sellType = sellType;
    } else {
        filters.sellType = defaultFilters.sellType;
    }

    if (city !== "") {
        filters.city = city;
    } else {
        filters.city = defaultFilters.city;
    }

    if (address !== "") {
        filters.address = address;
    } else {
        filters.address = defaultFilters.address;
    }

    filters.parking = parking;
    filters.heating0 = heating0;
    filters.heating1 = heating1;
    filters.heating2 = heating2;
    filters.heating3 = heating3;
    filters.heating4 = heating4;


    applyFilters();
}