import { Component } from "react";

export class ClassComponent extends Component {
  state = {
    name: "", 
    results: {},
  };
  onChange = ({target}) => {
    const newName = target.value;
    this.setState({ name: newName }, () => {
      fetch(`https://api.genderize.io?name=${newName}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ results: { ...res } });
      });
    });
  };
  render() {
    const { name, results } = this.state;
    return (
      <div>
        <input value={name} onChange={this.onChange}></input>
        {Object.keys(results).length ? (
            <>  
                <br/>
                <span>name: {results.name}</span><br/>
                <span>gender: {results.gender}</span><br/>
                <span>count: {results.count}</span><br/>
            </>
        ) : null}
      </div>
    );
  }
}
