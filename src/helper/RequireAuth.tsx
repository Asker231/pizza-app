import{ ReactNode } from 'react'
import { Navigate } from 'react-router-dom'


function RequireAuth({children}:{children:ReactNode}) {
  let jwt = localStorage.getItem('jwt')
  if(!jwt){
    return <Navigate to={'auth/signin'}/>
  }  
  return children
}

export default RequireAuth