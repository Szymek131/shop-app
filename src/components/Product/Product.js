import styles from './Product.module.scss';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(0);

  const getPrice = useMemo( () => {
    const totalPrice = props.basePrice + currentPrice;
    return totalPrice
  }, [props.basePricem, currentPrice])

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=========');
    console.log('Name: ', props.title);
    console.log('Price: ', getPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          currentColor={currentColor}
          currentSize={currentSize}
          currentPrice={currentPrice}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          handleSubmit={handleSubmit}
          basePrice={props.basePrice}
        />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;