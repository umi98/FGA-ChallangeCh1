class BankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }

    tampilSaldo(){
        document.getElementById("saldo").innerHTML = this.saldo;
        console.log(this.saldo);
    }

    tambahSaldo(){
        let nilai = Number(prompt("Masukkan nilai saldo: "));
        this.saldo += nilai;
        this.tampilSaldo();
    }

    kurangiSaldo(){
        let nilai = Number(prompt("Masukkan nilai saldo: "));
        if (nilai > this.saldo) {
            alert("Nilai mutasi tidak boleh lebih besar dari saldo!");
            console.log("Nilai mutasi tidak boleh lebih besar dari saldo!");
        } else {
            this.saldo -= nilai;
            this.tampilSaldo();
        }        
    }
}

const nilai = Number(prompt("Saldo awal: "), 10);

const operasi = new BankAccount(nilai);
operasi.tampilSaldo();