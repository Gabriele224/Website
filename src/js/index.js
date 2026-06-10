window.addEventListener("load", imgLoaded2);

function imgLoaded2() {

  const sliderContainer2 = document.querySelector(".slider2");
  sliderContainer2.addEventListener("click", slider2)
}

function slider2() {
  /*document.querySelector(".visible").style.left = "-100%";
  document.querySelector(".next").style.left = "0";*/

  /*1)*/
  let imgVisible = document.querySelector(".visible2");
  imgVisible.classList.remove("visible2");

  /*2)*/
  let imgNext = document.querySelector(".next2");
  imgNext.classList.replace("next2", "visible2");

  /*3)*/
  let imgNextVisible = document.querySelector(".visible2 + img");

  if (imgNextVisible !== null){
    imgNextVisible.classList.add("next2");
  } else{
    let firstImg = document.querySelector(".slider2 img:first-of-type");
    firstImg.classList.add("next2");
  }
}

window.addEventListener("load", imgLoaded3);

function imgLoaded3() {

  const sliderContainer3 = document.querySelector(".slider3");
  sliderContainer3.addEventListener("click", slider3)
}

function slider3() {
  /*document.querySelector(".visible").style.left = "-100%";
  document.querySelector(".next").style.left = "0";*/

  /*1)*/
  let imgVisible = document.querySelector(".visible3");
  imgVisible.classList.remove("visible3");

  /*2)*/
  let imgNext = document.querySelector(".next3");
  imgNext.classList.replace("next3", "visible3");

  /*3)*/
  let imgNextVisible = document.querySelector(".visible3 + img");

  if (imgNextVisible !== null){
    imgNextVisible.classList.add("next3");
  } else{
    let firstImg = document.querySelector(".slider3 img:first-of-type");
    firstImg.classList.add("next3");
  }
}

window.addEventListener("load", imgLoaded4);

function imgLoaded4() {

  const sliderContainer4 = document.querySelector(".slider4");
  sliderContainer4.addEventListener("click", slider4)
}

function slider4() {
  /*document.querySelector(".visible").style.left = "-100%";
  document.querySelector(".next").style.left = "0";*/

  /*1)*/
  let imgVisible = document.querySelector(".visible4");
  imgVisible.classList.remove("visible4");

  /*2)*/
  let imgNext = document.querySelector(".next4");
  imgNext.classList.replace("next4", "visible4");

  /*3)*/
  let imgNextVisible = document.querySelector(".visible4 + img");

  if (imgNextVisible !== null){
    imgNextVisible.classList.add("next4");
  } else{
    let firstImg = document.querySelector(".slider4 img:first-of-type");
    firstImg.classList.add("next4");
  }
}