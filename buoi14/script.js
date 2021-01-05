
// 1. Đếm xem có tất cả bao nhiêu từ trong 2 đoạn văn có độ dài lớn hơn 8
let text = document.getElementsByTagName("p");
let count = 0;
for (i = 0; i < text.length; i++) {
    let numb = text[i].innerText.split(" ")
    for (j = 0; j < numb.length; j++) {
        if (numb[j].length > 8)
            count++;
    }
}
console.log(" Numbers of words of length greater than 8 are " + count);

//2. Style cho các từ có độ dài lớn hơn 8 trong p1
let text1 = document.getElementsByClassName("p1")[0];
let newText = document.getElementsByClassName("p1")[0].innerText.split(" ");
for (i = 0; i < newText.length; i++) {
    if (newText[i].length > 8)
        newText[i] = `<span style = "color:red">${newText[i]}</span>`
}
text1.innerHTML = newText.join(" ");

//3. Thay thế các từ có độ nhỏ hơn 8 trong p2 thành "Anh Ba đẹp trai "

let text2 = document.getElementById("p2");
let newText1 = text2.innerText.split(" ");
for (i = 0; i < newText1.length; i++) {
    if (newText1[i].length < 8)
        newText1[i] = `<span >Anh Ba đẹp trai 🤣</span>`
}
text2.innerHTML = newText1.join(" ");

//4. Thêm src, alt, href cho ảnh, link
let newImage = document.getElementsByTagName("img")[0];
newImage.src = "https://kenh14cdn.com/thumb_w/660/2020/10/12/1214995771170419900154141710540812412037125n-16025150138792085556731.jpg"
newImage.alt = "girl";
//5. Thêm background cho các ô ngẫu nhiên trong bảng (mỗi hàng 1 ô, style bằng .style.backgroundColor), và thay đổi nội dung trong các ô đó thành "😍 Mr. Ba đẹp trai"

let rows = document.querySelector("table").rows;
for (i = 0; i < rows.length; i++) {
    let j = Math.floor(Math.random() * rows.length);
    rows[i].cells[j].style.background = "red";
    rows[i].cells[j].innerText = "😍 Mr. Ba đẹp trai";

}



