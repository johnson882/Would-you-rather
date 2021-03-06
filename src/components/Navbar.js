import React from "react"
import { NavLink } from "react-router-dom"

export default function Nav () {



    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'>
                      Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activeClassName='active'>
          New Tweet
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' activeClassName='active'>
        Leaderboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/loggout' activeClassName='active'>
            Loggout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
