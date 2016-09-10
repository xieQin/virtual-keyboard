var app = document.getElementById('app')
var keyboard = document.getElementById('keyboard')
var input = document.getElementById('input')
var items = document.getElementsByClassName('item')
var add = ''
var isKeyboard = false

input.addEventListener('click', function(e) {
    if(!isKeyboard) {
        keyboard.className = 'keyboard-num' + ' fade-up'
        isKeyboard = true
        if(input.innerHTML.trim() === 'click to activate virtual keyboard') {
            input.innerHTML = ''
        }
    }
}, false)

app.addEventListener('click', function(e) {
    if(!isKeyboard) {
        return
    }
    var classname = e.srcElement.className
    if(/input/.test(classname) || /letter/.test(classname) || /num/.test(classname) || /item/.test(classname) || /keyboard-num/.test(classname)) {
        return
    }
    keyboard.className = 'keyboard-num' + ' fade-down'
    if(input.innerHTML.trim() === '') {
        input.innerHTML = 'click to activate virtual keyboard'
    }
    isKeyboard = false
}, false)

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(e) {
        if(/num/.test(e.srcElement.className)) {
            add = e.srcElement.innerHTML
            input.innerHTML += add
            return
        }
        if(/letter/.test(e.srcElement.className)) {
            add = e.srcElement.previousElementSibling.innerHTML
            input.innerHTML += add
            return
        }
        if(/item/.test(e.srcElement.className)) {
            if(e.srcElement.innerHTML) {
                if(e.srcElement.firstElementChild && /num/.test(e.srcElement.firstElementChild.className)) {
                    add = e.srcElement.firstElementChild.innerHTML
                    input.innerHTML += add
                    return
                }
                add = e.srcElement.innerHTML
                if( add === 'C') {
                    input.innerHTML = ''
                    return
                }
                input.innerHTML += add
                return
            }
            if(e.srcElement.firstElementChild && e.srcElement.firstElementChild.innerHTML) {
                add = e.srcElement.firstElementChild.innerHTML
                input.innerHTML += add
            }
        }
    }, false)
}

