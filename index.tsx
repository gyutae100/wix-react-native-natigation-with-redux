//네비게이션
import {Navigation} from 'react-native-navigation';
import registerComponentsWithRedux from './src/config/registerComponentsWithRedux';
import {defaultNavigationPath} from './src/config/navigator';

//컴포넌트를 네비게이션 등록
registerComponentsWithRedux();

Navigation.events().registerAppLaunchedListener(() => {
  //기본 경로 설정
  defaultNavigationPath();
});
