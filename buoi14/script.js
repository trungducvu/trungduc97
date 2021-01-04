
// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
let text = document.getElementsByTagName("p");
let count = 0;
for(i = 0; i<text.length;i++){
    let numb = text[i].innerText.split(" ")
    for(j=0;j<numb.length;j++) {
        if(numb[j].length >8)
        count++;
    }
}
console.log(" Numbers of words of length greater than 8 are "+ count);

//2. Style cho các từ có độ dài lớn hơn 8 trong p1
let a = document.querySelectorAll(".p1");
for(let i = 0; i<a.length;i++) {
  a[i].style.background = "red";
}

//3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai 
let newText ="Anh ba đẹp trai";
let changeWords = document.getElementById("p2").childNodes.split(" ");
for(i = 0; i<changeWords.length;i++) 


