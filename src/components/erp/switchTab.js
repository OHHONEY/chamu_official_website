// 医疗器械
import instruments from '../instruments/instruments'
// 第三方物流
import logistics from '../logistics/logistics'
// 仓储系统
import warehousing from '../warehousing-system/warehousing-system'

export default function (pageKey) {

    pageKey = pageKey ? pageKey : 'instruments'

    let content = {
        'instruments': instruments,
        'logistics': logistics,
        'warehousing-system': warehousing,
    }
    const view = new content[pageKey]()
    view.mount(document.getElementById('enterprise-system_content'))
}