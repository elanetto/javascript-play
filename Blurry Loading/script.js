// Følger denne YouTube videoen:
// https://youtu.be/JkeyKeK3V24?si=Vx-dpACx9OHNQaK2

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)

function blurring() {
    load++

        if(load > 99) {
            clearInterval(int)
        }

        loadText.innerText = `${load}%`
        
        // use the 'scale' const, and in (), add the load variable.
        // the numbers after 'load' means: when the 'load' goes from 
        // 0 to 100, the opacity will also, in the same amount of time,
        // go from opacity 1 to opacity 0.
        // The 'load' gives us the time.
        loadText.style.opacity = scale(load, 0, 100, 1, 0)

        // Again, using load as the timer, and as load goes from
        // 0 to 100, we want the opacity yo go from 30px to 0px
        bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

    console.log(load)
}

// For Javascript jquery: map a range of numbers to another range of numbers:
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}