import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Button, Dropdown, Space, Table, Tag } from 'antd';
import 'antd/dist/reset.css'
import "../resources/home.css"
import Header from '../components/Header';
import PageTitle from '../components/PageTitle';
import DetailError from '../components/DetailError';
import { useNavigate } from 'react-router-dom';

const items = [
    {
        key: '1',
        label: 'Action 1',
    },
    {
        key: '2',
        label: 'Action 2',
    },
];
const Home = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [showErrorDetail, setShowErrorDetail] = useState(false)
    const [selectCoin, setSelectCoin] = useState(null)

    const data = [
        {
            key: {
                $oid: "6441f6891d954bc1f425944f"
            },
            name: "Bitcoin",
            code: "BTC",
            price: "$30,137.11",
            marketCap: "$583,164,234,922",
            dayTradingVolume: "$17,569,051,488",
            fullyDilutedValuation: "$633,062,786,369",
            circulatingSupply: "19,344,762",
            Total_Supply: "21,000,000",
            Max_Supply: "21,000,000",
            state: 1
        }, {
            key: {
                $oid: "6441f68e1d954bc1f4259450"
            },
            name: "Ethereum",
            code: "ETH",
            price: "$1,908.45",
            marketCap: "$229,846,107,976",
            dayTradingVolume: "$12,667,360,564",
            fullyDilutedValuation: "$229,846,107,976",
            circulatingSupply: "120,437,016",
            Total_Supply: "120,437,016",
            Max_Supply: "∞",
            state: 0
        }, {
            key: {
                $oid: "6441f6931d954bc1f4259451"
            },
            name: "Tether",
            code: "USDT",
            price: "$1.00",
            marketCap: "$80,662,103,438",
            dayTradingVolume: "$29,232,559,418",
            fullyDilutedValuation: "$80,662,103,438",
            circulatingSupply: "80,578,797,765",
            Total_Supply: "80,578,797,765",
            Max_Supply: "∞",
            state: 1
        }

    ];
    //bảng bên trong 
    const expandedRowRender = (record) => {
        const data = [
            {
                key: record.key.$oid,
                fullyDilutedValuation: record.fullyDilutedValuation,
                circulatingSupply: record.circulatingSupply,
                Total_Supply: record.Total_Supply,
                Max_Supply: record.Max_Supply,
            },
        ];

        const columns = [
            {
                title: 'Fully Diluted Valuation',
                dataIndex: 'fullyDilutedValuation',
                key: 'fullyDilutedValuation',
            },
            {
                title: 'Circulating Supply',
                dataIndex: 'circulatingSupply',
                key: 'circulatingSupply',
            },
            {
                title: 'Total Supply',
                dataIndex: 'Total_Supply',
                key: 'Total_Supply',
            },
            {
                title: 'Max Supply',
                dataIndex: 'Max_Supply',
                key: 'Max_Supply',
            },

            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Space size="middle">
                        {/* <a>Pause</a>
                        <a>Stop</a> */}
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a>
                                More <DownOutlined />
                            </a>
                        </Dropdown>
                    </Space>
                ),
            },
        ];
        return <Table columns={columns} dataSource={data} pagination={false} rowKey="key"
        />;
    };
    //bảng bên ngoài
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
                setSelectCoin(record);
                setShowErrorDetail(true);
                navigate(`/error/${record.key.$oid}`)
            }}> Detail </Button>)
        },
    ];
    console.log("selectCoi", selectCoin?.$oid);
    return (
        <div>
            <div>
                <Header query={query} setQuery={setQuery} />
            </div>
            <div className='inside-content'>
                <div className='inside-content-2'>
                    <div className="d-flex justify-content-between " style={{ margin: "30px" }}>
                        <PageTitle title="Chain Blade" />
                    </div>
                    <Table
                        columns={columns}
                        expandable={{
                            expandedRowRender,
                            defaultExpandedRowKeys: ['0']
                        }}
                        dataSource={data}
                        rowKey="name"
                    />
                </div>
            </div>
            {/* {showErrorDetail &&
                (<DetailError
                    showErrorDetail={showErrorDetail}
                    setShowErrorDetail={setShowErrorDetail}
                    setSelectCoin={selectCoin}
                    selectCoin={selectCoin}
                    type={selectCoin?.state === 1 ? "Detail" : "Error"}
                />)
            } */}
        </div>
    );
};

export default Home;