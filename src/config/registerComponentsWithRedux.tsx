//리덕스
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from '../modules';

const Store = createStore(rootReducer);

//컴포넌트를 네비게이션에 등록
import MainScreen from '../screens/MainScreen';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';

import FirstScreenContainer from '../containers/FirstScreenContainer';
import MainScreenContainer from '../containers/MainScreenContainer';

import {Navigation} from 'react-native-navigation';

const registerComponentsWithRedux = () => {
  Navigation.registerComponentWithRedux(
    `src.screens.MainScreen`,
    () => MainScreenContainer,
    Provider,
    Store,
  );
  Navigation.registerComponentWithRedux(
    `src.screens.FirstScreen`,
    () => FirstScreenContainer,
    Provider,
    Store,
  );
  Navigation.registerComponentWithRedux(
    `src.screens.SecondScreen`,
    () => SecondScreen,
    Provider,
    Store,
  );
};

export default registerComponentsWithRedux;
