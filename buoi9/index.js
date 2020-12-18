/*Tìm số lớn nhất*/



let a = +prompt("Nhập số thứ nhất");
let b = +prompt("Nhập số thứ hai");
let c = +prompt("Nhập số thứ ba");
a = 
if ( a > b && a > c ) {
    console.log("Max =", a);
}
else if (b > a && b >c) {
    console.log("Max = ", b);
}
else  { console.log("Max =",c);
}


/* tìm số chia hết cho 5 và 11 */

let num = +prompt("Nhập số n");

if ( num % 5 == 0 && num % 11 == 0 ) {
    console.log(num + "chia hết cho 5 và 11");
}
else { console.log(num + "không chia hết cho 5 và 11")}


/* tìm năm nhuận */

let year = +prompt("Nhập số năm");

if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
{
    console.log( year + "là năm nhuận" );
}
else {
    console.log( year + "là năm không nhuận")
}


/* xác định ký tự thuộc alphabe không */

let character = prompt("Nhập ký tự");

if ((character >='a' && character <= 'z') || (character >= 'A' && character <='Z'))
 {
    console.log( character + "thuộc bảng ký tự alphabet");
}
else {console.log( character + "không thuộc bảng ký tự alphabet");
}

/*  xác định nguyên âm */

let ch = prompt("Nhập vào ký tự");

if (ch == 'u'|| ch =='e'||ch =='o'||ch == 'a'||ch =='i'|| ch == 'U' || ch =='E'|| ch=='O' || ch=='A' ||ch =='I') {

    console.log( ch + "là nguyên âm");
}
else  {
    console.log( ch + "là phụ âm");
}

/* kiểm tra chữ thường chữ hoa */


let char = prompt("Nhập vào ký tự");

if (char >= 'a' && char <= 'z') {
    console.log(char + "là chữ thường");
}
else if (char >= 'A' && char <= 'Z') {
    console.log(char + "là chữ in hoa");
}
else {
    console.log(char + "không phải là chữ cái");
}




/* Giai phuong trinh bậc 2 */

var a = +prompt("Nhập a");
var b = +prompt("Nhập b");
var c = +prompt("Nhập c");
delta = b*b - 4*a*c;

if (delta < 0) {
    console.log("Phương trình vô nghiệm");
}
else if (delta == 0) {
    var x1 = -b /(2*a);
    console.log(" Phương trình có 1 nghiệm",x1);
} 
else  {
    var x2 = ((-b + Math.sqrt(delta)) /(2*a));
    var x3 = ((-b - Math.sqrt(delta)) / (2*a));
    console.log("Phương trình có 2 nghiệm:","x1 là"+ x2, "x2 là" + x3);
    
}

/* quy đổi điểm chữ sang số */

var point = prompt("Nhập điểm");

if ( point >= 8.5 && point <= 10 ) {
    console.log("Điểm xếp hạng A");
}
else if (point >= 7.0 && point < 8.5) {
    console.log("Điểm xếp hạng B");
}

else if (point >= 5.5 && point < 7.0  ) {
    console.log("Điểm xếp hạng C");
}

else if (point >= 4.0 && point < 5.5) {
    console.log("Điểm xếp hạng D");
}

else { console.log("Điểm xếp hạng F");}


/*tính diện tích và chu vi hình chữ nhật */

let length = +prompt("Chiều dài hình chữ nhật");
let width = +prompt("Chiều rộng hình chữ nhật");

s = length * width;
p = 2 * (length + width)

console.log("Diện tích hình chữ nhật là"+ s, "Chu vi hình chữ nhật là" + p);

/*tính diện tích hình tròn */

let R = +prompt("Nhập bán kính hình tròn");

S =  (Math.pow(2*R,2)/4)* 3.14;
C =  2*R*3.14;

console.log("Diện tích hình tròn là"+ S,"Chu vi hình tròn là" + C);

/*Giai phuong trinh bac nhat */

var a = +prompt("Nhập số a");
var b = +prompt("Nhập số b");
x = -b/a;
console.log("Nghiệm của phương trình là"+ x);

/* Đổi đơn vị đo khoảng cách */
let cm  = +prompt("Nhập số đo cm");

mm = cm*10;
km = cm/ 100000;
m =  cm/100;

console.log("Số km tương ứng là" + km, "Số m tương ứng là"+ m, "Số mm tương ứng là" + mm);

/* Đổi đơn vị đo nhiệt độ */


let temp = +prompt("Nhập số độ C");

K = temp + 273.15;
F = (temp *1.8) +32;
console.log("Số độ K là" + K, "Số độ F là" + F);

/* Đổi phút ra giờ */

var m = +prompt("Nhập số phút");
 
minute = m % 60;
hour= (m - minute)/ 60;
console.log( hour+"giờ"+minute+"phút") 

















