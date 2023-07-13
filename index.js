const openButtons = document.querySelectorAll('#btn')
const answers = document.querySelectorAll('.answer')
const arrowImg = document.querySelectorAll('.img')
const questions = document.querySelectorAll('.bold')


const buttonArray = new Array(openButtons.length)


function display(e) {
    if(buttonArray[e] == 1) {
        answers[e].classList.add('answer')
        arrowImg[e].classList.remove('arrowImg')
        questions[e].classList.remove('boldText')
        buttonArray[e] = 0
    } else {
        answers[e].classList.remove('answer')
        arrowImg[e].classList.add('arrowImg')
        questions[e].classList.add('boldText')
        buttonArray[e] = 1
    }
} 

for(let i = 0; i < openButtons.length; i++) {
    buttonArray[i] = 0
    openButtons[i].addEventListener('click', function() {
        display(i)
    })
}