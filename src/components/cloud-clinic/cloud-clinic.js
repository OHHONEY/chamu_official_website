import template from './cloud-clinic.html'
import './style.css'

export default class {
    mount(container) {
        container.innerHTML = template
    }
}