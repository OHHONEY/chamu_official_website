import router from '../../../router/index'

function initNewsList(newsList) {
    let ul = document.createElement('ul')
    for (let i = 0; i < newsList.length; i++) {
        let li = document.createElement('li'),
            h5 = document.createElement('h5'),
            p = document.createElement('p')
        // ,
        // dateP = document.createElement('p')
        h5.innerText = newsList[i].title
        p.innerText = newsList[i].content
        // dateP.innerText = newsList[i].date
        li.appendChild(h5)
        li.appendChild(p)
        // li.appendChild(dateP)
        li.addEventListener('click', () => {
            // 加载其他内容
            router.skip('news', `title=${newsList[i].title}`)
            // router.go('/about/news', newsList[i].title)
        })
        ul.appendChild(li)
    }

    return ul
}

function updateNewsList(newsList) {
    let ul = document.querySelector('#about-news-list ul'),
        liList = document.querySelectorAll('#about-news-list ul li'),
        newsLength = newsList.length,
        liLength = liList.length,
        removeLength = 0
    // 
    for (let i = 0; i < liLength; i++) {
        if (i >= newsLength) {
            document.querySelector('#about-news-list ul').removeChild(document.querySelectorAll('#about-news-list ul li')[i - removeLength])
            removeLength++
            continue
        }
        document.querySelectorAll('#about-news-list ul li h5')[i].innerText = newsList[i].title
        document.querySelectorAll('#about-news-list ul li p')[i].innerText = newsList[i].content
    }

    if (newsLength > liLength) {
        for (let i = newsLength - liLength; i > 0; i--) {
            let li = document.createElement('li'),
                h5 = document.createElement('h5'),
                p = document.createElement('p')
            // ,
            // dateP = document.createElement('p')
            // newsLength - liLength = 2, i = 2 newsLength - i = 2
            // newsLength - liLength = 1, i = 1 newsLength - i = 3
            // i = 0 newsLength - i - 1 = 3 
            // i = 1 newsLength - i - 1 = 2
            h5.innerText = newsList[newsLength - i].title
            p.innerText = newsList[newsLength - i].content
            // dateP.innerText = newsList[i].date
            li.appendChild(h5)
            li.appendChild(p)
            // li.appendChild(dateP)
            li.addEventListener('click', () => {
                router.skip('news', `title=${newsList[newsLength - i].title}`)
                // router.go('/about/news', newsList[newsLength - i].title)
            })
            ul.appendChild(li)
        }
    }
}


export default function (newsList) {
    // 根据新闻数据创建ul
    if (document.querySelector('#about-news-list ul')) updateNewsList(newsList)
    else return initNewsList(newsList)
}