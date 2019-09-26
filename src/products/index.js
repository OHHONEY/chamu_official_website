// import template from './erp.html'
import '../assets/index.css'
import './assets/index.css'
import initPage from './assets/js/initPage'

import header from '../assets/components/header.html'
import footer from '../assets/components/footer.html'

// 页面内容


let Header = document.getElementsByTagName('header')[0],
    Footer = document.getElementsByTagName('footer')[0],
    container = document.getElementById('site-page-content')

Header.innerHTML = header
Footer.innerHTML = footer

new initPage().mount(container)


