import IntroFAQ from "../../components/FAQComponents/IntroFAQ/IntroFAQ";
import styles from "./FAQ.module.css"
import { useState } from "react";
import productsData from './../../components/ShopComponents/productsData/productsData';
import FilterFAQ from './../../components/FAQComponents/FilterFAQ/FilterFAQ';
import MainFAQ from './../../components/FAQComponents/MainFAQ/MainFAQ';

const FAQ = () => {
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
        <IntroFAQ/>
        <div className={`container-fluid ${styles.shopPage}`}>
          <div className="row">
            <div className="col-md-9 col-12 order-md-1">
              <div className="row">
                <MainFAQ/>
              </div>
            </div>
            <div className="col-md-3 col-12 order-md-2 mb-3">
              <FilterFAQ/>
            </div>
          </div>
        </div>
      </> 
    );
}
 
export default FAQ;
