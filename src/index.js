import './assets/index.css'
// import router from './router/index'

import writePage from './assets/js/common/index'
import home from './components/home/home'

// import header from './assets/components/header.html'
// import footer from './assets/components/footer.html'

// let Header = document.getElementsByTagName('header')[0],
//     Footer = document.getElementsByTagName('footer')[0]

// Header.innerHTML = header
// Footer.innerHTML = footer

// 载入页面只要内容
// router.start()
writePage()
new home().mount(document.getElementById('site-page-content'))