import React from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import Header from './Jumbotron';

const width = window.screen.width;
let circleSize = width > 768 ? 1 : 0.4;

class Vanta extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = HALO({
      el: this.vantaRef.current,
      size: circleSize,
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div ref={this.vantaRef}>
        <Header />
      </div>
    );
  }
}
export default Vanta;
