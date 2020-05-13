import React, { Component } from "react";
import friendDatas from "./friendData";
import Friend from "./friend";
export default class Friendlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends_list: friendDatas,
    };
  }
  handleDelete = (id) => {
    console.log(id);

    const sortedList = this.state.friends_list.filter((item) => item.id !== id);
    this.setState({ friends_list: sortedList });
  };

  render() {
    return (
      <section>
        <h3>My friend list</h3>
        {this.state.friends_list.map((item) => (
          <Friend key={item.id} info={item} handleDelete={this.handleDelete} />
        ))}
      </section>
    );
  }
}
