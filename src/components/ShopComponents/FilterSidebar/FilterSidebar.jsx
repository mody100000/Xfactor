import React from 'react';
import styles from './FilterSidebar.module.css';

const FilterSidebar = () => {
  return (
    <div className={styles.filterSidebar}>
      <h4>Get It Fast!</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="fastDelivery" />
        <label htmlFor="fastDelivery">3-5 Day Production</label>
      </div>
      <h4>Featured</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="squadPicks" />
        <label htmlFor="squadPicks">Squad's Top Picks</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="new" />
        <label htmlFor="new">New</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="onSale" />
        <label htmlFor="onSale">On Sale</label>
      </div>
      <h4>Filter By Category</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="performanceTees" />
        <label htmlFor="performanceTees">Performance Tees</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="casualTees" />
        <label htmlFor="casualTees">Casual Tees</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="hoodies" />
        <label htmlFor="hoodies">Hoodies</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="headwear" />
        <label htmlFor="headwear">Headwear</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="polos" />
        <label htmlFor="polos">Polos</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Pullovers</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Accessories</label>
      </div>
      <h4>Department</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Men</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Women</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Girls</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Boys</label>
      </div>
      <h4>Colors</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <span className={styles.grayColor}></span>
        <label htmlFor="pullovers">Gray</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <span className={styles.blackColor}></span>
        <label htmlFor="pullovers">Black</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <span className={styles.redColor}></span>
        <label htmlFor="pullovers">Red</label>
      </div>
      <p className={styles.link}>See More</p>
      <h4>Brand</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Wilson</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Adidas</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Under Armour</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Nike</label>
      </div>
      <p className={styles.link}>See More</p>
      <h4>Filter By Price</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">$5 - $25</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">$25 - $50</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">$75 - $100</label>
      </div>
      <h4>Decoration Type</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Embroidered</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="pullovers" />
        <label htmlFor="pullovers">Printed</label>
      </div>
    </div>
  );
};

export default FilterSidebar;
