//기본 네비게이션 경로 설정

import {Navigation} from 'react-native-navigation';

export const defaultNavigationPath = () => {
  return Navigation.setRoot({
    root: {
      sideMenu: {
        id: 'SideMenu',
        left: {
          component: {
            id: 'leftSideMenu',
            name: 'src.screens.SecondScreen',
          }, //component,
        }, //left
        right: {
          component: {
            id: 'rightSideMenu',
            name: 'src.screens.SecondScreen',
          }, //component
        }, //right
        center: {
          bottomTabs: {
            id: 'BottomTabs',
            children: [
              {
                stack: {
                  id: 'FirstBottomTab',
                  children: [
                    {
                      component: {
                        name: 'src.screens.FirstScreen',
                      }, //component
                    },
                  ], //children
                  options: {
                    topBar: {
                      leftButtons: [
                        {
                          id: 'sideMenu',
                          icon: require('../../Images/test.png'),
                        },
                      ],
                      rightButtons: [
                        {
                          id: 'search',
                          icon: require('../../Images/test.png'),
                        },
                      ],
                    }, //topBar
                    bottomTab: {
                      text: 'FirstBottomTab',
                      icon: require('../../Images/test.png'),
                    },
                    // fab: {
                    //   id: 'fadButton',
                    //   icon: require('./Images/test.png'),
                    // },
                  }, //options
                }, //stack
              },
              {
                stack: {
                  id: 'FirstBottomTab',
                  children: [
                    {
                      component: {
                        name: 'src.screens.FirstScreen',
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      leftButtons: [
                        {
                          id: 'sideMenu',
                          icon: require('../../Images/test.png'),
                        },
                      ],
                      rightButtons: [
                        {
                          id: 'search',
                          icon: require('../../Images/test.png'),
                        },
                      ],
                    },
                    bottomTab: {
                      text: 'FirstBottomTab',
                      icon: require('../../Images/test.png'),
                    },
                    // fab: {
                    //   id: 'fadButton',
                    //   icon: require('./Images/test.png'),
                    // },
                  },
                },
              },
              {
                stack: {
                  id: 'FirstBottomTab',
                  children: [
                    {
                      component: {
                        name: 'src.screens.FirstScreen',
                      },
                    },
                  ],
                  options: {
                    topBar: {
                      leftButtons: [
                        {
                          id: 'sideMenu',
                          icon: require('../../Images/test.png'),
                        },
                      ],
                      rightButtons: [
                        {
                          id: 'search',
                          icon: require('../../Images/test.png'),
                        },
                      ],
                    },
                    bottomTab: {
                      text: 'FirstBottomTab',
                      icon: require('../../Images/test.png'),
                    },
                    // fab: {
                    //   id: 'fadButton',
                    //   icon: require('./Images/test.png'),
                    // },
                  },
                },
              },
            ], //children
          }, //bottomTabs
        }, //senter
      }, //sideMenu,
    },
  });
};

export default defaultNavigationPath;
