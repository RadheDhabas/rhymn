// import Encryption from '../utils/EncryptionClass'

// class AppFetch {

//     private _apiLink: string
//     private _xAuth: string
//     private encryptionObj: Encryption

//     constructor() {
//         this._apiLink = process.env.API_URL as string
//         this.encryptionObj = new Encryption()
//         this._xAuth = this.encryptionObj.encryptData(process.env.X_AUTH_VALUE as string)
//     }

//     /**
//      * fetch data for entire application
//      * @param method "get | post"
//      * @param sendLink 
//      * @param body 
//      * @param revalidate 
//      * @param headers 
//      * @returns 
//      */
//     public async fetchAppData(method = 'get', sendLink = '', body = '', revalidate = 1, headers = {}) {
//         let options = {}

//         if (method === 'post') {
//             options = {
//                 method: method,
//                 body: body,
//                 headers: {
//                     ...headers,
//                     "Content-type": 'application/json',
//                     "x-auth": this._xAuth
//                 },
//                 next: { revalidate: revalidate }
//             }
//         }
//         if (method === 'get') {
//             options = {
//                 method: method,
//                 headers: {
//                     ...headers,
//                     "Content-type": 'application/json',
//                     "x-auth": this._xAuth
//                 },
//                 next: { revalidate: revalidate }
//             }
//         }

//         try {
//             const responseData = await fetch(this._apiLink + sendLink, {
//                 ...options
//             }).then(r => {
//                 return r.json()
//             })
//             return responseData
//         } catch (error) {
//             return null
//         }

//     }
// }

// export default AppFetch