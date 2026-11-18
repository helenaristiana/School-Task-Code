function calculateGrade() {
    let grade = document.getElementById("inputGrade").value;
    let result = document.getElementById("result");

    result.classList.remove("hijau", "merah");

    let gradeInt = parseInt(grade);

    if (gradeInt >= 75) {
        result.innerHTML = "Selamat, Anda Lulus!";
        result.classList.add("hijau");
    } else {
        result.innerHTML = "Maaf, Anda Tidak Lulus!";
        result.classList.add("merah");
    }
}
