let slider = document.querySelector('.slider');
let slider2 = document.querySelector('.slider2');
let lefticon = document.querySelector('.lefticon');
let lefticon2 = document.querySelector('.lefticon2')

function left1(){

slider.classList.toggle("ok")

lefticon.classList.toggle('ok4')

}

function left2(){
    slider2.classList.toggle("ok")
    lefticon2.classList.toggle('ok4')
}

let linksbox1 = document.querySelectorAll('.linkb');

linksbox1.forEach( (el)=>{

  el.addEventListener('click',()=>{
    el.classList.toggle('ok2')
  })

})

let til = document.querySelector('.til');
let down = document.querySelector('.fa-angle-down');



function uzb(){
    til.classList.toggle('ok3')


    down.classList.toggle('ok4')
}
