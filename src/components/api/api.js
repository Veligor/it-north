import axios from "axios";



let instance = axios.create({
   baseURL: "https://social-network.samuraijs.com/api/1.0/",
   withCredentials: true,
   headers: {"API-KEY": "12c72017-a4c0-4868-a22d-388d9fdbbe4b"}
})


export const userApi = {
   getUsers(currentPage = 1, pageSize = 5)  {
   return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
   .then(response => {
       return response.data
     })
 },
follow(userId) {
  return instance.post(`follow/${userId}`)
},
unfollow(userId) {
  return instance.delete(`follow/${userId}`)
},
getProfile(profileId) {
  // return instance.get(`profile/${profileId}`)
  console.warn('Obsolete method. Please use profileApi object')
  return profileApi.getProfile(profileId);
}

}
export const authApi = {
  
   me() {
      return instance.get(`auth/me`)
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, {email, password, rememberMe})
   },
   logout() {
      return instance.delete(`auth/login`)
   },


}
export const profileApi = {
  
   getProfile(profileId) {
      return instance.get(`profile/${profileId}`)
   },
   getStatus(userId) {
      return instance.get(`/profile/status/${userId}`)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, {status: status})
   },
   savePhoto(photoFile) {
      let formData = new FormData()
      formData.append('image', photoFile )
      return  instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type' : 'multipart/form-data'
         }
      })
   },
   saveProfile(profile) {
      return instance.put(`profile`, profile )
   }


}


