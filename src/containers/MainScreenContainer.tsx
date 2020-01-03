import React from 'react';
import {connect} from 'react-redux';
import MainScreen from '../screens/MainScreen';

import {increase, decrease} from '../modules/counter';

const mapStateToProps = state => ({state});

const mapDispatchToProps = dispatch => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
