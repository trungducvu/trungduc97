//Bài tập về chuỗi//

//Bài 1//
let changeCapitalize = (string) => {
    let newStr = string.toLowerCase().split(' ');
   for (let i = 0; i < newStr.length; i++) {
      
      newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);     
   }
   return newStr.join(' ');
}
changeCapitalize("hello world ");
//Bai2//

let changeParamaterize = (string) => {
    let newStr = string.split(' ');
    for (let i = 0; i< newStr.length; i++) {
        newStr[i] = newStr[i].toLowerCase();
    }
    return newStr.join('-');
   
}
changeParamaterize("Hello World");

//bai 3//

let removeSpace = (string) => {
    let newStr = " ";
    for(let i = 0; i< string.length; i++) {
        newStr = string.replace(/\s+/g," ").trim();
    }
    return newStr;
    }

removeSpace(" Hello   world  !");

//bai4//
let invertCase = (string) => {
    let newStr = " ";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == string[i].toUpperCase())
        newStr += string[i].toLowerCase();
        else 
        { 
        newStr += string[i].toUpperCase();
    }
    }
    return newStr;
}
invertCase("aBcD");

//bai 5 //

let iterateString = (string,times) => {
    let newStr = " ";
    while(times>0) {
        newStr += string;
        times--;
    }
    return newStr;

}

iterateString("Hehe",3);

//bai 6//
let insertString = (string1,string2, index) => {
    let newStr = "";
    return newStr =string1.slice(0, index) + string2 +string1.slice(index);

}
insertString("ac","b",1);


//bai 7//
let reduceString = (string,index) => {
    let newStr ="";
    if (string.length > index) {
        return newStr = string.substring(0,index)+ "....";
    }
}

reduceString("abcdef",2);

//bai 8//
let countString = (string1,string2) => {
    let count = 0;
    for(i = 0; i <string1.length;i++) {
        if (string1.charAt(i) == string2) {
            count++;
        }       
    }
    return count;

}
countString("abca","a");

//Bai 9//
let cutString = (string,index) => {
    let newStr = string.split(' ');
    for(let i=0;i< newStr.length;i++) {
        if(i == index) {
            newStr = newStr.slice(0,index);
        }  
    }
    return newStr.join(' ');  
}
cutString("My name is Duc",2);

//Bai 10//
let generateGUID = () => {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
}
generateGUID();

//bai 11//
let replaceUnicode = (string) => {
    let newStr =" ";
    for(i = 0;i<string.length;i++) {
        newStr += String.fromCharCode(string.charCodeAt()+1);
        
    }
    return newStr;
}
replaceUnicode("ad");

// Array methods//
//1. push


Ex:
var arr = ["dog", "cat", "chicken"];

arr.push("monkey"); 

console.log(arr); // ["dog", "cat", "chicken", "monkey"] (thay đổi mảng đầu tiên)

//2. pop

Ex:
var arr = ["a", "b", "c", "d"];

console.log(arr.pop()); // Loại bỏ phần tử cuối của mảng là d

console.log(arr); // ["a", "b", "c"] //in ra arr mới

//3.concat
Ex:
var arr1 = [1, 2]; //mảng được gọi//

var arr2 = [3, 4]; //mảng tham gia làm tham số

console.log(arr1.concat(arr2)); // [1,2,3,4]  //nối 2 mảng với nhau

console.log(arr1); // [1, 2] //phương thức ko làm thay đổi phần tử trong các mảng được nối

console.log(arr2); // [3, 4]

//4.join
Ex:
var arr = ['cold', 'cool', 'freeze'];//join tạo ra chuỗi mới bằng cách nối các phần tử của mảng bởi dấu phẩy hoặc chuỗi ký tự xác định
arr.join();      // 'cold,cool,freeze'  
arr.join(', ');  // 'cold,cool,freeze'
arr.join(' + '); // 'cold+cool+freeze'
arr.join('');    // 'coldcoolfreeze'

//5.Shift


Ex:
var arr = ["a", "b", "c"]; //tiến hành xóa phần tử đầu tiên trong mảng

console.log(arr.shift()); // a (trả về phần tự bị xoá)

console.log(arr); // ["b", "c"] (thay đổi giá trị của mảng "arr")

//6.Shift


var arr = ["a", "b", "c"]; //tiến hành thêm phần tử vào vị trí đầu tiên của mảng

console.log(arr.unshift("d")); // 4 (trả về tống số phần tử của mảng "arr" sau khi thêm phần tử d)

console.log(arr); // ["d", "a", "b", "c"]  (mảng "arr" bị thay đổi)

//7.Slice

Ex:
var arr = ["a", "b", "c","d","e"]; //tiến hành cắt 1 mảng con ra từ mảng đầu

console.log(arr.slice(1,3)); // ["b","c" // kết quả trả về ko bao gồm index kết thúc

console.log(arr); // ["a", "b", "c","d","e"] //slice ko làm thay đổi mảng ban đầu.

//8.splice
Ex:
var arr = ["a", "b", "c"];

console.log(arr.splice(1,2)); // ["b", "c"] (trả về mảng bị xoá gồm 2 phần tử "b" và "c")

console.log(arr); // ["a"] (thay đổi mảng đầu tiên)

var sports = ["soccer", "football", "badminton"];

console.log(sports.splice(1,0,"hockey")); // [] (không phần tử nào bị xoá)

console.log(sports); // ["soccer", "football", "badminton","hockey"]  (thêm phần tử "hockey" vào mảng)

//9.reverse.
Ex:
var arr = ["a", "b", "c", "d"];

console.log(arr.reverse()); // ["d", "c", "b", "a"] (Trả về mảng đã đảo ngược phần tử)

console.log(arr); // ["d", "c", "b", "a"] (Làm thay dổi mảng ban đầu)

//10. sort
Ex:
var arr = ["d", "b", "c", "a"];

console.log(arr.sort()); // ["a", "b", "c", "d"] (trả về mảng đã được sắp xếp)

console.log(arr); // ["a", "b", "c", "d"] (thay đổi mảng ban đầu)