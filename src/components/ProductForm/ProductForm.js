import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = 
({ sizes, currentSize, currentPrice, setCurrentSize, setCurrentPrice,
   basePrice, colors, setCurrentColor, currentColor, handleSubmit}) => {

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize 
        sizes={sizes}
        currentSize={currentSize}
        currentPrice={currentPrice}
        setCurrentSize={setCurrentSize}
        setCurrentPrice={setCurrentPrice}
        basePrice={basePrice}
      />
      <OptionColor
        colors={colors}
        setCurrentColor={setCurrentColor}
        currentColor={currentColor}
      />
      <Button className={styles.button} type='submit'>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  )
};

ProductForm.propTypes = {
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentPrice: PropTypes.number.isRequired,
  currentSize: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ProductForm;