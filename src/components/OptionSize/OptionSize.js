import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, setCurrentSize, setCurrentSizePrice, currentSize}) => {

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map( size => (
          <li key={shortid()}>
            <button type='button' onClick={() => { setCurrentSize(size.name); setCurrentSizePrice(size.additionalPrice)}} className={clsx(size.name === currentSize && styles.active)}>
              {size.name}
            </button>
          </li>))}
      </ul>
    </div>
  )
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentSizePrice: PropTypes.func.isRequired,
};

export default OptionSize;