import '@styles/index.css';
import '@styles/App.css';
import React from 'react';
import { Outlet } from 'react-router';
import Header from './header';

const SiteBody: React.FC = ()=>{

    return (
        <body>
            {/* Header remains consistent */}
            <Header />
            <Outlet />
        </body>
    )
}

export default SiteBody;