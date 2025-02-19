import React from 'react';
import DashboardCard from '../../common/DashboardCard/DashboardCard';
import { PiPersonSimpleThrowFill } from 'react-icons/pi';
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { FaMoneyCheck } from 'react-icons/fa';

function PaymentsCards() {
    const cardData = [
        { id: 1, Icon: PiPersonSimpleThrowFill, title: "Total Sessions", value: "50" },
        { id: 2, Icon: HiOutlineCurrencyDollar, title: "Total Revenue", value: "50,200" },
        { id: 3, Icon: FaMoneyCheck, title: "Administrative Expenses", value: "2000" },

    ];
    return (
        <div className="py-2 px-4">
            <div className="d-flex justify-content-center flex-wrap gap-4">
                {cardData.map((item) => (
                    <div key={item.id} className="col-12 col-sm-6 col-lg-3 mb-4">
                        <DashboardCard
                            Icon={item.Icon}
                            title={item.title}
                            value={item.value}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PaymentsCards;