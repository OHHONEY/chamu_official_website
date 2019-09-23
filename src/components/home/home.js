import template from './home.html'
import './home.css'
import router from '../../router/index'

export default class {
    mount(container) {
        container.innerHTML = template
        document.getElementById('erp_link').addEventListener('click', (event) =>{
            router.go('/erp')
        })
        document.getElementById('instruments_link').addEventListener('click', (event) =>{
            // router.go('/instruments')
            router.go('/erp', 'instruments')
        })
        document.getElementById('warehousing-system_link').addEventListener('click', (event) =>{
            // router.go('/warehousing-system')
            router.go('/erp', 'warehousing-system')
        })
        document.getElementById('logistics_link').addEventListener('click', (event) =>{
            // router.go('/logistics')
            router.go('/erp', 'logistics')
        })
        document.getElementById('cloud-clinic_link').addEventListener('click', (event) =>{
            router.go('/cloud-clinic')
        })
    }
}