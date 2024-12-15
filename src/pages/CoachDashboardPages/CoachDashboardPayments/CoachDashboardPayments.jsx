import React, { useState } from 'react';
import styles from './CoachDashboardPayments.module.css';
import {
    Download,
    CreditCard,
    Clock,
    DollarSign,
    MoreVertical
} from 'lucide-react';

const CoachDashboardPayments = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');

    const payments = [
        {
            id: 1,
            client: 'Emily Johnson',
            date: 'Dec 10, 2024',
            amount: 250,
            status: 'Completed',
            method: 'Credit Card'
        },
        {
            id: 2,
            client: 'Michael Chen',
            date: 'Dec 5, 2024',
            amount: 175,
            status: 'Pending',
            method: 'Bank Transfer'
        },
        {
            id: 3,
            client: 'Sarah Williams',
            date: 'Nov 28, 2024',
            amount: 300,
            status: 'Completed',
            method: 'PayPal'
        }
    ];

    const cardIcons = [
        {
            Icon: DollarSign,
            title: 'Total Revenue',
            value: '$725',
            colorClass: 'text-success'
        },
        {
            Icon: CreditCard,
            title: 'Completed Payments',
            value: '$550',
            colorClass: 'text-danger'
        },
        {
            Icon: Clock,
            title: 'Pending Payments',
            value: '$175',
            colorClass: 'text-warning'
        }
    ];

    // Filter options
    const filters = [
        { label: 'All', value: 'all' },
        { label: 'Completed', value: 'completed' },
        { label: 'Pending', value: 'pending' }
    ];

    // Filter payments based on selected filter
    const filteredPayments = payments.filter(payment =>
        selectedFilter === 'all' || payment.status.toLowerCase() === selectedFilter
    );

    return (
        <div className={`container-fluid ${styles.paymentsDashboard}`}>
            <div className="row mb-5 mt-3">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <h1 className={styles.pageTitle}>Payments</h1>
                    <button className="btn btn-lg btn-danger d-flex align-items-center">
                        <Download className="me-2" size={18} />
                        Export
                    </button>
                </div>
            </div>

            {/* Financial Summary Cards */}
            <div className="row my-5">
                {cardIcons.map((card, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className={`card ${styles.summaryCard}`}>
                            <div className="card-body d-flex align-items-center">
                                <div className={`me-3 ${styles.cardIcon} ${card.colorClass}`}>
                                    <card.Icon size={24} />
                                </div>
                                <div>
                                    <p className="mb-1">{card.title}</p>
                                    <h3 className="mb-0 fw-bold">{card.value}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Payments Table */}
            <div className={`card my-5 ${styles.cardPayment}`}>
                {/* Filter Tabs */}
                <div className="card-header">
                    <div className="nav nav-tabs card-header-tabs">
                        {filters.map((filter) => (
                            <li key={filter.value} className="nav-item">
                                <button
                                    className={`nav-link text-danger ${selectedFilter === filter.value ? 'active' : ''}`}
                                    onClick={() => setSelectedFilter(filter.value)}
                                >
                                    {filter.label}
                                </button>
                            </li>
                        ))}
                    </div>
                </div>

                {/* Payment List */}
                <div className={`p-0 ${styles.cardPayment}`}>
                    <div className={styles.paymentTableContainer}>
                        <table className={styles.paymentTable}>
                            <thead className={styles.paymentTableHeader}>
                                <tr>
                                    <th>Client</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Method</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className={styles.paymentTableBody}>
                                {filteredPayments.map((payment) => (
                                    <tr key={payment.id}>
                                        <td>{payment.client}</td>
                                        <td>{payment.date}</td>
                                        <td>${payment.amount}</td>
                                        <td>
                                            <span className={`${styles.paymentStatusBadge} ${payment.status === 'Completed'
                                                ? styles.paymentStatusCompleted
                                                : styles.paymentStatusPending
                                                }`}>
                                                {payment.status}
                                            </span>
                                        </td>
                                        <td>{payment.method}</td>
                                        <td>
                                            <button className={`btn ${styles.actionBtn}`}>
                                                <MoreVertical size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default CoachDashboardPayments;