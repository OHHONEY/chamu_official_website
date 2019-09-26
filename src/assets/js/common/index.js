import header from './view/header'
import footer from './view/footer'

import menu from '../../images/menu.png'
import close from '../../images/close.png'

import ieConfig from '../ieConfig/index'

// 显示菜单
function showMenu() {
    const img = document.querySelector('.small-screen-nav img')
    img.src = close
    
    ieConfig.addClass(document.querySelector('.small-screen-nav nav'), 'visibleNav')
    // document.querySelector('.small-screen-nav nav').classList.add('visibleNav')

    // className
    img.removeEventListener('click', showMenu)
    img.addEventListener('click', hideMenu)
}

// 收起菜单
function hideMenu() {
    const img = document.querySelector('.small-screen-nav img')
    img.src = menu
    ieConfig.removeClass(document.querySelector('.small-screen-nav nav'), 'visibleNav')
    // document.querySelector('.small-screen-nav nav').classList.remove('visibleNav')

    img.removeEventListener('click', hideMenu)
    img.addEventListener('click', showMenu)
}
// 写入页面header和footer
export default function () {
    // 页面内容
    let Header = document.getElementsByTagName('header')[0],
        Footer = document.getElementsByTagName('footer')[0]

    new header().mount(Header)
    new footer().mount(Footer)

    const img = document.querySelector('.small-screen-nav img')
    if (img && img.addEventListener) img.addEventListener('click', showMenu) 
    else {
        // IE 
    }
}