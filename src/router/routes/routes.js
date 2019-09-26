export default (path) => {
    switch (path) {
        case 'cloud-clinic':
            return import( /* webpackChunkName: "cloud-clinic" */ '../../subPage/cloud-clinic/cloud-clinic')
        case 'news':
            return import( /* webpackChunkName: "news" */ '../../subPage/news/news')
        default:
            break;
    }
}
