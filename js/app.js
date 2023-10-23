let incrementBtn = document.querySelector('.cart .increment');
let result = document.querySelector('.cart .result')
 
function incrementing () {
    // console.log( Number(result.value) + 1);
    result.value = Number(result.value) + 1
}
incrementBtn.addEventListener('click', incrementing)

// dicrement

let decrementBtn = document.querySelector('.cart .decrement')

function decrementing () {

    if (result.value > 0) {
        result.value = Number(result.value) - 1
    }
}
decrementBtn.addEventListener('click' , decrementing)

//reset
let resetBtn = document.querySelector('.cart .reset');

function reseting () {
    if (result.value > 0) {
    result.value = Number(result.value) == 0
    }
}

resetBtn.addEventListener('click' ,  reseting)



//range slider start

let rangeSlider = document.querySelector('.range')
let output = document.querySelector('.ranger span')

rangeSlider.addEventListener('input',  () => {
     output.innerHTML = rangeSlider.value
})

//changing color

let randomBtn = document.querySelector('.useMe')
let changingColor = document.querySelector('#changingColor')

randomBtn.addEventListener('click' , () => {
    // console.log(Math.round(Math. random() * 255))
    const red = Math.round(Math. random() * 255);
    const green = Math.round(Math. random() * 255);
    const blue = Math.round(Math. random() * 255);

   changingColor.style.backgroundColor = `rgb(${red} , ${green} , ${blue})`

})

//password

let passwordBtn = document.querySelector('.passwordBtn')
let userPass = document.querySelector('.userPass')

passwordBtn.addEventListener('click' , () => {
 
    if (userPass.type == 'password') {
           userPass.type = 'Text';
           passwordBtn.innerHTML = '<i class="bi bi-eye"></i>'
    }else{
        userPass.type = 'password';
        passwordBtn.innerHTML = '<i class="bi bi-eye-slash"></i>'

    }
})