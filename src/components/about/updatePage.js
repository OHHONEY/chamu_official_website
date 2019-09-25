// 查询数据
import newsData from '../../assets/data/newsList.json'
import updateNewsList from './updateNews'

export default function (page) {
    // page 1: 0~10 10 ~ 20 20 ~ 30
    updateNewsList(newsData.news.slice((page - 1) * 10, (page * 10)))
}