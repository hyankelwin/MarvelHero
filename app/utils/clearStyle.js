import computeProps from 'native-base/src/utils/computeProps';

export default style => computeProps({ style }, {}).style || {};
