const sliders = document.querySelectorAll("#img-slide");
const nextbtn = document.querySelector("#next");
const previousbtn = document.querySelector("#previous");
let currentInd = 0;

nextbtn.addEventListener("click", () => {
  currentInd = (currentInd + 1) % sliders.length;
  console.log(currentInd);
  sliders[currentInd].parentElement.style.transform = `translateX(${
    -currentInd * 100
  }%)`;
});

previousbtn.addEventListener("click", () => {
  
  currentInd = (currentInd - 1 + sliders.length) % sliders.length;
  console.log(currentInd);
  sliders[currentInd].parentElement.style.transform = `translateX(${
    -currentInd * 100
  }%)`;
});
