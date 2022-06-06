import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes  from "./PublicRoutes"
import React  from 'react';


const AppRouter = ({isAuth}) => {
  return (
    <>
      {
        isAuth ?
          <PrivateRoutes /> :
          <PublicRoutes />
      }
    </>
  )
}

export default AppRouter;