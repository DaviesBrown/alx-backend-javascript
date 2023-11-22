exports.Utils = {
    calculateNumber: function(type, a, b) {
        switch (type) {
            case "SUM":
                a = Math.round(a);
                b = Math.round(b);
                return a + b;
            case "SUBTRACT":
                a = Math.round(a);
                b = Math.round(b);
                return a - b;
            case "DIVIDE":
                a = Math.round(a);
                b = Math.round(b);
                if (!b) return "Error";
                return a / b;
            default:
                break;
        }
    }
};