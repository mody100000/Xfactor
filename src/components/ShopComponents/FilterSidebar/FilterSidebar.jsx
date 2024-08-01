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
        <input type="checkbox" id="accessories" />
        <label htmlFor="accessories">Accessories</label>
      </div>
      <h4>Department</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="men" />
        <label htmlFor="men">Men</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="women" />
        <label htmlFor="women">Women</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="girls" />
        <label htmlFor="girls">Girls</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="boys" />
        <label htmlFor="boys">Boys</label>
      </div>
      <h4>Colors</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="gray" />
        <span className={styles.grayColor}></span>
        <label htmlFor="gray">Gray</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="black" />
        <span className={styles.blackColor}></span>
        <label htmlFor="black">Black</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="red" />
        <span className={styles.redColor}></span>
        <label htmlFor="red">Red</label>
      </div>
      <p className={styles.link}>See More</p>
      <h4>Brand</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="wilson" />
        <label htmlFor="wilson">Wilson</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="adidas" />
        <label htmlFor="adidas">Adidas</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="underArmour" />
        <label htmlFor="underArmour">Under Armour</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="nike" />
        <label htmlFor="nike">Nike</label>
      </div>
      <p className={styles.link}>See More</p>
      <h4>Filter By Price</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="price1" />
        <label htmlFor="price1">$5 - $25</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="price2" />
        <label htmlFor="price2">$25 - $50</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="price3" />
        <label htmlFor="price3">$75 - $100</label>
      </div>
      <h4>Decoration Type</h4>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="embroidered" />
        <label htmlFor="embroidered">Embroidered</label>
      </div>
      <div className={styles.checkboxGroup}>
        <input type="checkbox" id="printed" />
        <label htmlFor="printed">Printed</label>
      </div>
    </div>
  );
};

export default FilterSidebar;
