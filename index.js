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
    let colorSet2 = [];
    colorSet2.push("Yellow");
    colorSet2.push("Pink");
    colorSet2.push("White");
    colorSet2.push("Purple");
    return colorSet2;
 }
 function setColor2(){
    let colorSet3 = [];
    colorSet3.push("Blue");
    colorSet3.push("Black");
    colorSet3.push("Grey");
    return colorSet3;
 }
 function setRestaurant(){
     let favoriteRestaurant2 = [];
     favoriteRestaurant2.push("Bento");
     favoriteRestaurant2.push("Sushi");
     favoriteRestaurant2.push("Pancake");
     favoriteRestaurant2.push("Eggy");
     favoriteRestaurant2.push("Tempura");
     favoriteRestaurant2.push("Padang");
     favoriteRestaurant2.push("Tteok");
    return favoriteRestaurant2;
    }
    function setRestaurant2(){
        let favoriteRestaurant3 = [];
     favoriteRestaurant3.push("Tempura");
     favoriteRestaurant3.push("Bento");
     favoriteRestaurant3.push("Sushi");
     favoriteRestaurant3.push("Pancake");
     favoriteRestaurant3.push("Padang");
     favoriteRestaurant3.push("Katsu");
     favoriteRestaurant3.push("Geprek");
     favoriteRestaurant3.push("Eggy");
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