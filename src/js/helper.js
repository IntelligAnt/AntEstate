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