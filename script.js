'use strict';

let init = ()=>{
  let photoArray =[
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg",
    "pic6.jpg",
    "pic7.jpg",
    "pic8.jpg",
    "pic9.jpg"
  ]
  let photoArrayMarker = 0;
  let rotation = 0
  let clearVal=1;
  let vid = document.getElementsByTagName('video')[0];
  // vid.playbackRate = 1;
  let circle = document.getElementsByClassName('circle')[0];
  let translucency = document.getElementsByTagName('input')[0];
  translucency.addEventListener('change',activateClear)
  let cube = document.getElementById('cube');
  cube.addEventListener('click', removeFace)
  let faces = document.getElementsByClassName('face');
  let order = 0;
  let picFaces = [faces[2],faces[4],faces[0],faces[3]];
  console.log(typeof faces)
 
  let buttons = document.getElementsByClassName('btn');
  buttons[0].addEventListener('click', leftBtn);
  buttons[1].addEventListener('click', rightBtn);

  // for(let i=0, l=faces.length;i<l;i++){

  // }
  function leftBtn(){
    // order = order > 2 ? 0 : order +1;
     order = order < 1 ? 3 : order -1;
    photoArrayMarker = photoArrayMarker >= photoArray.length-1 ? 0 :photoArrayMarker+1;
    console.log(order);
    rotation = rotation - 90;
    cube.style.transform = "rotate3d(0,1,0,"+ rotation+"deg)"
    circle.style.transform = "translate3d(75px,90px,0) rotate3d(0,1,0,"+(-rotation)+"deg)"
    picFaces[order].style.backgroundImage = "url('pics/" + photoArray[photoArrayMarker]+ "')";

  }
  function rightBtn(){
    // order = order < 1 ? 3 : order -1;
    order = order > 2 ? 0 : order +1;
    photoArrayMarker = photoArrayMarker <= 0 ? photoArray.length-1 :photoArrayMarker-1;
    // console.log(picFaces[1]);
    rotation = rotation + 90;
    cube.style.transform = "rotate3d(0,1,0,"+ rotation+"deg)"
    circle.style.transform = "translate3d(75px,90px,0) rotate3d(0,1,0,"+(-rotation)+"deg)"
    picFaces[order].style.backgroundImage = "url('pics/" + photoArray[photoArrayMarker]+ "')";
  }
  function activateClear(){
    
    clearVal =  document.getElementsByTagName("input")[0].value
    console.log(clearVal)
    for(let i = 0,l = faces.length; i<l;i++ ){
      faces[i].style.opacity = clearVal;
    }

  }

  function removeFace(event){
    console.log(event.target.style.opacity)
    event.target.style.opacity = event.target.style.opacity === '0' ? clearVal : '0';
    // event.target.style.opacity = 0;
  }
}



window.onload = init;