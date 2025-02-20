import React, { useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import styles from './CustomTable.module.css';
import { AlertCircle, ChevronDown, ChevronLeft, ChevronRight, ChevronsUpDown, ChevronUp, Trash2 } from 'lucide-react';

function SortIcon({ isSorted, sortDirection }) {
    if (!isSorted) return <ChevronsUpDown className="cursor-pointer" />;
    return sortDirection === "asc" ? (
        <ChevronUp className="cursor-pointer" />
    ) : (
        <ChevronDown className="cursor-pointer" />
    );
}


function CustomCheckbox({ checked, onChange }) {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                className="form-check-input"
                checked={checked}
                onChange={onChange}
            />
        </div>
    );
}

export const UserAvatar = ({ name, imageUrl }) => {
    if (imageUrl) {
        return (
            <img
                src={imageUrl}
                alt={name}
                className={styles.avatarImg}
            />
        );
    }

    return (
        <div className={styles.avatarPlaceholder}>
            <span className={styles.avatarText}>
                {name
                    .split(' ')
                    .map((letter) => letter.charAt(0).toUpperCase())
                    .join('')}
            </span>
        </div>
    );
};

function StatusBadge({ status, config }) {
    const getStatusClass = () => {
        const statusMap = {
            active: 'success',
            inactive: 'secondary',
            pending: 'warning',
            error: 'danger'
        };
        return `badge bg-${statusMap[status.toLowerCase()] || 'danger'}`;
    };

    return <span className={getStatusClass()}>{status}</span>;
}

const DefaultActions = ({ onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = (e) => {
        e.stopPropagation();
        onDelete();
        setShowModal(false);
    };

    return (
        <>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setShowModal(true);
                }}
                className={styles.deleteButton}
                aria-label="Delete item"
            >
                <Trash2 className={styles.trashIcon} />
            </button>

            {showModal && (
                <div
                    className={styles.modalOverlay}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(false);
                    }}
                >
                    <div
                        className={styles.modalContainer}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.modalHeader}>
                            <div className={styles.alertIconWrapper}>
                                <AlertCircle className={styles.alertIcon} />
                            </div>
                            <h2 className={styles.modalTitle}>Confirm Delete</h2>
                        </div>

                        <div className={styles.modalBody}>
                            <p>Are you sure you want to delete this item?</p>
                        </div>

                        <div className={styles.modalActions}>
                            <button
                                type="button"
                                onClick={handleDelete}
                                className={styles.deleteButtonModal}
                            >
                                Delete
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowModal(false);
                                }}
                                className={styles.cancelButton}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

function Interactions({ likesNumber, commentsNumber }) {
    return (
        <div className="d-flex align-items-center gap-2">
            <span>👍 {likesNumber}</span>
            <span>💬 {commentsNumber}</span>
        </div>
    );
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const getPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= Math.min(3, totalPages); i++) {
            pages.push(i);
        }
        if (totalPages > 6) pages.push("...");
        if (totalPages > 3) {
            for (let i = Math.max(totalPages - 2, 4); i <= totalPages; i++) {
                pages.push(i);
            }
        }
        return pages;
    };

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={styles.button}
            >
                <ChevronLeft className={styles.icon} />
            </button>

            {getPageNumbers().map((page, index) =>
                page === "..." ? (
                    <span key={`ellipsis-${index}`} className={styles.ellipsis}>
                        ...
                    </span>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        className={`${styles.pageButton} ${currentPage === page ? styles.activePage : ""
                            }`}
                    >
                        {String(page).padStart(2, "0")}
                    </button>
                )
            )}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={styles.button}
            >
                <ChevronRight className={styles.icon} />
            </button>
        </div>
    );
};

