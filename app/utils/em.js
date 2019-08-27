import { Dimensions } from 'react-native';

// Precalculate Device Dimensions for better performance
const { width: x, height: y } = Dimensions.get('window');

// Calculating ratio from iPhone breakpoints
const ratioX = () => {
  if (x > 320 && x < 375) return 0.87;
  if (x <= 320) return 0.8;
  return 1;
};

const ratioY = () => {
  if (y > 480 && y < 568) return 0.875;
  if (y < 480) return 0.75;
  return 1;
};

// We set our base font size value
const base_unit = 15;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX();

export { ratioX, ratioY };

// We add an em() shortcut function
export default function em(value) {
  return unit * value;
}
