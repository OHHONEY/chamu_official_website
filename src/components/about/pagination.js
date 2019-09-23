function updatePage(page) {
    let liList = document.getElementById('pagination').getElementsByTagName('li')
    for (let i = 0; i < liList.length; i++) {        
    }
    console.log(liList)
}

export default function (length) {
    let ul = document.createElement('ul'),
        initPage = 1
    while (length) {
        let li = document.createElement('li'),
            p = document.createElement('p'),
            a = document.createElement('a')

        if (initPage === 1) li.classList.add('active-page')
        a.href = 'javascript:'
        // 添加监听
        a.innerText = initPage
        a.addEventListener('click', () =>{
            updatePage(initPage)
        })
        p.appendChild(a)
        li.appendChild(p)
        ul.appendChild(li)
        initPage ++
        length -- 
    }
    
    return ul
}