import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import '../resources/layout.css'
import 'antd/dist/reset.css'
import { Menu } from 'antd';
import {
    HomeFilled,
    LogoutOutlined,
    UsergroupAddOutlined,
    UserOutlined,
    UserSwitchOutlined,
    CarOutlined,
    CalendarOutlined,
    AimOutlined
} from '@ant-design/icons';

function getItem(label, key, icon, children, type, danger, style) {
    return {
        key,
        icon,
        children,
        label,
        type,
        danger,
        style
    };
}
const items = [
    getItem('Home', '/home', <HomeFilled />, null, null, null, { color: '#ffffff' }),
    getItem('Users', 'sub1', <UsergroupAddOutlined />, [
        getItem('Staffs', '#', <UserOutlined />, null, null, null, { color: '#ffffff' }),
        getItem('users', '/users', <UserSwitchOutlined />, null, null, null,
            { color: '#ffffff' }),
    ], null, null, { color: '#ffffff' }),
];

const DefaultLayout = ({ children }) => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className='layout-parent'>
            <div className='sidebar'>
                <div className='d-flex flex-column gap-5 justify-content-start menu'>
                    <div className="sidebar-header">
                        <div className="logo">
                            {/* <img src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/191299147_4218533944852001_9207524335393556037_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rYCRBwSoQj8AX-mLIop&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfBVtxgFmoNESUrmhcHYGw5oeAet3ERaSflxL_6dChFmjg&oe=64413C35" alt="logo" style={{ width: "36%" }} /> */}
                        </div>
                        <div className='name-admin'>
                            <h2>Nguyen Văn A</h2>
                        </div>
                    </div>
                    <div >
                        <Menu
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            inlineCollapsed={collapsed}
                            items={items}
                            onClick={async ({ key }) => {
                                if (key === "/logout") {
                                    // await logOut();
                                    navigate("/login");
                                } else {
                                    navigate(key)
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='body'>
                <div className='content'>
                    <div className='children'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;