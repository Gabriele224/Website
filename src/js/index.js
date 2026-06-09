window.addEventListener("load", imgLoaded);

function imgLoaded() {
  const sliderContainer = document.querySelector(".slider");
  sliderContainer.addEventListener("click", slider);
}

function slider() {
  /*document.querySelector(".visible").style.left = "-100%";
  document.querySelector(".next").style.left = "0";*/

  /*1)*/
  let imgVisible = document.querySelector(".visible");
  imgVisible.classList.remove("visible");

  /*2)*/
  let imgNext = document.querySelector(".next");
  imgNext.classList.replace("next", "visible");

  /*3)*/
  let imgNextVisible = document.querySelector(".visible + img");

  if (imgNextVisible !== null){
    imgNextVisible.classList.add("next");
  } else{
    let firstImg = document.querySelector(".slider img:first-of-type");
    firstImg.classList.add("next");
  }
}


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