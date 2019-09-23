export default function (page) {
    let liList = document.getElementById('pagination').getElementsByTagName('li')
    console.log(liList[page])
}