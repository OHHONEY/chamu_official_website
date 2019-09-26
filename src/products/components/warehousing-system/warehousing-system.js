import template from './warehousing-system.html'

export default class {
    mount(container) {
        container.innerHTML = template
        let activeTab = document.querySelector('.activeTab'),
            tabWarehousing = document.querySelector('#product-warehousing')
        if (activeTab) activeTab.classList.remove('activeTab')
        if (tabWarehousing) tabWarehousing.classList.add('activeTab')
    }
}