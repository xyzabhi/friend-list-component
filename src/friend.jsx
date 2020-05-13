import React, { Component } from "react";
import "./friend.css";

export default class Friend extends Component {
  //ES5 Method to bind state with function
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // //ES6 Method to bind state with function
  render() {
    const { id, img, name, age, country } = this.props.info;
    const { handleDelete } = this.props.handleDelete;
    return (
      <div className="friend">
        <img src={img} alt="friend_image" />
        <h2>{name}</h2>
        <p>{age}</p>
        <p>{country}</p>
        <img
          src="https://img.icons8.com/pastel-glyph/2x/cancel.png"
          alt="unfriend"
          width="40px"
          height="40px"
          onClick={() => handleDelete(id)}
        />
      </div>
    );
  }
}
