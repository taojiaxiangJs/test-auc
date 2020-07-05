import { getCookies, setCookies } from './cookies'

export const getuserInfo = () => {
	return new Promise((resolve, reject) => {
		if(getCookies('token')){
			setCookies('rolus',true)
			resolve()
		}else{
			reject()
		}
	})
}