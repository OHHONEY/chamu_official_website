import template from '../../components/index.html'

import switchTab from './switchTab'

// 注册滚动监听
function addScrollEvent(targetFunction) {
    window.addEventListener('scroll', targetFunction)
}

// 动画事件 问题模块 
// getBoundingClientRect top 包括padding

function animation() {
    let target = document.querySelector('.instryments-problem')
    if (!target) return
    document.querySelector('.instryments-problem div').classList.add('easing-currence')
}

// 动画事件 解决方案模块

function solutionAnimation() {
    let target = document.querySelector('.instryments-solution')
    if (!target) return
    let targetPosition = target.getBoundingClientRect(),
        top = targetPosition.top,
        windowHeight = window.innerHeight || document.documentElement.clientHeight
    if (top <= windowHeight) {
        // 缓动浮现标题
        document.querySelector('.instryments-solution h3').classList.add('easing-currence')
        window.removeEventListener('scroll', solutionAnimation)
        addScrollEvent(h6Animation)
    }
}

// h6缓动事件

function h6Animation() {
    let target = document.querySelector('.instryments-solution h6')
    if (!target) return
    let targetPosition = target.getBoundingClientRect(),
        top = targetPosition.top,
        windowHeight = window.innerHeight || document.documentElement.clientHeight
    if (top <= windowHeight) {
        // 缓动浮现标题
        target.classList.add('easing-currence')
        window.removeEventListener('scroll', h6Animation)
        addScrollEvent(divAnimation)
    }
}

// div 缓动事件
function divAnimation() {
    let targetList = document.querySelectorAll('.instryments-solution div div'),
        targetBox = document.querySelector('.instryments-solution'),
        windowHeight = window.innerHeight || document.documentElement.clientHeight
    if (!targetList) return
    for (let i = 0; i < targetList.length; i++) {
        let target = targetList[i],
            targetPosition = target.getBoundingClientRect(),
            top = targetPosition.top
        // 缓动浮现标题
        if (top <= windowHeight) target.classList.add('easing-currence')
    }
    // 移除滚动监听
    if (targetBox && targetBox.getBoundingClientRect().bottom <= windowHeight) {
        window.removeEventListener('scroll', divAnimation)
    }
}


export default class {

    mount(container, pageKey) {
        this.instrumentVisit = 0
        this.warehousingVisit = 0
        this.logisticsVisit = 0
        this.windowHeight = window.innerHeight || document.documentElement.clientHeight
        container.innerHTML = template

        let search = decodeURIComponent(location.search)
        if (search) pageKey = search.split('=')[1]
        else pageKey = 'instruments'

        switchTab(pageKey)
        // 加载动画
        animation()
        // window.addEventListener('scroll', solutionAnimation)
        addScrollEvent(solutionAnimation)

        switch (pageKey) {
            case 'instruments':
                this.instrumentVisit++
                break;
            case 'warehousing-system':
                this.warehousingVisit++
                break;
            case 'logistics':
                this.logistics++
                break;
            default:
                break;
        }

        document.querySelector('#product-instruments').addEventListener('click', () => {
            switchTab('instruments')
            // 加载动画
            if (!this.instrumentVisit) {
                animation()
                addScrollEvent(solutionAnimation)
            }
            this.instrumentVisit++
        })

        document.querySelector('#product-warehousing').addEventListener('click', () => {
            // alert('#product-warehousing')
            switchTab('warehousing-system')
            // 加载动画
            if (!this.warehousingVisit) {
                animation()
                addScrollEvent(solutionAnimation)
            }
            this.warehousingVisit++
        })

        document.querySelector('#product-logistics').addEventListener('click', () => {
            // alert('#product-logistics')
            switchTab('logistics')
            // 加载动画
            if (!this.logisticsVisit) {
                animation()
                addScrollEvent(solutionAnimation)
            }
            this.logisticsVisit++
        })
    }
}