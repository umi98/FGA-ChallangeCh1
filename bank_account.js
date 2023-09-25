let saldo = 0;
let mutasi = 0;


function tambahSaldo(){
    let nilai = Number(prompt("Masukkan nilai saldo: "));
    saldo += nilai;
    tampilSaldo();
}

function kurangiSaldo(){
    let nilai = Number(prompt("Masukkan nilai saldo: "));
    if (nilai > saldo) {
        alert("Nilai mutasi tidak boleh lebih besar dari saldo!");
    } else {
        saldo -= nilai;
        tampilSaldo();
    }    
}

function tampilSaldo(){
    document.getElementById("saldo").innerHTML = saldo;
}
