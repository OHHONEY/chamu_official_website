import updatePage from './updatePage'

export default function (length) {
    let ul = document.createElement('ul'),
        initPage = 1
    while (length) {
        let currentPage = initPage
        let li = document.createElement('li'),
            p = document.createElement('p'),
            a = document.createElement('a')

        if (initPage === 1) li.classList.add('active-page')
        a.href = 'javascript:'
        // 添加监听
        a.innerText = initPage
        p.appendChild(a)
        li.appendChild(p)
        ul.appendChild(li)
        a.addEventListener('click', () => {
            updatePage(currentPage)
            // 移除类
            if (document.querySelector('.active-page')) document.querySelector('.active-page').classList.remove('active-page')
            // 添加类
            li.classList.add('active-page')
        })
        initPage++
        length--
    }

    return ul
}