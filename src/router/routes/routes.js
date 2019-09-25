import home from '../../components/home/home'

/**
 * 控制载入页面主要内容
 * 首页、关于我们、医疗管理ERF、云诊所、医疗器械、仓储系统、第三方物流、新闻资讯
 */
// import erp from '../../components/erp/erp'
// import about from '../../components/about/about'
// import home from '../../components/home/home'
// import cloudClinic from '../../components/cloud-clinic/cloud-clinic'
// import news from '../../components/news/news'


export default (path) => {
    console.log(path)
    switch (path) {
        case '/home':
            return home
        case '/about':
            return import( /* webpackChunkName: "about" */ '../../components/about/about')
        case '/erp':
            return import( /* webpackChunkName: "erp" */ '../../components/erp/erp')
        case '/cloud-clinic':
            return import( /* webpackChunkName: "cloud-clinic" */ '../../components/cloud-clinic/cloud-clinic')
        case '/about/news':
            return import( /* webpackChunkName: "news" */ '../../components/news/news')
        default:
            return home
    }
}

// export default {
//     '/about': import(/* webpackPrefetch: true */ '../../components/about/about'),
//     '/home': home,
//     '/erp': import(/* webpackChunkName: "erp" */ '../../components/erp/erp').then(module =>{
//         console.log(module)
//     }),
//     '/cloud-clinic': cloudClinic,
//     '/about/news': news
// }