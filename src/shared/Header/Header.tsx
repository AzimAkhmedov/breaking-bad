import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.scss'
import icon from '../../assets/image/logo.png'

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const body = document.body

    if (darkMode === true) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
  }, [darkMode])


  return (
    <div className={s.header}>


      <div className={s.logo}>
        <NavLink to={'/'}>
          <img src={icon} alt="" />
        </NavLink>
      </div>
      <div className={s.items}>
        <NavLink to={'/characters'}>
          All Characters
        </NavLink>

      </div>

      <div
        id="toggle"
        // className={toggle}
        onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)}
      >
        <div className={s.toggle_inner} />
      </div>
      <div className={s.items}>
        <NavLink to={'/search'}>
          Lets search on site
        </NavLink>

      </div>
      <div className={s.items}></div>
    </div>
  )
}

export default Header