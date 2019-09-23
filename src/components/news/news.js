import template from './news.html'
import newsContentList from '../../assets/data/news.json'
import initNews from './initNews'
import './style.css'

export default class {
    mount(container) {
        // console.log(location.search)
        // ?title=%E4%BB%8E%E6%B1%BD%E8%BD%A6%E8%B7%A8%E7%95%8C%E5%88%B0%E8%BD%AF%E4%BB%B6%20%E5%85%A8%E5%9B%BD%E9%A6%96%E5%AE%B6%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8%E4%B8%8A%E5%B8%82%E4%BC%81%E4%B8%9A%E8%AF%9E%E7%94%9F%E8%AE%B0
        container.innerHTML = template

        let newsList = newsContentList.newsList,
            title = decodeURIComponent(location.search).split('=')[1],
            content = '';
        for (let i = 0; i < newsList.length; i++) {
            console.log(title)
            if (title === newsList[i].title) content = newsList[i].graphicContent
            console.log(content)
        }

        document.getElementById('news-content').appendChild(initNews(content))
    }
}