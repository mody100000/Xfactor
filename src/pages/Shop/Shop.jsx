import React, { useState } from 'react';
import CustomPagination from "../../components/common/Pagination/Pagination";
import FilterSidebar from "../../components/ShopComponents/FilterSidebar/FilterSidebar";
import IntroShop from "../../components/ShopComponents/IntroShop/IntroShop";
import ProductCard from "../../components/ShopComponents/ProductCard/ProductCard";
import productsData from '../../components/ShopComponents/productsData/productsData';
import styles from "./Shop.module.css";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery] = useState('');

  const itemsPerPage = 12;
  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <IntroShop />
      <div className={`container-fluid ${styles.shopPage}`}>
        <div className="row">
          <div className="col-md-3 col-12 order-md-2 mb-3">
          <div className="col-md-12 col-12 order-md-1 mb-3">
          <div className="input-group rounded">
         <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <span className="input-group-text border-0" id="search-addon">
     <i className="fas fa-search"></i>
      </span>
     </div>
          </div>
            <FilterSidebar />
          </div>
          <div className="col-md-9 col-12 order-md-1">
            <div className="row">
              {currentItems.map((product, index) => (
                <div className="col-md-4 col-sm-6 mb-4" key={index}>
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
