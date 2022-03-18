import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


class Delet extends React.Component {
  constructor(props) {
    super(props)
    // console.log(props.index);
    this.state = {
      index: props.index
    }
  }

  handleClick = () => {
    // console.log(this.state.index);
    this.props.delAction(this.state.index)
  }

  render() {
    return (
      <button onClick={this.handleClick}><Link to={"/"}>删除博文</Link></button>
    )
  }
}

const mapDisPatchToProps = (dispatch) => {
  return {
    delAction: (value) => {
      dispatch({
        type: "del_action",
        index: value
      })
    }
  }
}

export default connect(null, mapDisPatchToProps)(Delet)