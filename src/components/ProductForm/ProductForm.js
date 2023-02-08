import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize 
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        setCurrentPrice={props.setCurrentPrice}
        getPrice={props.getPrice}
      />
      <OptionColor
        colors={props.colors}
        setCurrentColor={props.setCurrentColor}
        currentColor={props.setCurrentColor}
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
  currentSize: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default ProductForm;