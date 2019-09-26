import template from './home.html'
import './home.css'
import router from '../../router/index'

export default class {
    mount(container) {
        container.innerHTML = template

        document.getElementById('cloud-clinic_link').addEventListener('click', (event) => {
            window.scrollTo(0, 0)
            router.skip('cloud-clinic')
        })
    }
}
