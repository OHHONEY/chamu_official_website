// import template from './erp.html'
import '../assets/index.css'
import './assets/index.css'

import writePage from '../assets/js/common/index'
// import header from '../assets/components/header.html'
// import footer from '../assets/components/footer.html'
import Page from './assets/Page'

// let Header = document.getElementsByTagName('header')[0],
//     Footer = document.getElementsByTagName('footer')[0]

// Header.innerHTML = header
// Footer.innerHTML = footer
writePage()
new Page().mount(document.getElementById('site-page-content'))