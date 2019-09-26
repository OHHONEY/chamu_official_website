import template from './cloud-clinic.html'
import router from '../../router/index'
import './style.css'

export default class {
    mount(container) {
        container.innerHTML = template
        router.start()
    }
}