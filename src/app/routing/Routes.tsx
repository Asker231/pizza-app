import { createBrowserRouter } from "react-router-dom";
import Main from "../../pages/Main/Main";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";

export const Routes = createBrowserRouter([
  {
    path:'/',
    element:<Main/>,
  },
  {
    path:'/auth/signin',
    element:<SignIn/>
  },
  {
    path:"/auth/signup",
    element:<SignUp/>
  }
])
