// Bai 1//
function random(a,b) { 
    r =  a + Math.random()*((b-a+1));
    console.log("Random number is",r);
}
random(2,9999);    //Hàm thường//

var random = (a,b) => {
    r =  a + Math.random()*((b-a+1));
    console.log("Random number is",r);

}
random (4,834838838384); //arrow function
    
//bai 2//
function isTriangle(a,b,c) {
    if (a<b+c && b<a+c && c<a+b)
    console.log("Đây là tam giác thường");
    else if (a==b && b==c && a==c)
    console.log("Đây là tam giác cân");
    else {console.log("Không phải là tam giác");
}
}
isTriangle(6,2,3);//Hàm thường//

var isTriangle = (a,b,c) => {
    if (a<b+c && b<a+c && c<a+b)
    console.log("Đây là tam giác thường");
    else if (a==b && b==c && a==c)
    console.log("Đây là tam giác cân");
    else {console.log("Không phải là tam giác");
}
}
isTriangle(5,7,5); //Arrow function//


//bai 3//


function guessNumber() {
    var a = Math.floor(Math.random()*11);
    console.log(a);
    var count =0,guess;
    do {
        var guess = prompt("Nhap số dự đoán");
        if (guess != a) {
            count++;
            console.log("Nhap lai.");
        }
        else {console.log("A MAY ZING,GUT CHOP");
    }
    }
    while(count<=2 && guess !=a);   
} 
guessNumber(); //Ham thuong)

var guessNumber = () => { 
    var a = Math.floor(Math.random()*11);
    console.log(a);
    var count = 0,guess;
    do {
        var guess = prompt("Nhap số dự đoán");
        if (guess != a) {
            count++;
            console.log("Nhap lai.");
        }
        else {console.log("A MAY ZING,GUT CHOP");
    }
    }
    while(count<=2 && guess !=a); 

}
guessNumber(); //arrow function//

//bai 4//
function nearest(a,b) {
    if (Math.abs(a-100) < Math.abs(b-100)) {
        console.log(`${a} gần với 100 nhất.`);      
    }
     else {console.log(`${b} gần với 100 nhất`)
}
}
nearest(89,180); //Hàm thường//

var nearest = (a,b) => {
    if (Math.abs(a-100) < Math.abs(b-100)) {
        console.log(`${a} gần với 100 nhất.`);      
    }
     else {console.log(`${b} gần với 100 nhất`)
}
}

nearest(44,2929);//arrow function//


//bai 5//

function sequence (a,b,c) {
    if (a<=b && b<=c)
    { console.log("The sequence is increasing.");
}
    else if (a>=b &&b>=c) {
        console.log("The sequence is decreasing.");
    }
    else {
        console.log("Neither increasing nor decreasing.")
    }
}
sequence (1,2,3); //hàm thường//

var sequence = (a,b,c) => {
    if (a<=b && b<=c)
    { console.log("The sequence is increasing.");
}
    else if (a>=b &&b>=c) {
        console.log("The sequence is decreasing.");
    }
    else {
        console.log("Neither increasing nor decreasing.")
    }
}
sequence (3,555,4); //arrow function//

//Bai 6//
function countDecimal(number) {
var a = number.toString();
var t = a.substr(a.indexOf(".")+1);
console.log("Số chữ số thập phân là",t.length);
}
countDecimal(12.434444555); //ham thường //

var countDecimal = (number) => {
var a = number.toString();
var t = a.substr(a.indexOf(".")+1);
console.log("Số chữ số thập phân là",t.length);
}
countDecimal(2.483843848384); //arrow function//
//bai 7//

function isAscending(number) {
    var n = number, tMax = n % 10;
    n/=10;
    while(n > 0) {
        t = n % 10;
        if (t > tMax) 
        return false;
        else (t == tMax);
        n/=10;
    }
    return true;
}
isAscending(123); //Hàm thường//

var isAscending = (number) {
    var n = number, tMax = n % 10;
    n/=10;
    while(n > 0) {
        t = n % 10;
        if (t > tMax) 
        return false;
        else (t == tMax);
        n/=10;
    }
    return true;
}

isAscending(7272); //arrow function//



//bai8//
function countEven(number) {
    var n=number,count = 0;
    while(n !=0) {
        var numb = n % 10;       
        n /=10;
        n= Math.floor(n);
        if (numb % 2 == 0)
        count++;
    }
    console.log(`Số chữ số chẵn của ${number} là ${count}`);
}
countEven(16778); //Ham thuong//

var countEven = (number) => {
    var n=number,count = 0;
    while(n !=0) {
        var numb = n % 10;       
        n /=10;
        n= Math.floor(n);
        if (numb % 2 == 0)
        count++;
    }
    console.log(`Số chữ số chẵn của ${number} là ${count}`);
}
countEven(2344); //arrow function//



//bai 9//
function find(number) {
    var sum = 0,a=number;
    count =0;
    var n;
    
    for (i=1; i<=n;i++) {
        if (sum<=a)
        count ++;
        sum +=i;
        n = ((sum/count)*2)-1;
    }
    return n; // sao lai  undefined thay oi ?//
}
find(7);

//Bai 10//
function sum(value1,unit1,value2,unit2) {
} //;0//