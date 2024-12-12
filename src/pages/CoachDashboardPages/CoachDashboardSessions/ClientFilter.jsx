import React, { useState, useMemo } from 'react';
import styles from './ClientFilter.module.css';
import { clientData } from '../../../components/ClientsData/ClientsData';
import { useNavigate } from 'react-router-dom';

function ClientFilter() {
    const navigate = useNavigate();
    const [selectedClients, setSelectedClients] = useState([]);
    const [filters, setFilters] = useState({
        sport: '',
        location: '',
        search: ''
    });

    // Memoized filtering logic
    const processedClients = useMemo(() => {
        return clientData.filter(client => {
            const matchesSport = !filters.sport || client.sessionType === filters.sport;
            const matchesLocation = !filters.location || client.sessionLocation === filters.location;
            const matchesSearch = !filters.search ||
                client.coachName.toLowerCase().includes(filters.search.toLowerCase()) ||
                client.sessionType.toLowerCase().includes(filters.search.toLowerCase());
            return matchesSport && matchesLocation && matchesSearch;
        });
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const toggleClientSelection = (client) => {
        setSelectedClients(prev => {
            const isAlreadySelected = prev.some(selectedClient => selectedClient.id === client.id);
            return isAlreadySelected
                ? prev.filter(selectedClient => selectedClient.id !== client.id)
                : [...prev, client];
        });
    };

    const handleViewSelectedClients = () => {
        if (selectedClients.length > 0) {
            navigate('/coach-dashboard/client-filter/coach-sessions', {
                state: { clients: selectedClients }
            });
        }
    };

    // Get unique sports and locations for filter dropdowns
    const sports = [...new Set(clientData.map(client => client.sessionType))];
    const locations = [...new Set(clientData.map(client => client.sessionLocation))];

    return (
        <div>
            <div className={`row ${styles.filterContainer}`}>
                <div className="col-12 mb-4">
                    <div className="row g-3">
                        <div className="col-md-4">
                            <select
                                name="sport"
                                value={filters.sport}
                                onChange={handleFilterChange}
                                className={`form-select ${styles.filterInput}`}
                            >
                                <option value="">All Sports</option>
                                {sports.map(sport => (
                                    <option key={sport} value={sport}>{sport}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <select
                                name="location"
                                value={filters.location}
                                onChange={handleFilterChange}
                                className={`form-select ${styles.filterInput}`}
                            >
                                <option value="">All Locations</option>
                                {locations.map(location => (
                                    <option key={location} value={location}>{location}</option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input
                                type="text"
                                name="search"
                                value={filters.search}
                                onChange={handleFilterChange}
                                placeholder="Search clients or sports"
                                className={`form-control ${styles.filterInput}`}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-12 mb-3 d-flex justify-content-center">
                    {selectedClients.length > 0 && (
                        <button
                            className="btn btn-success my-3"
                            onClick={handleViewSelectedClients}
                        >
                            View {selectedClients.length} Selected Clients
                        </button>
                    )}
                </div>

                <div className="col-12">
                    <div className="row d-flex justify-content-center gap-2">
                        {processedClients.map(client => (
                            <div
                                key={client.id}
                                className={`col-md-2 mb-4  ${styles.cardWidth}`}
                                onClick={() => toggleClientSelection(client)}
                            >
                                <div
                                    className={`card ${styles.clientCard} ${selectedClients.some(c => c.id === client.id)
                                        ? styles.selectedClient
                                        : ''
                                        }`}
                                >
                                    <img
                                        src={client.img}
                                        alt={client.coachName}
                                        className={`card-img-top ${styles.clientCardImage}`}
                                    />
                                    <div className={`card-body ${styles.clientCardBody}`}>
                                        <h5 className="card-title">{client.coachName}</h5>
                                        <p className="card-text text-muted">{client.sessionType}</p>
                                        <div className="d-flex justify-content-between">
                                            <span>{client.sessionLocation}</span>
                                            <span>{client.time}</span>
                                        </div>
                                    </div>
                                    {selectedClients.some(c => c.id === client.id) && (
                                        <div className={styles.selectedOverlay}>
                                            ✓ Selected
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {processedClients.length === 0 && (
                        <div className={`col-12 ${styles.noResultsMessage}`}>
                            No clients found matching your filters.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ClientFilter;
