import React from 'react';

class AutoComplete extends React.Component {
  constructor() {
    super();
    this.state = {
      inputVal: ""
    };
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ inputVal: e.target.value });
  }

  handleClick(e) {
    this.setState({ inputVal: e.target.innerText });
  }

  render() {
    let namesList = this.props.data.filter(name => {
        return name.toLowerCase().startsWith(this.state.inputVal.toLowerCase());
    });

    namesList = namesList.map((name,i) => {
      return (
        <li key={`${name}-${i}`}
            onClick={(e) => this.handleClick(e)}
        
        >{name}</li>
      );
    });


    return (
      <div>
        <form>
          <input onChange={(e) => this.handleChange(e)} 
                 type="text"
                 value={this.state.inputVal} />
        </form>
        <ul> 
          {namesList}
        </ul>
      </div>
    );
  }
}

export default AutoComplete;