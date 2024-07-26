const progress = document.querySelector(".progress-bar")
let finalValue = 50;

function changeWidth(){
    progress.style.width = `${(finalValue)}%`
    progress.innerText = `${Math.ceil(finalValue  ) }%`
}

changeWidth();