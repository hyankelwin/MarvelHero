// @flow

import variable from './../variables/platform'

export default (variables /* : * */ = variable) => {
  const labelTheme = {
    '.focused': {
      width: 0,
    },
    fontFamily: variables.fontFamily,
    fontSize: 17,
  }

  return labelTheme
}
