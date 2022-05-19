import React, { FC } from 'react'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

const Header:FC = () => {
    return (
      <div className={styles.header}>
        <img src={logo} alt="" height={100} width={120}/>
      </div>
  )
}

export default Header;
