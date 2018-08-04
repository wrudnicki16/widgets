import React from 'react';
import '../stylesheets/tab.css';
// import '../stylesheets/autocomplete.css';
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIdx: 0
    };
  }
  render() {
    let data = this.props.data;
    let tabs = data.map(((d, i) => {
      return (
        <h1 className="tab" 
            key={`tab-${i}`}
            onClick={() => this.setState({ activeIdx: i}) }
            id={i === this.state.activeIdx ? "active" : ""}>
            {d.title}</h1>
      );
    }));
    let tabContent = data[this.state.activeIdx]["content"];

    return (
      <div>
        <h1>Tabs</h1>
        <div id="tab-all">
          <ul className="tabs">
            {tabs}
          </ul>
          <article>{tabContent}</article>
        </div>
      </div>
    );
  }
}

export default Tab;