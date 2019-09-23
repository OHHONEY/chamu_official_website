import router from '../../router/index'

export default function (newsList) {
    // 根据新闻数据创建ul
    let ul = document.createElement('ul')
    for (let i = 0; i < newsList.length; i++) {
        let li = document.createElement('li'),
            h5 = document.createElement('h5'),
            p = document.createElement('p'),
            dateP = document.createElement('p')
        h5.innerText = newsList[i].title
        p.innerText = newsList[i].content
        dateP.innerText = newsList[i].date
        li.appendChild(h5)
        li.appendChild(p)
        li.appendChild(dateP)
        li.addEventListener('click', () =>{
            router.go('/about/news', newsList[i].title)
        })
        ul.appendChild(li)
    }

    return ul
}