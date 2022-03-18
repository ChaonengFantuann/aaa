import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class New extends React.Component {

  state = {
    title: "",
    text: ""
  }

  changeTitle = e => {
    this.setState({
      title: e.target.value
    })
  }

  changeText = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = () => {
    this.props.newAction(this.state);
  }

  render() {
    return (
      <>
      <input 
        type="text" 
        placeholder="请输入博文的标题"
        value={this.state.title}
        onChange={this.changeTitle}
        />
      <br />
      <textarea 
        placeholder="请输入本文的正文" 
        cols="80" 
        rows="10" 
        value={this.state.text}
        onChange={this.changeText}
        />
      <br />
      <button onClick={this.handleClick}><Link to={"/"}>保存</Link></button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    newAction: (value) => {
      dispatch({
        type: "new_action",
        state: value
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(New)