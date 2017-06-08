function is_in_range(value, min, max) {
    return max >= value && min <= value;
}

function check_heating(h, filters) {
    switch (h) {
        case "0":
            return filters.heating0;
        case "1":
            return filters.heating1;
        case "2":
            return filters.heating2;
        default:
            return true;
    }
}

function filter(data, filters) {
    return data.filter(function (e) {
        return e.type == filters.type
            && is_in_range(e.price, filters.min_price, filters.max_price)
            && is_in_range(e.area, filters.min_area, filters.max_area)
            && is_in_range(e.info.rooms, filters.min_rooms, filters.max_rooms)
            && (!filters.parking || e.info.parking)
            && check_heating(e.info.heating, filters);
    });
}

function extract_from_string(str) {
    var pairs = str.split('&');
    filters = {};
    for (var i in pairs) {
        var name = pairs[i].split('=')[0],
            value = decodeURIComponent(pairs[i].split('=')[1]);
        filters[name] = value;
    }
    if ("parking" in filters) {
        filters.parking = filters.parking === "true";
    }
    if ("heating0" in filters) {
        filters.heating0 = filters.heating0 === "true";
    }
    if ("heating1" in filters) {
        filters.heating1 = filters.heating1 === "true";
    }
    if ("heating2" in filters) {
        filters.heating2 = filters.heating2 === "true";
    }
    return filters;
}

function pack_to_string(filters) {
    var str = "";
    for (var f in filters) {
        str += f + "=" + encodeURIComponent(filters[f]) + "&";
    }
    return str.substr(0, str.length - 1);
}

function extract_from_url() {
    var url = document.location.href;
    var splitedUrl = url.split('?');
    if (splitedUrl.length < 2) return {};
    var data = splitedUrl[1];
    return extract_from_string(data);
}

function pack_to_url(url, filters) {
    return url + "?" + pack_to_string(filters);
}