import React, { useState } from 'react';
import CustomPagination from "../../components/common/Pagination/Pagination";
import FilterSidebar from "../../components/ShopComponents/FilterSidebar/FilterSidebar";
import IntroShop from "../../components/ShopComponents/IntroShop/IntroShop";
import ProductCard from "../../components/ShopComponents/ProductCard/ProductCard";
import productsData from '../../components/ShopComponents/productsData/productsData';
import styles from "./Shop.module.css";

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12; // Set items per page to 15
  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  const currentItems = productsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <IntroShop />
      <div className={`container-fluid ${styles.shopPage}`}>
        <div className="row">
          <div className="col-md-3 col-12 order-md-2 mb-3">
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
