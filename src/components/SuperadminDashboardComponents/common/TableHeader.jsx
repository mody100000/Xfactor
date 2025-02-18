import { Search } from 'lucide-react';

const TableHeader = ({
    title,
    onSearch,

}) => (
    <div className="mb-4">
        <h2 className="h4 fw-semibold text-dark">All {title}</h2>
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
            <div className="position-relative w-100" style={{ maxWidth: '24rem' }}>
                <Search className="position-absolute start-0 top-50 translate-middle-y text-secondary" style={{ left: '10px', width: '20px', height: '20px' }} />
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => onSearch?.(e.target.value)}
                    className="form-control ps-4"
                />
            </div>
        </div>
    </div>
);

export default TableHeader;
