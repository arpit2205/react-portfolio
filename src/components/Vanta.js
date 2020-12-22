import React from 'react';
import HALO from 'vanta/dist/vanta.halo.min';
import Header from './Jumbotron';

class Vanta extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = HALO({
      el: this.vantaRef.current,
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
