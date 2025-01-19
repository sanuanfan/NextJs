import React from 'react'
import NavBar from '../components/navBar/navBar'
import SideComponent from '../components/sideComponent/sideComponent'

const HomePage = () => {
    return (
        <div className='flex-col flex bg-slate-400 h-screen'>
            <NavBar></NavBar>
            <SideComponent></SideComponent>
        </div>

    )
}

export default HomePage
