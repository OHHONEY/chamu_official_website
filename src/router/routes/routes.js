/**
 * 控制载入页面主要内容
 * 首页、关于我们、医疗管理ERF、云诊所、医疗器械、仓储系统、第三方物流、新闻资讯
 */
import erp from '../../components/erp/erp'
import about from '../../components/about/about'
import home from '../../components/home/home'
import instruments from '../../components/instruments/instruments'
import cloudClinic from '../../components/cloud-clinic/cloud-clinic'
import logistics from '../../components/logistics/logistics'
import warehousing from '../../components/warehousing-system/warehousing-system'
import news from '../../components/news/news'

export default {
    '/about': about,
    '/home': home,
    '/erp': erp,
    '/instruments': instruments,
    '/cloud-clinic': cloudClinic,
    '/logistics': logistics,
    '/warehousing-system': warehousing,
    '/about/news': news
}