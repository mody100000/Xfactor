import React from 'react'
import ClientsTable from '../../../components/SuperadminDashboardComponents/ClientsComponents/ClientsTable/ClientsTable'

function SuperadminDashboardClients() {
    return (
        <div>
            <p className='p-3 fs-1 fw-bold'>Clients Table</p>
            <ClientsTable />
        </div>
    )
}

export default SuperadminDashboardClients