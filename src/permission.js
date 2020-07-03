import router from './router'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner:false })

router.beforeEach(async(to, from, next) => {
    NProgress.start()
    const hasToken = getToken()
    if(hasToken){
        if(to.path === '/login'){
            next({path: '/'})
            NProgress.done()
        }else{
            const hasRoles = store.getters.roles && store.getters.roles.length > 0;
            if(hasRoles){
                next() 
            }else{
                try {
                    const { roles } = await store.dispatch('user/getInfo')
                    const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
                    router.addRoutes(accessRoutes)
                    next({...to,replace:true})
                } catch (error) {
                    await store.dispatch('user/resetToken')
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            }
        }
    }else{
        if(to.path !== '/login'){
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }else{
            next()
        }
    }
})

router.afterEach(()=>{
    NProgress.done()
})
