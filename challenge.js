// Soal 1
function changeWord (selectedText, changedText, text) {
    let newText = text.replace(selectedText, changedText)
    return newText
}

const kalimat1 = "Andini sangat mencintai kamu selamanya"
const kalimat2 = "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu"

console.log(changeWord("mencintai", "membenci", kalimat1))
console.log(changeWord("bromo", "semeru", kalimat2))

// Soal 2
function checkTypeNumber (givenNumber) {
    if (typeof givenNumber == "number") {
        if (givenNumber % 2 == 0) {
            return "GENAP"
        } else {
            return "GANJIL"
        }
    } else if (givenNumber == null) {
        return "Error: Bro where is the parameter?"
    } else {
        return "Error: Invalid data type"
    }
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())

// Soal 3
function checkEmail(email) {
    if (String(email).toLowerCase().match(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    )) {
        return "VALID"
    } else if (String(email).toLowerCase().match(
        /^\w+([\.-]?\w+){2,3}$/
    )) {
        return "ERROR: Karena hanya memiliki string, angka, atau tidak memiliki parameter"
    } else {
        return "INVALID"
    }
} 

console.log(checkEmail("apranata@binar.co.id"))
console.log(checkEmail("apranata@binar.com"))
console.log(checkEmail("apranata@binar"))
console.log(checkEmail("apranata"))
console.log(checkEmail(3322))
console.log(checkEmail())

// Soal 4
function isValidPassword(pw){ 
    if(pw.length >= 8){ 
   
      let character='', 
          num=false, 
          up=false, 
          low=false 
     
      for( i = 0; i <= pw.length; i++){ 
        character = pw.charAt(i); 
        if (!isNaN(character)){ 
          num = true 
        } 
        else if (character == character.toUpperCase()) { 
          up = true 
        } 
        else if (character == character.toLowerCase()){ 
          low = true 
        } 
      } 
     
      if (num == true && up == true && low == true){ 
        return true 
      } 
      else{ 
        return false 
      } 
   
    }  
    else if(pw.length < 8){ 
      return false 
    }  
    else if(typeof pw != 'string'){ 
      return 'Error : Data yang di inputkan bukan string' 
    } 
     
  } 

console.log(isValidPassword('Meong2021')) 
console.log(isValidPassword('meong2021')) 
console.log(isValidPassword('@eong')) 
console.log(isValidPassword('Meong2')) 
console.log(isValidPassword(0))

// Soal 5
function getSplitName(personName) {
    if (personName == !isNaN) {
        return "Error : Input tidak boleh angka"
    } else if (personName.split(' ').length > 3) {
        return "Error : This function is only for 3 Characters name"
    } else {
        let arr1 = personName.split(' ').slice(0, 1).join(' ');
        let arr2 = personName.split(' ').slice(1, -1).join(' ');
        let arr3 = personName.split(' ').slice(-1).join(' ');
        let data = { firstName: arr1, middleName: arr2, lastName: arr3 }
        if (personName.split(' ').length == 1) {
          return data = { firstName: arr1, middleName: null, lastName: null }
        } else if (arr2 == "") {
          return data = { firstName: arr1, middleName: null, lastName: arr3 }
        } else if (personName.split(' ').length == 3) {
          return data
        }
    }
}

console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))

//Soal 6
function getAngkaTerbesarKedua(angka) {
  if (angka == null) {
    return "ERROR: Parameter tidak boleh kosong"
  } else if (angka.length > 1) {
    angka.sort(function(a,b) {
      return b-a
    })
    return angka[1]
  } else {
    return "ERROR: Angka harus berupa data array"
  }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka))
console.log(getAngkaTerbesarKedua(0))
console.log(getAngkaTerbesarKedua())

// Soal 7
const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
]

function hitungTotalPenjualan(dataPenjualan) {
  return dataPenjualan.map(item => item.totalTerjual).reduce((prev, curr) => prev + curr, 0)
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi))

// Soal 8
const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
]

function getInfoPenjualan(dataPenjualan){
  let pendapatan = dataPenjualan.map(item => item.totalTerjual * (item.hargaJual - item.hargaBeli)).reduce((prev, curr) => prev + curr, 0)
  let modalAwal = dataPenjualan.map(item => (item.totalTerjual + item.sisaStok) * item.hargaBeli).reduce((prev, curr) => prev + curr, 0)
  let labaPersen = ((pendapatan/modalAwal)*100).toFixed() + "%"
  const formatModal = modalAwal.toString().split('').reverse().join('');
  const formatLaba = pendapatan.toString().split('').reverse().join('');
  const convertModal = formatModal.match(/\d{1,3}/g);
  const convertLaba = formatLaba.match(/\d{1,3}/g);
  const rupiahModal = 'Rp ' + convertModal.join('.').split('').reverse().join('')
  const rupiahLaba = 'Rp ' + convertLaba.join('.').split('').reverse().join('')
  let terlaku = 0
  for (let i = 0; i < dataPenjualan.length; i++) {  
    if( dataPenjualan[i].totalTerjual > terlaku){ 
      terlaku = dataPenjualan[i].totalTerjual 
      j=i 
    }
  }
  hasil = {
    totalKeuntungan: rupiahLaba,
    totalModal: rupiahModal,
    persentaseKeuntungan: labaPersen,
    produkBukuTerlaris: dataPenjualan[j].namaProduk,
    penulisTerlaris: dataPenjualan[j].penulis,
  }
  return hasil
}

console.log(getInfoPenjualan(dataPenjualanNovel))