export default function (content) {
    let div = document.createElement('div')
    // 插入新闻图文消息
    for (let i = 0; i < content.length; i++) {
        if (content[i].text) {
            let p = document.createElement('p')
            p.innerText = content[i].text
            div.appendChild(p)
        }

        if (content[i].img) {
            let img = new Image()
            img.src = content[i].img
            div.appendChild(img)
        }

    }

    return div
}