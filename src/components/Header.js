import { Input } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import '../resources/header.css'

const Header = ({ setQuery }) => {
    return (
        <div className='header' >
            <div className='header' >
                <div className='search'>
                    <Input placeholder="search here ... "
                        addonBefore={<SearchOutlined style={{ color: "white", margin: "5px 10px" }} />} size="large" onChange={(e) => setQuery(e.target.value)} />
                </div>
            </div>
        </div>
    );
};

export default Header;