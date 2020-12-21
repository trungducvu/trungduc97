/* Tính và in ra bảng cửu chương */
function table() {
    document.writeln("\n_________Bang cuu chuong\n");

    for (i = 1; i <= 5; i++) {
        for (j = 0; j <= 10; j++) {
            document.writeln(`${i} x ${j}=`, i * j + "</br>");
        }
    }
    for (i = 6; i <= 10; i++) {
        for (j = 0; j <= 10; j++) {
            document.writeln(`${i} x ${j}=`, i * j + "</br>");
        }
    }
}
table();



// Bài 2//

function homeWork2() {
    for (i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            document.writeln("BizzFuzz", i + "</br>");
        } if (i % 5 == 0) {
            document.writeln("Buzz", i + "</br>");
        } if (i % 3 == 0) {
            document.writeln("Fizz", i + "</br>");
        }
    }
}
homeWork2();

//Bai 3 //
function tong_boi_chung() {
    let sum = 0;
    for (i = 0; i <= 1000; i += 15) {
        sum += i;
    }
    document.writeln("Tổng bội chung  của 3 và 5 là:", sum + "</br>");
}
tong_boi_chung();
//Bai 4//

function kiem_tra_so_nguyen_to(n) {
    var flag = true;
    if (n < 2) {
        flag = false;
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }

    if (flag == true) {
        document.writeln(n + "là số nguyên tố" + "</br>");
    }
    else {
        document.writeln(n + "không phải là số nguyên tố " + "</br>");
    }
}
kiem_tra_so_nguyen_to(n);

//bai 5//

function kiem_tra_so_nguyen_to() {
    for (var i = 2; i <= 999; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0)
                break;
            else if (i == j + 1) {
                document.write(i + "là số nguyên tố trong khoảng từ 0 đến 1000" + "</br>")
            }
        }
    }
}

kiem_tra_so_nguyen_to();

//bai 6//

function kiem_tra_so_nguyen_to(a, b) {
    for (i = a + 1; i <= b; i++) {
        for (j = 2; j < i; j++) {
            if (i % j == 0)
                break;
            else if (i == j + 1) {
                document.write(i + "là số nguyên tố " + "</br>")
            }
        }
    }
}
kiem_tra_so_nguyen_to(2, 6);

//bai 7//
function table() {
    document.writeln("\n_________Bang cuu chuong\n");

    for (i = 10; i <= 1; i++) {
        for (j = 0; j <= 10; j++) {
            document.writeln(`${i} x ${j}=`, i * j + "</br>");
        }
    }
}
table();


//Bai 8//

function digitNumber(n) {
    var last_digit = n % 10;
    let first_digit = n;
    while (n >= 10) {
        first_digit = n % 10; //e không biết sai ở đâu luôn >.< //
        n /= 10;
    }
    document.writeln("chữ số đầu là:", first_digit + "</br>")
    document.writeln("chữ số cuối là", last_digit + "</br>")
}
digitNumber(12345);

//In day so fibonacci//
