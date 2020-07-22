import React  from 'react'

import Footer from './footer'
import Header from './header'

import '../styles/index.scss' //basic styling
import layoutStyles from './layout.module.scss'// scss module styling per specific component

const Layout = ({children}) => {
    return (
        <div className = {layoutStyles.container}>
            <div className = {layoutStyles.content}>
                <Header />
                {children}  
            </div>
            <Footer />
        </div>
    )
}

export default Layout