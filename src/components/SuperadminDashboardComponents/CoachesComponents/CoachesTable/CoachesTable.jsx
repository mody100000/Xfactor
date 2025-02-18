import React, { useState, useCallback } from 'react';
import styles from './CoachesTable.module.css';
import CustomTable, { UserAvatar } from '../../common/CustomTable';
import modyImg from "@assets/mody.jpeg"
function CoachesTable() {
    const initialData = [
        {
            id: 5,
            name: 'Mody Mohamed',
            userName: "Mody20",
            imageUrl: modyImg,
            sportType: 'Swimming',
            sessions: 'Sessions',
            profile: 'Mody Davis',
            packages: "Packages"
        },
        {
            id: 1,
            name: 'John Smith',
            userName: "john20",
            imageUrl: 'https://ui-avatars.com/api/?name=John+Smith',
            sportType: 'Basketball',
            sessions: 'Sessions',
            profile: 'John Smith',
            packages: "Packages"

        },
        {
            id: 2,
            name: 'Sarah Johnson',
            userName: "Sarah20",
            imageUrl: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
            sportType: 'Tennis',
            sessions: 'Sessions',
            profile: 'Sarah Johnson',
            packages: "Packages"

        },
        {
            id: 3,
            name: 'Mike Wilson',
            userName: "Mike20",
            imageUrl: 'https://ui-avatars.com/api/?name=Mike+Wilson',
            sportType: 'Football',
            sessions: 'Sessions',
            profile: 'Mike Wilson',
            packages: "Packages"

        },
        {
            id: 4,
            name: 'Emma Davis',
            userName: "Emma20",
            imageUrl: 'https://ui-avatars.com/api/?name=Emma+Davis',
            sportType: 'Swimming',
            sessions: 'Sessions',
            profile: 'Emma Davis',
            packages: "Packages"

        },

    ];

    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');

    // Table columns configuration
    const columns = [
        {
            id: 'avatar',
            header: 'Coache',
            accessorKey: 'avatar',
            type: 'avatar',
            sortable: false,
            cell: ({ row }) => (
                <div className="d-flex align-items-center gap-2">
                    <UserAvatar name={row.name} imageUrl={row.imageUrl} />
                    <div>
                        <div className="font-semibold text-dark-1">{row.name}</div>
                        <div className={styles.userName}>@{row.userName}</div>
                    </div>
                </div>
            ),
        },
        {
            id: 'profile',
            header: 'Profile',
            accessorKey: 'profile',
            type: 'linkTitle',
            sortable: true,
            linkConfig: {
                baseUrl: './view-coach',
                idKey: 'id'
            }
        },
        {
            id: 'packages',
            header: 'Packages',
            accessorKey: 'packages',
            type: 'linkTitle',
            sortable: false,
            linkConfig: {
                baseUrl: './view-packages',
                idKey: 'id'
            }
        },
        {
            id: 'sessions',
            header: 'Sessions',
            accessorKey: 'sessions',
            type: 'linkTitle',
            sortable: false,
            linkConfig: {
                baseUrl: './view-sessions',
                idKey: 'id'
            }
        },
        {
            id: 'sportType',
            header: 'Sport',
            accessorKey: 'sportType',
            type: 'status',
            sortable: false
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
                client.name.toLowerCase().includes(searchStr) ||
                client.sportType.toLowerCase().includes(searchStr) ||
                client.sessions.toLowerCase().includes(searchStr)
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
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Coaches</h2>
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

export default CoachesTable;