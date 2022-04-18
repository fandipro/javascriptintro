/* buatlah sebuah program seearching nama yang dapat dibatasi yang menerapkan callback function
dengan data sebagai berikut*/

const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

let hasilSearch = [];
let key = 5;
const panjang = 'r'

if (typeof (key) === 'string') {
    for (let i = 0; i < name.length; i++) {
        if (name[i].toLowerCase().includes(key.toLowerCase())) {
            hasilSearch.push(name[i])
        }
    }
} else {
    console.log('key bukan string');
}


if (hasilSearch.length !== 0 && typeof (panjang) === 'number') {
    if (hasilSearch.length >= panjang) {
        while (hasilSearch.length > panjang) {
            hasilSearch.pop()
        }
        console.log(hasilSearch);
    } else {
        console.log(`data yang ditemukan haya ada ${hasilSearch.length}`);
        console.log(hasilSearch);
    }
} else {
    console.log(`nama dengan key: (${key}) tidak ditemukan`);
}



// console.log(hasilSearch);

function searchingName(keyword, element, callback) {


    return hasilSearch;
}
