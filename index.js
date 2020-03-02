import Test from './packages/components/test'

const components = {
    Test
}

function install(Vue) {
    Object.keys(components).forEach(key => {
        Vue.components(key, components[key])
    })
}

export default {
    install,
}