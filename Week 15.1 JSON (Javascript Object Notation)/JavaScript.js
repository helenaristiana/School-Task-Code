fetch("databulk.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("Data tidak ditemukan");
        }else{
            return response.json();
        }
    })
    .then(function(siswa){
        const tabel=document.getElementById("data-siswa");
        siswa.forEach(function(item){
            const row = document.createElement("tr");
            row.innerHTML=`
            <td>${item.nama}</td>
            <td>${item.umur}</td>
            <td>${item.kelas}</td>
            <td>${item.tempat_lahir}</td>
            <td>${item.tanggal_lahir}</td>
            <td>${item.alamat}</td>
            `;
            tabel.appendChild(row);
        })
    })


    fetch("book.json")
    .then(function(response){
        if(!response.ok){
            throw new Error("Data tidak ditemukan");
        }else{
            return response.json();
        }
    })
    .then(function(book){
        const tabel=document.getElementById("data-book");
        book.forEach(function(item){
            const row = document.createElement("tr");
            row.innerHTML=`
            <td>${item.title}</td>
            <td>${item.publisher}</td>
            <td>${item.author}</td>
            <td>${item.published_year}</td>
            <td>${item.city}</td>
            `;
            tabel.appendChild(row);
        })
    })


    function addHTML(){
        window.location.href="add.html"
    }

    //bagian add book
    const form=
    document.getElementById("form-book");

    if (form){
        form.addEventListener("submit",function(event){
 //preventDefault untuk menghentikan submit
event.preventDefault();
const newBook = {
    //trim berguna untuk menghilangkan spasi diawal dan diakhir
    title : form.getElementsById("title").value.trim(),
    author : form.getElementsById("author").value.trim(),
    year : form.getElementsById("year").value.trim(),
    city : form.getElementsById("city").value.trim(),
    publisher : form.getElementsById("publisher").value.trim(),
};
//JSON.parse untuk mengubah string menjadi objek

const saveToLocalData = JSON.parse(
    localstorage.getitem("books" || "{}")

);
saveToLocalData.push(newbook);
localstorage.setItem("dataBuku",JSON.stringify(saveToLocalData));
alert("Data Berhasil Ditambahkan");
window.location.href="index.html";
    })
}