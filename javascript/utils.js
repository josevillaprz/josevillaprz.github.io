class Utils {
    constructor() {}

    static calcualteBmi(height, weight) {
        let bmi = ((weight / height) / height) * 702
        return bmi.toFixed(1);
    }
}