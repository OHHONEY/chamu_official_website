import template from './logistics.html'

// 第三方物流
export default class {
    mount(container) {
        container.innerHTML = template
        let activeTab = document.querySelector('.activeTab'),
            tabLogistics = document.querySelector('#product-logistics')
        if (activeTab) activeTab.classList.remove('activeTab')
        if (tabLogistics) {
            tabLogistics.classList.add('activeTab')
        }
    }
}