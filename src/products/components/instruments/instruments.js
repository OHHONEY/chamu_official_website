import template from './instruments.html'
import switchTab from '../../assets/js/switchTab'

export default class {
    mount(container) {
        container.innerHTML = template
        let activeTab = document.querySelector('.activeTab'),
            tabInstruments = document.querySelector('#product-instruments')
        if (activeTab) activeTab.classList.remove('activeTab')
        if (tabInstruments) {
            tabInstruments.classList.add('activeTab')
            tabInstruments.addEventListener('click', () =>{
                switchTab('instruments')
            })
        }
    }
}