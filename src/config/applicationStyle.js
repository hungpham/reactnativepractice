import {
  Platform
} from 'react-native';

import Metrics from './metrics';
import Colors from './colors';

const ApplicationStyles = {
  splashScreen: {
    flex: 1,
    width: null,
    height: null
  },
  mainContent: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    alignSelf: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    height: 60,
    backgroundColor: Colors.blue,
    borderColor: Colors.buttonBackground,
    borderWidth: 0,
    alignItems: "center",
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18
  },
  inputField: {
    flex: 1,
    paddingHorizontal: Metrics.padding,
    color: Colors.white,
    backgroundColor: Colors.transparent
  },
  iconInputField: {
    height: Metrics.icons.small,
    width: Metrics.icons.small,
    resizeMode: 'contain'
  },
  leftNavigationItem: {
    marginLeft: Metrics.margin,
    marginTop: Metrics.margin
  },
  rightNavigationItem: {
    marginRight: Metrics.margin,
    marginTop: Metrics.margin
  },
  iconNavigationItem: {
    height: Metrics.icons.medium,
    width: Metrics.icons.small,
    resizeMode: 'contain'
  },
  halfHeight: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quarterHeightWithLogo: {
    flex: .25,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  quarterHeight: {
    flex: .25,
  },
  threeQuarterHeight: {
    flex: .75,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default ApplicationStyles;
