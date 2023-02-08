import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import PropTypes from 'prop-types';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const getPrice = () => {
    return setCurrentPrice(prevValue => prevValue + props.basePrice);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('=========');
    console.log('Name: ', props.title);
    console.log('Price: ', currentPrice);
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm
          sizes={props.sizes}
          colors={props.colors}
          currentColor={currentColor}
          currentSize={currentSize}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          handleSubmit={handleSubmit}
          getPrice={getPrice}
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