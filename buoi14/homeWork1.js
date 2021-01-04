//Date time//
//Bài 1 Hàm kiểm tra giá trị thời gian///
var d = new Date();

Date.prototype.isValid = function () {
    return this.getTime() == this.getTime()
}
d.isValid();

//Bai 2 hàm in ra thứ viết tắt//

 var date = new Date();
 var current_day = date.getDay();
 var day_name =" ";

let abbreviate = () => {
    switch(current_day) {
        case 0:
            day_name = "CN";
            break;
        case 1:
            day_name = "T2";
            break;
        case 2: 
            day_name = "T3";
            break;
        case 3:
            day_name = "T4";
            break;
        case 4:
            day_name = "T5";
            break;
        case 5:
            day_name = "T6";
            break;
        case 6:
            day_name = "T7";
    }
    return day_name;
}
abbreviate();

//Bài 3 hàm trả về ngày trước ngày hiện tại n ngày//
var  today = new Date()

Date.prototype.isDayback = function(n) {
    this.setDate(this.getDate()-n);
    return this.toDateString();
}    
today.isDayback(5);

//Bài 4 hàm trả về số ngày trong tháng bất kỳ, năm và tháng là tham số truyền vào//

let dayOfmonths = (year,month) => {
    return new Date(year,month,0).getDate();
}
dayOfmonths(2020,2);

//Bài 5 Viết hàm tính số giây hiện tại trong ngày//
let getCurrentSeconds = () => {
    return current_seconds = new Date().getTime()/1000;
}
getCurrentSeconds();

//Bài 6 Viết hàm tính số ngày còn lại đến tết dương lịch năm sau

function dayLeft () {
    var current_day = new Date();
    var newYear = new Date(current_day.getFullYear()+ 1,0,1);
    dayLeft = newYear - current_day;
    days = Math.floor(dayLeft/(24*60*60*1000))
    return days;
}
dayLeft();

//Bai 7 Viết hàm kiểm tra một ngày có phải cuối tuần hay không, ngày là tham số truyền vào//
let isWeekend = (date) => {
    var date = new Date(date);
    var day = date.getDay();
    if (day == 0 || day == 6)
    console.log(date + "is Weekend");
    else {
        console.log(date + " isn't weekend");
    }
}
isWeekend('2020/12/28');

//Bai 8 Viết hàm trả về số quý tương ứng với giá trị ngày tháng truyền vào (quý 1 -> 4)
let getQuarter = (date) => {
    var current_day= new Date(date);
    return Math.floor((current_day.getMonth() +3)/3);
}
getQuarter('2020/10/3');


//bai 9. Viết hàm tính tổng số ngày đã qua trong năm
function days (d) {
    var d = new Date();
    return Math.floor((new Date(d.getTime())-new Date(d.getFullYear(), 0, 1))/(24*60*60*1000));
  }
days();
//bai 10 Viết hàm tính tuổi theo ngày tháng truyền vào//
function calculate_age(birth_month,birth_day,birth_year)
{
    today_date = new Date();
    today_year = today_date.getFullYear();
    today_month = today_date.getMonth();
    today_day = today_date.getDate();
    age = today_year - birth_year;

    if ( today_month < (birth_month - 1))
    {
        age--;
    }
    if (((birth_month - 1) == today_month) && (today_day < birth_day))
    {
        age--;
    }
    return age;
}
calculate_age(10,9,1997);


//Bài tập về mảng//
//Bài 1  Viết hàm sắp xếp 1 mảng số nguyên
let numArray = [];
let sortInt = (numArray) => {
    numArray = numArray.sort((a,b) => a-b);
    return numArray;
}
sortInt([2,1,10]);

//Bài 2 viết hàm sắp xếp 1 mảng string//

let string = ["cat","dog","elephant","bee","ant"];
string.sort(function(a,b) {
        if (a>b) {
            return -1;
        }
        if (b<a){
            return 1;
        }
        return 0;
    });

//Bài 3 hàm sắp xếp mảng user tăng dần theo age//

let object_user = [
    {name:"Tom" ,age:2},
    {name:"Jerry", age:5},
    {name:"Boo", age:6},
    {name:"Key", age: 13},
];

object_user.sort((a,b) => a.age-b.age);
//Bai 4 hàm sắp xếp mảng theo name length//
object_user.sort((a,b) => a.name.length - b.name.length);

//Bài 5 sắp xếp mảng user theo name
object_user.sort((a,b) => {
    if (a.name < b.name)
    return 1;
    if (a.name > b.name)
    return -1;
    else {
        return 0
    }
})
//Bài 7 viết hàm lấy một phần tử ngẫu nhiên trong mảng//
var myArray = [1,2,3,4];
Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random()*this.length)]
}
myArray.randomElement();

//Bài 8//hàm sắp xếp mảng với vị trí ngẫu nhiên (xáo trộn mảng)
document.getElementById();

.box
