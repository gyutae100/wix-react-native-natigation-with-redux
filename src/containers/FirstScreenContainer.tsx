import React from 'react';
import {connect} from 'react-redux';
import FirstScreen from '../screens/FirstScreen';

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

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);
