// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca


const firstUser = {
    name: "Monica",
    gender: "female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: setColor(),
    isHavePet: true,
    education: setEducation(),
    favoriteRestaurant: setRestaurant()
};
const secondUser = {
    name: "Wendy",
    gender: "male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: setColor2(),
    isHavePet: false,
    education: setEducation2(),
    favoriteRestaurant: setRestaurant2()
};

function setColor(){
    let colorSet2 = new Set();
    colorSet2.add("Yellow");
    colorSet2.add("Pink");
    colorSet2.add("White");
    colorSet2.add("Purple");
    return colorSet2;
 }
 function setColor2(){
    let colorSet3 = new Set();
    colorSet3.add("Blue");
    colorSet3.add("Black");
    colorSet3.add("Grey");
    return colorSet3;
 }
 function setRestaurant(){
     let favoriteRestaurant2 = new Set();
     favoriteRestaurant2.add("Bento");
     favoriteRestaurant2.add("Sushi");
     favoriteRestaurant2.add("Pancake");
     favoriteRestaurant2.add("Eggy");
     favoriteRestaurant2.add("Tempura");
     favoriteRestaurant2.add("Padang");
     favoriteRestaurant2.add("Tteok");
    return favoriteRestaurant2;
    }
    function setRestaurant2(){
        let favoriteRestaurant3 = new Set();
     favoriteRestaurant3.add("Tempura");
     favoriteRestaurant3.add("Bento");
     favoriteRestaurant3.add("Sushi");
     favoriteRestaurant3.add("Pancake");
     favoriteRestaurant3.add("Padang");
     favoriteRestaurant3.add("Katsu");
     favoriteRestaurant3.add("Geprek");
     favoriteRestaurant3.add("Eggy");
    return favoriteRestaurant3;
    }
 function Education(inputName, inputCity, inputGraduate){
    let educationMap = new Map();
    educationMap.set('name', inputName);
    educationMap.set('city', inputCity);
    educationMap.set('graduate', inputGraduate);
    return educationMap;
 }
 function setEducation(){
     let educationArray = [];
    educationArray.push(new Education('SD 01', 'Jakarta', 2016));
    educationArray.push(new Education('SMP 02', 'Jakarta', 2019));
    educationArray.push(new Education('SMA 03', 'Tangerang', null));
    return educationArray;
 }
 function setEducation2(){
     let educationArray2 = [];
     educationArray2.push(new Education('SD 02', 'Jakarta', 2010));
     educationArray2.push(new Education('SMP 03', 'Bogor', 2013));
     educationArray2.push(new Education('SMA 01', 'Surabaya', 2016));
     educationArray2.push(new Education('Universitas Maju', 'Tangerang', null));
    return educationArray2;
 }
 

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};