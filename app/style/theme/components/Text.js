// @flow

import variable from './../variables/platform'

export default (variables /* : * */ = variable) => {
  const textTheme = {
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize,
    },
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
  }

  return textTheme
}
