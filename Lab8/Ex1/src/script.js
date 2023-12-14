import { fromEvent, merge } from 'rxjs'

const firstBtn = document.getElementById('first')
const secondBtn = document.getElementById('second')
const thirdBtn = document.getElementById('third')

merge(
    fromEvent(firstBtn, 'click'),
    fromEvent(secondBtn, 'click'),
    fromEvent(thirdBtn, 'click')
).subscribe(() => {
    function rand() {
        return Math.floor(Math.random() * 256)
    }
    function set_background_color() {
        document.body.style.backgroundColor = 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')'
    }
    set_background_color()
})