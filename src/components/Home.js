import React, {
  Component
} from 'react';
import PropTypes from 'prop-types'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.age = props.age;
    this.state = {
      age: this.props.age,
      status: 0,
      homeLink: props.initName,
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000)
  }

  onMakeOlder() {
    this.age += 3;
    this.setState({
      age: this.state.age + 3
    })
    console.log(this);
  }

  handleGreet() {
    this.props.greet(this.state.age)
  }

  OnChangeLink() {
    this.props.changeLink(this.state.homeLink);
  }

  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <div>your name is { this.props.name }, your age is { this.state.age }</div>
            <p>Staus:{this.state.status}</p>
            <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">make me older</button>
            <br />
            <hr />
            <button onClick={this.handleGreet.bind(this)} className="btn btn-info">Greet</button>
            <hr />
            <input  
              type="" 
              defaultValue={this.props.initName}
              value={ this.state.initName } 
              onChange={(event) => this.onHandleChange(event)} 
            />
            <hr />
              <button onClick={this.OnChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  hobbies: PropTypes.func,
  user: PropTypes.object,
  greet: PropTypes.func,
  initName: PropTypes.string,
}