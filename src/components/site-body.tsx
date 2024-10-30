import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import { Outlet } from 'react-router';
import Header from './header';
import Footer from './footer';

const SiteBody: React.FC = ()=>{

    return (
        <body>
            {/* Header remains consistent */}
            <Header />
            <Outlet />
            {/* Footer remains consistent */}
            <Footer />
        </body>
    )
}

export default SiteBody;