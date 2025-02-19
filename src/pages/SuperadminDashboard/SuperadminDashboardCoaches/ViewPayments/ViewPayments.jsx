import React from 'react'
import ViewPaymentsTable from '../../../../components/SuperadminDashboardComponents/CoachesComponents/ViewPaymentsTable/ViewPaymentsTable'
import PaymentsCards from '../../../../components/SuperadminDashboardComponents/CoachesComponents/PaymentsCards/PaymentsCards'

function ViewPayments() {
    return (
        <div>
            <p className='p-3 fs-1 fw-bold'>View Coach Payments</p>
            <PaymentsCards />
            <ViewPaymentsTable />
        </div>
    )
}

export default ViewPayments