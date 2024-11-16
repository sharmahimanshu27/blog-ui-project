import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../component/Headers'


function Layout() {
  return (
    <div>
        <Headers/>
              <Outlet/>
        //footer
    </div>
  )
}

export default Layout