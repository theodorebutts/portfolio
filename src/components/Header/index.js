import React, { useState } from 'react';
import Navigation from '../Navigation'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Resume from '../Resume'

function Header() {

    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />
            case 'Portfolio':
                return <Portfolio />
            case 'Contact':
                return <Contact />
            case 'Resume':
                return <Resume />
            default:
                return <About />
        }
    };

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}></Navigation>
            <div>{renderPage(currentPage)}</div>
        </div>
    )
}

export default Header