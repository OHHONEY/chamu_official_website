// 添加类名
function addClass(element, className) {
    if (!element || !className) return
    if (element.classList) element.classList.add(className)
    else if (element.className === className) return
    else element.className = className
}

function removeClass(element, className) {
    if (!element || !className) return
    if (element.classList) element.classList.remove(className)
    else if (element.className === className) element.classList = ''
}

export default {
    addClass: addClass,
    removeClass: removeClass
}