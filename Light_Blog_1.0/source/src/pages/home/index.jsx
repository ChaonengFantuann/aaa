import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

class Home extends React.Component {
  render() {
    // console.log(`Home: ${this.props.article}`);
    return (
      <>
      <div>{this.props.article.map((item, index) => <li key={index}><Link to={`/detail/${index}`}>{item.title}</Link></li>)}</div>
      <button><Link to={"/new"}>新建博文</Link></button>
      </>
    )
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return state;
}

export default connect(mapStateToProps)(Home)