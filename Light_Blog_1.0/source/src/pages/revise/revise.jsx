import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Revise extends React.Component {

  constructor(props) {
    super(props)
    // console.log(this.props.article[props.index].title);
    // console.log(props.index);
    this.state = {
      index: props.index,
      title: this.props.article[props.index].title,
      text: this.props.article[props.index].text
    }
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

  handeleClick = () => {
    this.props.reviseAction(this.state)
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
        cols="30" 
        rows="10"
        placeholder="请输入本文的正文" 
        value={this.state.text}
        onChange={this.changeText}
        />
      <br />
      <button onClick={this.handeleClick}><Link to={`/detail/${this.state.index}`}>保存</Link></button>
      </>
    )
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    reviseAction: (value) => {
      dispatch({
        type: "revise_action",
        state: value
      })
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Revise)