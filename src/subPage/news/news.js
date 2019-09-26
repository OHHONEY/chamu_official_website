import template from './news.html'
import newsContentList from '../../assets/data/news.json'
import initNews from './initNews'
import './style.css'
import router from '../../router/index'

export default class {
    mount(container) {
        // console.log(location.search)
        container.innerHTML = template
        router.start()

        let newsList = newsContentList.newsList,
            title = decodeURIComponent(location.hash).split('=')[1],
            content = ''

        document.querySelector('.news-title > h6').innerHTML = title
        for (let i = 0; i < newsList.length; i++) {
            if (title === newsList[i].title) content = newsList[i].graphicContent
        }

        document.getElementById('news-content').appendChild(initNews(content))
    }
}