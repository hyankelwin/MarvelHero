import { MARVEL } from 'style/colors';

export default {
  'NativeBase.ViewNB': {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    'NativeBase.ViewNB': {
      '.containerImg': {
        alignItems: 'center',
      },
      'NativeBase.ViewNB': {
        '.containerText': {
          flex: 1,
          padding: 10,
          marginBottom: 80,
          'NativeBase.Text': {
            '.title': {
              fontSize: 20,
              color: '#FFF',
              fontWeight: '700',
              textAlign: 'center',
            },
            '.subTitle': {
              fontSize: 18,
              color: '#FFF',
              textAlign: 'center',
            },
          },
        },
        '.containerButton': {
          padding: 20,
          'NativeBase.ViewNB': {
            '.primary': {
              marginTop: 20,
              borderRadius: 50,
              paddingVertical: 18,
              backgroundColor: MARVEL,
              'NativeBase.Text': {
                color: '#FFF',
                textAlign: 'center',
              },
            },
            '.secondary': {
              marginTop: 10,
              borderWidth: 2,
              borderRadius: 50,
              paddingVertical: 15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              borderColor: MARVEL,
              'NativeBase.Text': {
                color: '#FFF',
              },
            },
          },
        },
      },
    },
  },
  img: {
    resizeMode: 'contain',
    height: 200,
    width: 300,
  },
};
