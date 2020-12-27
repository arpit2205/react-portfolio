import React from 'react';
import App from './App';

class ScrollIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    console.log(scrolled);

    this.setState({
      scrolled: scrolled,
    });
  };

  render() {
    const progressContainerStyle = {
      background: '#131A43',
      //   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
      height: '8px',
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      zIndex: 99,
    };

    const progressBarStyle = {
      height: '8px',
      background: '#017CFE',
      width: this.state.scrolled,
    };

    return (
      <div>
        <div className="progress-container" style={progressContainerStyle}>
          <div className="progress-bar" style={progressBarStyle} />
        </div>
        <div className="content">
          <App />
        </div>
      </div>
    );
  }
}

export default ScrollIndicator;
