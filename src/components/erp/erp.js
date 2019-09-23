import template from './erp.html'
import './assets/index.css'

import switchTab from './switchTab'
// // 医疗器械
// import instruments from '../instruments/instruments'
// // 第三方物流
// import logistics from '../logistics/logistics'
// // 仓储系统
// import warehousing from '../warehousing-system/warehousing-system'



export default class {
    mount(container, pageKey) {
        container.innerHTML = template

        let search = decodeURIComponent(location.search)
        if (search) pageKey = search.split('=')[1]
        else pageKey = 'instruments'

        switchTab(pageKey)

        document.querySelector('#product-instruments').addEventListener('click', () =>{
            switchTab('instruments')
        })

        document.querySelector('#product-warehousing').addEventListener('click', () =>{
            switchTab('warehousing-system')
        })

        document.querySelector('#product-logistics').addEventListener('click', () =>{
            switchTab('logistics')
        })

        
        // pageKey = pageKey ? pageKey : 'instruments'

        // let content = {
        //     'instruments': instruments,
        //     'logistics': logistics,
        //     'warehousing-system': warehousing,
        // }
        // const view = new content[pageKey]()
        // view.mount(document.getElementById('enterprise-system_content'))
    }
}