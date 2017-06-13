function get_heating(num) {
    switch (num) {
        case "0":
            return "Storage heater";
        case "1":
            return "Central";
        case "2":
            return "Norwegian radiator";
        case "3":
            return "Floor";
        case "4":
            return "Electric";
        default:
            return "None";
    }
}

function get_type(type) {
    switch (type) {
        case 0:
            return "Housing";
        case 1:
            return "Business";
        case 2:
            return "Tourism";
        default:
            return "";
    }
}

function get_sell_type(type) {
    switch (type) {
        case 0:
            return "For Sale";
        case 1:
            return "For Rent";
        default:
            return "";
    }
}