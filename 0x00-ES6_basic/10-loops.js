export default function appendToEachArrayValue(array = [], appendString) {
    let newArray = []
    for (let item of array) {
        item = appendString + item;
        newArray.push(item);
    }

    return newArray;
}
