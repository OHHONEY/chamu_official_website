import routes from './routes/routes'

class Router {
    start() {
        window.addEventListener('popstate', () => {
            this.load(location.pathname)
        })

        // 本地文件
        if (/file/.test(location.href)) this.load('/')
        else this.load(location.pathname)

    }

    // erp

    go(path, params) {
        if (path === '/erp') path += `${params? '?product=' + params: ''}`
        else if (params) path += `?title=${params}`

        try {
            history.pushState({}, '', path)
            this.load(path, params)
        } catch (error) {
            // console.error()
            // 在本地打开项目文件
            this.load(path, params)
        }
    }

    // 打开本地文件时如何载入
    load(path) {
        console.log(path)
        if (path === '/') {
            const view = new(routes('/home'))()
            view.mount(document.getElementById('site-page-content'))
        }
        // else if (/title/.test(path)) path = '/about/news'
        // console.log(path.replace(/\?.*$/, ''))
        // const view = new routes[path.replace(/\?.*$/, '')]()
        else routes(path.replace(/\?.*$/, '')).then(module => {
            const view = new module.default()
            view.mount(document.getElementById('site-page-content'))
        })
    }
}

export default new Router()