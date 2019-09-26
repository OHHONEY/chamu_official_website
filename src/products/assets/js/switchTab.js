// 医疗器械
import instruments from '../../components/instruments/instruments'
// 第三方物流
import logistics from '../../components/logistics/logistics'
// 仓储系统
import warehousing from '../../components/warehousing-system/warehousing-system'

export default function (pageKey) {

    // let viewPromise

    // switch (pageKey) {
    //     case 'instruments':
    //         viewPromise = import( /* webpackChunkName: "instruments" */ '../../components/instruments/instruments')
    //         break;
    //     case 'logistics':
    //         viewPromise = import( /* webpackChunkName: "logistics" */ '../../components/logistics/logistics')
    //         break
    //     case 'warehousing-system':
    //         viewPromise = import( /* webpackChunkName: "warehousing-system" */ '../../components/warehousing-system/warehousing-system')
    //         break
    //     default:
    //         viewPromise = import( /* webpackChunkName: "instruments" */ '../../components/instruments/instruments')
    //         break;
    // }

    const view = {
        'instruments': instruments,
        'logistics': logistics,
        'warehousing-system': warehousing,
    } [pageKey]
    // path路径错误
    view ? view : view = instruments
    new view().mount(document.getElementById('enterprise-system_content'))
    // viewPromise.then(module => {
    //     const view = new module.default()
    //     view.mount(document.getElementById('enterprise-system_content'))
    // })
}