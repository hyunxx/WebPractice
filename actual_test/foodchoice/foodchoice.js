//랜덤버튼
//1.랜덤버튼을 누르먄
// 2. item 클래스를 가져와서
// 3. 랜덤으로 하나를 선택한다
// 4. 선택된 클래스의 이미지를 화면에 출력한다.
// 화면 출력
// 1. 메인을 가져온다
// 2. 메인에 이미지 태그를 넣는다
// 3. 이미지 src를 선택된 클래스의 이미지 src로 바꾼다.

// 누르면 화면에 출력
// 1. 이미지를 클릭하면
// 2. 클릭한 이미지를 선택하여
// 3. 화면에 출력한다

let clickbtn = document.getElementById('clickbtn');
    clickbtn.onclick = function() {
   let get_item = document.querySelectorAll('.item');
        let number = Math.round(Math.random()*3);
        };
       

// let click_img = document.querySelectorAll('.item');
// click_img.onclick = function() {
//     click_img.forEach(index => console.log(index));
//}

let PrintImg = function(v,idx) {
    let  get_main = document.querySelector('mainimg'); 
    let plus_img = document.createElement("img ");
   document.get_main.appendChild(img);
   let imgsrc =
   
 };