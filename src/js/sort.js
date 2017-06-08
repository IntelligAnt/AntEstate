function sort_by_price_asc(data) {
    return data.sort(function (a, b) {
        return a.price - b.price;
    });
}

function sort_by_price_desc(data) {
    return data.sort(function (a, b) {
        return b.price - a.price;
    });
}

function sort_by_date_asc(data) {
    return data.sort(function (a, b) {
        return a.date - b.date;
    });
}

function sort_by_date_desc(data) {
    return data.sort(function (a, b) {
        return b.date - a.date;
    });
}

function sort_by_id(data) {
    return data.sort(function (a, b) {
        return a.id - b.id;
    });
}

function sort(data, type) {
    switch (type) {
        case 0:
            return sort_by_price_asc(data);
        case 1:
            return sort_by_price_desc(data);
        case 2:
            return sort_by_date_asc(data);
        case 3:
            return sort_by_date_desc(data);
        default:
            return sort_by_id(data);
    }
}