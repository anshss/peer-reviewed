import Link from 'next/link'
import React from 'react'
import styles from '../styles/all.module.scss'
import Login from './login'

export const Navbar = () => {
  return (
    <div className={styles.sidebar}>
        <Link href="/"><img className={styles.logo}src = "peer.png"/></Link>
        <Login />
        <div className={styles.container}>
            <Link href="/"><p>Homepage</p></Link>
            <Link href="/editor"><p>Editor</p></Link>
            <Link href="/proposals"><p>Proposals</p></Link>
            <Link href="/conference"><p>Conference</p></Link>
            <Link href="/textroom"><p>Notifications</p></Link>
            <Link href="/article"><p>Articles</p></Link>
        </div>
    </div>
  )
}
