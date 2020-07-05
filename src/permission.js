import router from '@/router'
import { getCookies } from '@/utils/cookies'
import { indexRoute } from '@/router'
import { getuserInfo } from '@/utils/auth'

router.beforeEach(async (to, from, next) => {
	const token = getCookies('token')
	if(token){
		if(to.path == '/login'){
			next({path:'/'})
		}else{
			const isMandate = getCookies('rolus')
			if(isMandate){
				next()
			}else{
				await getuserInfo()
				router.addRoutes(indexRoute)
				next()
				// next({...to,replace:true})
			}
		}
	}else{
		if(to.path == '/login'){
			next()
		}else{
			next(`/login?redirect=${to.path}`)
		}
	}
})