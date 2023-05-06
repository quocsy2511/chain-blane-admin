import { Modal } from 'antd';
import React from 'react';

const DetailError = (
    { showErrorDetail,
        setShowErrorDetail,
        selectCoin,
        setSelectCoin,
        type
    }
) => {
    return (
        <div>
            <Modal
                width={800}
                title={type === "Detail" ? "Detail" : "Error"}
                open={showErrorDetail}
                onCancel={() => {
                    setShowErrorDetail(false);
                }}
                footer={false}
            >
                Detail
            </Modal>
        </div>
    );
};

export default DetailError;