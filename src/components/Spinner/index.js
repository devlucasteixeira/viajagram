import PropTypes from 'prop-types';
import { StyledSpinner } from './styles';

const Spinner = ({ size }) => {
  return <StyledSpinner size={size} />;
};

Spinner.propTypes = {
  size: PropTypes.number,
};

Spinner.DefaultProps = {
  size: 32,
};

export default Spinner;
