import PropTypes from 'prop-types';

const If = props => (props.condition ? props.children() : null);

If.propTypes = {
  children: PropTypes.func.isRequired,
};

export default If;
