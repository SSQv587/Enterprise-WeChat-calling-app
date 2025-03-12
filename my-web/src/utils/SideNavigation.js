import React from 'react';
import { Link } from "react-router-dom";
import { Nav } from '@douyinfe/semi-ui';

const NavApp = () => {
    return (
        <Nav
            bodyStyle={{ height: 800 }}
            defaultOpenKeys={['user', 'union']}
            onSelect={(data) => console.log('trigger onSelect: ', data)}
            onClick={(data) => console.log('trigger onClick: ', data)}
        >
            <Nav.Header text={'117工具箱'} />
            <Nav.Item itemKey={'union'} text={'扎针机器人'} />
            
            <Nav.Footer collapseButton={true} />
        </Nav>
    );
};

export default NavApp;