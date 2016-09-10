var keyboard = document.getElementById('keyboard')
var input = document.getElementById('input')
var items = document.getElementsByClassName('item')
var add = ''

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

