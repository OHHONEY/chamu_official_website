import template from './about.html'
import './style.css'

import newsData from '../../assets/data/newsList.json'
import setNewsList from './updateNews'
import initPagination from './pagination'

export default class {
    mount(container) {
        container.innerHTML = template
        //  获取数据,初次渲染前10条
        let newsList = newsData.news.slice(0, 10),
            length = newsData.news.length
        
        document.getElementById('about-news-list').appendChild(setNewsList(newsList))
        document.getElementById('pagination').appendChild(initPagination(Math.ceil(length/10)))
    }
}