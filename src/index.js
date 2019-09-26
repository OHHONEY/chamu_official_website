import './assets/index.css'
// import router from './router/index'

import home from './components/home/home'

import header from './assets/components/header.html'
import footer from './assets/components/footer.html'

let Header = document.getElementsByTagName('header')[0],
    Footer = document.getElementsByTagName('footer')[0]

Header.innerHTML = header
Footer.innerHTML = footer

// document.querySelector('.site-header img').addEventListener('click', () =>{
//     router.go('/about')
// })

// document.getElementById('about-link').addEventListener('click', () =>{
//     router.go('/about')
// })

// document.querySelector('#products-link').addEventListener('click', () =>{
//     router.go('/erp')
// })

// document.querySelector('#home-link').addEventListener('click', () =>{
//     router.go('/')
// })
// 载入页面只要内容
// router.start()

new home().mount(document.getElementById('site-page-content'))