const percent = document.querySelector('.loading-text')
const image = document.querySelector('.bg')
let num;
// percent.innerText = '100%'
let i = 0
let b = 1
let c = 30



let int = setInterval(blurring, 20)

function blurring() {
    i++

    if (i === 100) {
        clearInterval(int)
    }
    percent.innerText = `${i}%`
    percent.style.opacity = scale(i, 0, 100, 1, 0)
    image.style.filter = `blur(${scale(i, 0, 100,30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}