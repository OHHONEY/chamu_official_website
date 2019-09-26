import './assets/index.css'

import writePage from './assets/js/common/index'
import home from './components/home/home'

// 载入页面只要内容
writePage()
new home().mount(document.getElementById('site-page-content'))