import template from './header.html'

export default function () {
    let header = document.createElement('header')
    header.innerHTML = template
}
