import { Button, Modal, Table, Tag } from 'antd';
import React from 'react';
import Header from './Header';
import PageTitle from './PageTitle';
import "../resources/error.css"
import { useParams } from 'react-router-dom';

const DetailError = () => {
    const { oid } = useParams();
    console.log('coinId', oid)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Code',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'MarketCap',
            dataIndex: 'marketCap',
            key: 'marketCap',
        },
        {
            title: 'Day Trading Volume',
            dataIndex: 'dayTradingVolume',
            key: 'dayTradingVolume',
        },
        {
            title: 'Status',
            key: 'state',
            render: (record) => (record.state === 1 ? <Tag color='green'>DONE</Tag> : <Tag color='volcano' >ERROR</Tag>),
        },
        {
            title: 'Action',
            key: 'action',
            render: (action, record) =>
            (<Button onClick={() => {
                console.log("click")
            }}> Detail </Button>)
        },
    ];

    const data = [
        {
            key: {
                $oid: "6441f6891d954bc1f425944f"
            },
            name: "Bitcoin",
            code: "BTC",
            price: "Error",
            marketCap: "Error",
            dayTradingVolume: "Error",
            state: 0
        }
    ];

    return (

        <div>
            <div>
                <Header />
            </div>
            <div className='inside-content'>
                <div className='inside-content-2'>
                    <div className="d-flex justify-content-between " style={{ margin: "30px" }}>
                        <PageTitle title="Error Detail" />
                    </div>
                    <Table
                        columns={columns}
                        dataSource={data}
                        rowKey="name"
                    />
                </div>
            </div>
        </div>

    );
};

export default DetailError;