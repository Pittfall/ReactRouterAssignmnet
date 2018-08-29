import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import '../../Navigation.css';

const navigationItems = () => (
    <header className="Navigation">
        <nav>
            <ul>
                <NavigationItem path="/users">Users</NavigationItem>
                <NavigationItem path="/courses">Courses</NavigationItem>
            </ul>
        </nav>
    </header>
)

export default navigationItems;