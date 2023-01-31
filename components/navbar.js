import Link from 'next/link'
import React from 'react'
import styles from '../styles/all.module.scss'
import Login from './login'
// />
export const Navbar = () => {
  return (
    <div className={styles.sidebar}>
        <Link href="/"><h1>Test</h1></Link>
        <Login />
        <div className={styles.container}>
            <Link href="/dao"><p>Dao</p></Link>
            <Link href="/proposals"><p>Proposals</p></Link>
            <Link href="/conference"><p>Conference</p></Link>
            <Link href="/textroom"><p>Text room</p></Link>
        </div>
    </div>
  )
}
