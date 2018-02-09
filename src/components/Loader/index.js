import React from 'react';
import PropTypes from 'prop-types';
import bem from 'bem-cn';

import './style.css';

const block = bem('loader');

export default class Loader extends React.PureComponent {
  static propTypes = {
    active: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = { animating: !!props.active };
  }

  componentWillReceiveProps(props) {
    const { active } = props;

    if (active !== undefined) {
      this.setState({ animating: active });
    }
  }

  getBemMods() {
    const mods = {
      active: !!this.props.active
    };

    return mods;
  }

  handleTransitionEnd = event => {
    if (event.propertyName === 'opacity' && event.currentTarget === event.target) {
      this.setState({ animating: false });
    }
  };

  renderBackdrop() {
    const { animating } = this.state;
    const mods = { active: !!this.props.active, animating };

    return <div className={block('backdrop', mods)()} onTransitionEnd={this.handleTransitionEnd} />;
  }

  render() {
    return (
      <div>
        <div className={block(this.getBemMods())()}>
          <div className={block('bar', { primary: true })()}>
            <div className={block('bar__inner')()} />
          </div>
          <div className={block('bar', { secondary: true })()}>
            <div className={block('bar__inner')()} />
          </div>
        </div>
        {this.renderBackdrop()}
      </div>
    );
  }
}