function CustomTable({
    data,
    columns,
    pageSize = 10,
    isSelectable = false,
    onRowClick,
    onDelete,
    renderHeader,
    onSearch,
    onAdd,
    onFilter,
    onSelectionChange
}) {
    const [sorting, setSorting] = useState([]);
    const [selectedRows, setSelectedRows] = useState(new Set());
    const [currentPage, setCurrentPage] = useState(1);

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                throw new Error('Invalid date');
            }
            return date.toLocaleDateString();
        } catch {
            console.warn(`Invalid date format: ${dateString}`);
            return dateString;
        }
    };

    const renderCell = useCallback(
        (column, row) => {
            switch (column.type) {
                case 'date':
                    return column.cell
                        ? column.cell({ row })
                        : formatDate(row[column.accessorKey]);
                case 'status':
                    return column.cell ? (
                        column.cell({ row })
                    ) : (
                        <StatusBadge
                            status={row[column.accessorKey]}
                            config={column.statusConfig}
                        />
                    );
                case 'avatar':
                    return column.cell ? (
                        column.cell({ row })
                    ) : (
                        <UserAvatar
                            name={row[column.accessorKey]}
                            imageUrl={row['imageUrl']}
                        />
                    );
                case 'actions':
                    return column.cell ? (
                        column.cell({ row })
                    ) : (
                        <DefaultActions onDelete={() => onDelete?.(row.id)} />
                    );
                case 'interactions':
                    return column.cell ? (
                        column.cell({ row })
                    ) : (
                        <Interactions
                            likesNumber={row[column.accessorKey]}
                            commentsNumber={row[column.accessorKey]}
                        />
                    );
                case 'linkTitle':
                    if (!column.linkConfig) {
                        console.warn('linkConfig is required for linkTitle type');
                        return String(row[column.accessorKey]);
                    }
                    const id = row[column.linkConfig.idKey];
                    return (
                        <Link
                            to={`${column.linkConfig.baseUrl}/${id}`}
                            className="text-primary"
                        >
                            {row[column.accessorKey]}
                        </Link>
                    );
                default:
                    return String(row[column.accessorKey]);
            }
        },
        [onDelete]
    );

    const sortedData = useMemo(() => {
        if (!sorting.length) return data;
        return [...data].sort((a, b) => {
            const sort = sorting[0];
            if (!sort) return 0;
            const aValue = a[sort.id];
            const bValue = b[sort.id];
            return sort.desc ? (bValue > aValue ? 1 : -1) : (aValue > bValue ? 1 : -1);
        });
    }, [data, sorting]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return sortedData.slice(start, start + pageSize);
    }, [sortedData, currentPage, pageSize]);

    const totalPages = Math.ceil(data.length / pageSize);

    return (
        <div className={styles.card}>
            {renderHeader?.({ onSearch, onAdd, onFilter })}

            <div className={styles.tableContainer}>
                <div className={styles.tableResponsive}>
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {isSelectable && (
                                    <th>
                                        <CustomCheckbox
                                            checked={selectedRows.size === data.length}
                                            onChange={(e) => {
                                                const newSelected = new Set();
                                                if (e.target.checked) {
                                                    data.forEach((row) => newSelected.add(row.id));
                                                }
                                                setSelectedRows(newSelected);
                                                onSelectionChange?.(newSelected);
                                            }}
                                        />
                                    </th>
                                )}
                                {columns.map((column) => (
                                    <th
                                        key={column.id}
                                        style={{ width: column.width }}
                                        onClick={() => {
                                            if (column.sortable) {
                                                setSorting((old) => {
                                                    const desc = old[0]?.desc === false;
                                                    return [{ id: column.accessorKey, desc }];
                                                });
                                            }
                                        }}
                                    >
                                        <div className="d-flex align-items-center  gap-2">
                                            {column.header}
                                            {column.sortable && (
                                                <SortIcon
                                                    className=""
                                                    isSorted={sorting[0]?.id === column.accessorKey}
                                                    sortDirection={
                                                        sorting[0]?.desc ? 'desc' : 'asc'
                                                    }
                                                />
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.length > 0 ? (
                                paginatedData.map((row) => (
                                    <tr
                                        key={row.id}
                                        onClick={() => onRowClick?.(row)}
                                        className={onRowClick ? styles.cursorPointer : 'align-items-center'}
                                    >
                                        {isSelectable && (
                                            <td onClick={(e) => e.stopPropagation()}>
                                                <CustomCheckbox
                                                    checked={selectedRows.has(row.id)}
                                                    onChange={(e) => {
                                                        const newSelected = new Set(selectedRows);
                                                        if (e.target.checked) {
                                                            newSelected.add(row.id);
                                                        } else {
                                                            newSelected.delete(row.id);
                                                        }
                                                        setSelectedRows(newSelected);
                                                        onSelectionChange?.(newSelected);
                                                    }}
                                                />
                                            </td>
                                        )}
                                        {columns.map((column) => (
                                            <td key={column.accessorKey}>
                                                {renderCell(column, row)}
                                            </td>
                                        ))}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={columns.length + (isSelectable ? 1 : 0)}
                                        className="text-center align-items-center py-5"
                                    >
                                        <div className="d-flex flex-column align-items-center">
                                            <div className="bg-light rounded-circle p-4 mb-3">
                                                <svg
                                                    className="w-8 h-8 text-gray-400"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                            </div>
                                            <h5>No items found</h5>
                                            <p className="text-muted">
                                                Try adjusting your search or filter to find what you're
                                                looking for.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {paginatedData.length > 0 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            )}
        </div>
    );
}

export default CustomTable;