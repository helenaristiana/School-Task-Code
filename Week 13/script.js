function checkNilai(){
    let input = document.getElementById("input").value;
    let result = "";
    inputInt= parseInt(input);
    if (inputInt >=75){
        result = "Lulus";
    }
    else {
        result = "Tidak Lulus";
    }
    document.getElementById("result").innerHTML = result;
}

function Luas() {
    let input = document.getElementById("input").value;
    let result = " ";
    let phi = 3.14;
    inputInt= parseInt(input);
    if(inputInt >=0){
        result = "Hasil Luas = " + (phi* inputInt * inputInt);
    }
    else {
        result = "Masukkan angka yang benar";
    }

document.getElementById("result").innerHTML = result;
}


function Keliling() {
    let input = document.getElementById("input").value;
    let result = " ";
    let phi = 3.14;
    inputInt= parseInt(input);
    if(inputInt >=0){
        result = "Hasil Keliling = " + (2* phi* inputInt);
    }
    else {
        result = "Masukkan angka yang benar";
    }

document.getElementById("result").innerHTML = result;
}
