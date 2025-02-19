import React, { useState, useCallback } from 'react';
import styles from './ViewPaymentsTable.module.css';
import CustomTable, { UserAvatar } from '../../common/CustomTable';
import modyImg from "@assets/mody.jpeg"
function ViewPaymentsTable() {
    const initialData = [
        {
            id: 1,
            customer: "John Doe",
            userName: "john_doe",
            imageUrl: modyImg,
            seasonDate: "2025-03-01",
            sportType: "Skiing",
            cost: "1200",
        },
        {
            id: 2,
            customer: "Jane Smith",
            userName: "jane_smith",
            imageUrl: 'https://ui-avatars.com/api/?name=John+Smith',
            seasonDate: "2025-06-15",
            sportType: "Surfing",
            cost: "900",
        },
        {
            id: 3,
            customer: "Michael Johnson",
            userName: "michael_j",
            imageUrl: 'https://ui-avatars.com/api/?name=John+Smith',
            seasonDate: "2025-09-10",
            sportType: "Football",
            cost: "500",
        },
        {
            id: 4,
            customer: "Emily Davis",
            userName: "emily_d",
            imageUrl: 'https://ui-avatars.com/api/?name=John+Smith',
            seasonDate: "2025-12-20",
            sportType: "Snowboarding",
            cost: "1100",
        },
        {
            id: 5,
            customer: "Robert Brown",
            userName: "robert_b",
            imageUrl: 'https://ui-avatars.com/api/?name=John+Smith',
            seasonDate: "2025-04-05",
            sportType: "Tennis",
            cost: "700",
        },
    ];

    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    // Table columns configuration
    const columns = [
        {
            id: 'customer',
            header: 'Customer',
            accessorKey: 'customer',
            type: 'avatar',
            sortable: false,
            cell: ({ row }) => (
                <div className="d-flex align-items-center gap-2">
                    <UserAvatar name={row.customer} imageUrl={row.imageUrl} />
                    <div>
                        <div className="font-semibold text-dark-1">{row.customer}</div>
                        <div className={styles.userName}>@{row.userName}</div>
                    </div>
                </div>
            ),
        },
        {
            id: 'seasonDate',
            header: 'Season Date',
            accessorKey: 'seasonDate',
            type: 'date',
            sortable: false,
        },
        {
            id: 'sportType',
            header: 'Sport',
            accessorKey: 'sportType',
            type: 'status',
            sortable: false
        },
        {
            id: 'cost',
            header: 'Cost',
            accessorKey: 'cost',
            sortable: false,
        },
        {
            id: 'actions',
            header: 'Actions',
            type: 'actions',
        }
    ];

    // Handle search
    const handleSearch = (searchValue) => {
        setSearchTerm(searchValue);
        if (!searchValue.trim()) {
            setData(initialData);
            return;
        }

        const filtered = initialData.filter((client) => {
            const searchStr = searchValue.toLowerCase();
            return (
                client.customer.toLowerCase().includes(searchStr) ||
                client.sportType.toLowerCase().includes(searchStr) ||
                client.cost.toLowerCase().includes(searchStr) ||
                client.seasonDate.toLowerCase().includes(searchStr)
            );
        });
        setData(filtered);
    };

    // Handle delete
    const handleDelete = useCallback((id) => {
        setData((prevData) => prevData.filter((client) => client.id !== id));
    }, []);

    // Custom header with search
    const renderHeader = ({ onSearch }) => (
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-4">
            <h2 className="mb-sm-0 mb-2">Payments</h2>
            <div className="d-flex gap-3">
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search coache..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            handleSearch(e.target.value);
                        }}
                    />
                </div>
            </div>
        </div>
    );

    return (
        <div className={`container-fluid py-4 ${styles.tablebg}`}>
            <CustomTable
                data={data}
                columns={columns}
                pageSize={5}
                onDelete={handleDelete}
                renderHeader={renderHeader}
                onRowClick={(row) => console.log('Row clicked:', row)}
            />
        </div>
    );
}

export default ViewPaymentsTable;