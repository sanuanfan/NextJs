import React from 'react'
import Button from '../button/button'

const NavBar = () => {
    return (
        <div className='p-3'>
            <div className="navbar bg-base-100 rounded-lg ">
                <div className="flex-1">
                    <Button text="Home Page" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Button text="About" /></li>
                        <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
