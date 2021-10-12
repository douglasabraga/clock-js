let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

const updateClock = () => {
    const now = new Date()
    const hour = now.getHours()
    const minute = now.getMinutes()
    const second = now.getSeconds()

    digitalElement.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(updateClock, 1000)