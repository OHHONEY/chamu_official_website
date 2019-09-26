// import template from './erp.html'
import '../assets/index.css'
import './assets/index.css'
import writePage from '../assets/js/common/index'
import initPage from './assets/js/initPage'

// import header from '../assets/components/header.html'
// import footer from '../assets/components/footer.html'

// 页面内容

writePage()
// let Header = document.getElementsByTagName('header')[0],
//     Footer = document.getElementsByTagName('footer')[0],
let container = document.getElementById('site-page-content')

// Header.innerHTML = header
// Footer.innerHTML = footer

// document.querySelector('.site-header img').onclick = () =>{
//     location.pathname = '/index.html'
// }

new initPage().mount(container)