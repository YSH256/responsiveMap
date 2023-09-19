var toggleBtn = document.querySelector(".navbar-toggleBtn");
var menu = document.querySelector(".navbar-menu");
var icons = document.querySelector(".navbar-icons");

// toggle에 클릭이벤트 추가
toggleBtn.addEventListener("click",()=> {
    menu.classList.toggle("active");
    icons.classList.toggle("active");
});
// 화살표 함수 funtion(){} (=) () => 화살표함수