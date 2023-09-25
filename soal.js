// Soal
// switch case
// Buatlah sebuah program mengunakan switch case untuk menentukan grade berdasarkan nilai siswa
// 1. jika nilai 100 maka grade adalah A 
// 2. jika grade >= 80 & < 100 maka grade adalah B
// 3. jika grade >= 70 & < 80 maka grade adalah C
// 4. jika grade >= 50 & < 70 maka grade adalah D
// 5. jika grade < 50 maka grade adalah E
// 6. jika input diluar range maka akan memunculkan error "Invalid Input!" 
    function grading(nilai){
        let grade = "";
        let n = Number(nilai);
        switch (true) {
            case n == 100:
                grade = "A";
                break;
            case n < 100 && n >= 90:
                grade = "B";
                break;
            case n < 80 && n >= 70:
                grade = "C";
                break;
            case n < 70 && n >= 50:
                grade = "D";
                break;
            case n < 50 && n >= 0:
                grade = "E";
                break;
            case n < 0:
            default:
                grade = "Invalid Output!";
                break;
        }
        console.log(grade);
    }

    grading(-8);

//loop
// Buatlah tampilan seperti di bawah ini mengunakan loop
// *****
// ****
// ***
// **
// *
    function triangle() {
        let str = "";

        for (let i = 0; i < 5; i++) {
            for (let j = 5; j > i; j--) {
                str += "*";
            }
            str += "\n";
        }

        return str;
    }

    console.log(triangle());

// function
// Buatlah sebuah program kalkulator sederhana mengunakan function
// support 2 operan & 1 operator
    const calculator = (operan1, operan2, operator) => {
        // console.log(operan1, operan2, operator);
        if (operator == "+") return Number(operan1) + Number(operan2);
        else if (operator == "-") return Number(operan1) - Number(operan2);
        else if (operator == "*") return Number(operan1) * Number(operan2);
        else if (operator == "/") return Number(operan1) / Number(operan2);
        else return "No option available";
    }

    console.log(calculator(2, 3, "*"));

// classes
// Buatlah sebuah class untuk menghitung dan mendeskripsikan sebuah bangun tabung
// expektasi output = menghasilkan volume, luas permukaan dan radius
class Cylinder{
    constructor(h, d){
        this.height = h;
        this.diameter = d;
        this.radius = d / 2// hitung radius;
    }
    volume(){
        return Math.PI * this.radius**2 * this.height;
    }
    surfaceArea(){ //luas permukaan
        return 2 * Math.PI * this.radius * ( this.radius + this.height);
    }
}

let cylA = new Cylinder(10, 5);
console.log(cylA);
console.log("Luas permukaan Silinder: " + cylA.surfaceArea());
console.log("Volume Silinder: " + cylA.volume());