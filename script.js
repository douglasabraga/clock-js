let digitalElement = document.querySelector('.digital')
let sElement = document.querySelector('.p_s')
let mElement = document.querySelector('.p_m')
let hElement = document.querySelector('.p_h')

const updateClock = () => {
    const now = new Date()
    const [hour, minute, second] = [now.getHours(), now.getMinutes(), now.getSeconds()]

    digitalElement.innerHTML = `${fixToZero(hour)}:${fixToZero(minute)}:${fixToZero(second)}`

    let sDeg = ((360 / 60) * second) - 90
    let mDeg = ((360 / 60) * minute) - 90
    let hDeg = ((360 / 12) * hour) - 90

    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

const fixToZero = (number) => number < 10 ? `0${number}` : number

setInterval(updateClock, 1000)
updateClock()