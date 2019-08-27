import em from 'utils/em';
import { BASE_COLOR } from 'style/colors';

export default {
  'NativeBase.Header': {
    'NativeBase.Left': {
      flex: 0,
      width: 60,
      'NativeBase.Icon': {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: em(1.8),
        color: '#FFF',
      },
    },
    'NativeBase.Body': {
      alignItems: 'center',
      'NativeBase.Title': {
        fontWeight: '700',
        color: '#FFF',
      },
      'NativeBase.Button': {
        paddingBottom: 0,
        paddingTop: 5,
        height: 25,
        'NativeBase.Title': {
          fontWeight: '700',
        },
      },
      flex: 1,
    },
    'NativeBase.Right': {
      flex: 0,
      width: 60,
      'NativeBase.Button': {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        '.transparent': {
          borderRadius: 0,
          'NativeBase.Text': {
            margin: 0,
            fontFamily: 'Roboto-Thin',
            fontWeight: '300',
            paddingLeft: 0,
            paddingRight: 0,
          },
          'NativeBase.Icon': {
            fontSize: em(1.8),
            color: '#FFF',
          },
          margin: 0,
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },
  },
  'NativeBase.Left': {
    'NativeBase.Button': {
      'NativeBase.Icon': {
        color: '#FFF',
      },
    },
  },
  '.alignLeft': {
    'NativeBase.Header': {
      'NativeBase.Body': {
        alignItems: 'flex-start',
      },
    },
  },
  '.noLeft': {
    paddingLeft: 20,
    'NativeBase.Header': {
      'NativeBase.Body': {
        alignItems: 'flex-start',
      },
    },
  },
  '.black': {
    backgroundColor: '#000',
    borderBottomColor: '#000',
  },
  '.withBorder': {
    borderBottomWidth: 1,
  },
  zIndex: 1,
  height: 60,
  alignItems: null,
  justifyContent: null,
  backgroundColor: BASE_COLOR,
  borderBottomColor: 'transparent',
  elevation: 0,
  shadowColor: null,
  shadowOffset: null,
  shadowRadius: null,
  shadowOpacity: null,
};
