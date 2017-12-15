import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

/*
@connect(
    state => ({count: state.counter.count}),
    dispatch => bindActionCreators({increment}, dispatch))
*/

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
};

//export default connect(mapStateToProps, increment);

export default class CounterButton extends Component {
  props = {
    className: ''
  }

  render() {
    const {count, store} = this.props; // eslint-disable-line no-shadow
    let {className} = this.props;
    className += ' btn';
    return (
      <button className={className} onClick={store}>
        You have clicked me {count} time{count === 1 ? '' : 's'}.
      </button>
    );
  }
}

CounterButton.propTypes = {
  count: PropTypes.number,
  store: PropTypes.func.isRequired,
  className: PropTypes.string
}
