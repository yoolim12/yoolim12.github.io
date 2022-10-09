const body = document.querySelector('body');
const chgBackColor = document.querySelectorAll('.chgback');
const chgBackImg = document.querySelector('.chgback-image');
const chgFont = document.querySelectorAll('.chgfont');

const ImgList = ["backgroundImg1.jpeg", "backgroundImg2.jpeg", "backgroundImg3.png", "backgroundImg4.jpeg", "backgroundImg5.jpg"]
let iSave = -1;
function changeBackImg(){
    let i = Math.floor(Math.random() * ImgList.length);
    while(i === iSave){
        i = Math.floor(Math.random() * ImgList.length);
    }
    iSave = i;
    body.style.background = `center center / cover no-repeat url(img/${ImgList[i]})`;
}

chgBackColor.forEach(function(elem){
    elem.addEventListener("click", function(){
        body.style.background = elem.style.background;
    });
});

chgFont.forEach(function(elem){
    elem.addEventListener("click", function(){
        body.style.fontFamily = elem.style.fontFamily;
    });
});

chgBackImg.addEventListener("click", changeBackImg);