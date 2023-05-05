// GLOBAL:
//Function for Dom
function dom(id) {
  return document.getElementById(id);
}

// <!------------ Hw1: Tìm số nguyên dương nhỏ nhất sao cho 1+2+3+....+n > 10000--------->
function number1() {
  var n = 0;
  var tong = 0;
  while (tong <= 10000) {
    tong += n;
    n++
  }
  dom("footer1").innerHTML = "Số nguyên dương nhỏ nhất: " + n;
  // Chạy thử:
  // for(var i = 0; i < 142 ; i++){
  //   tong += i;
  // }
  // console.log(tong);
}

// <!------- Hw2: nhập 2 số (x,n) tính tổng: S(n) =x + x^2 + x^3 +...+x^n--------->
// input: number
function number2() {
  // input: number
  var x = +dom("numberX").value;
  var n = +dom("numberN").value;
  // output:
  var Multi = 0;
  for (var i = 1; i <= n; i++) {
    Multi += Math.pow(x, i);
  };
  dom("footer2").innerHTML = "Multi: " + Multi;
}

// <!------- Hw3: nhập n tính giai thừa 1*2*...n--------->
// input: number
function number3() {
  // input: number
  var x = +dom("number").value;
  // output:
  var Multi = 1;
  for (var i = 1; i <= x; i++) {
    Multi *= i;
  };
  dom("footer3").innerHTML = "Giai Thừa: " + Multi;
}
// <!------- Hw4: click button in ra 10 thẻ div,div chẵn background đỏ, div lẻ bg xanh--------->
function number4() {
  // output:
  var inTheDiv = " ";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
      inTheDiv += i + "<div class='alert alert-danger'>Thẻ div</div>"
    } else {
      inTheDiv += i + "<div class='alert alert-info'>Thẻ div</div>"
    }
  };
  dom("footer4").innerHTML = inTheDiv;
}

// <!------- Hw5: nhập số vào input, ấn button thì hiện ra các số nguyên tố từ 1 tới giá trị ô input-------->

// ***CHƯA TÁCH HÀM****
// function number5() {
//   // input:
//   var numberInput = +dom("numberInput").value;
//   // output:
//   var ketQua = "";  
//   for (var i = 2; i <= numberInput; i++ ) {
//       //Phải đi ktra từng số
//       //Ktra i có phải là SNT hay k?
//       var checkSNT = true;
//       for(var j = 2; j <= Math.sqrt(i); j++){
//         if(i % j == 0){
//           checkSNT = false;
//           break;
//         }
//       }
//       if(checkSNT){
//         ketQua += i + " ";
//       }
//   };
//   dom("footer5").innerHTML = ketQua;
// }

// ****TÁCH HÀM:*****
function number5() {
  // input:
  var numberInput = +dom("numberInput").value;
  // output:
  var ketQua = ""; 
  for (var i = 2; i <= numberInput; i++) {
    // chạy qua từ 2 -> n kiểm tra từng số có phải SNT k như hàm đã viết riêng kiemTraSNT(number)
      var checkSNT = kiemTraSNT(i)
      if(checkSNT){
        ketQua += i + " ";
      }
  };
  dom("footer5").innerHTML = ketQua;
}
// Hàm kiểm tra phải số nguyên tố k
function kiemTraSNT(number){//input: number
  //output: true/false, nếu là SNT là true, k phải thì false
  var checkSNT = true;
  for(var j = 2; j <= Math.sqrt(number); j++){
    if(number % j === 0){
      checkSNT = false;
      break;
    }
  }
  return checkSNT;
}