import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";

import Delet from "./delet"

let txt;
function Detail() {
  const params = useParams()
  // console.log(txt.article[0].text);
  return (
    <>
    <h1>{txt.article[params.id].title}</h1>
    <p>{txt.article[params.id].text}</p>
    <button><Link to={`/revise/${params.id}`}>修改博文</Link></button>
    <Delet index={params.id}/>
    <button><Link to={"/"}>返回首页</Link></button>
    </>
  )
}

const mapStateToProps = state => {
  // console.log(state);
  txt = state;
  return state;
}

export default connect(mapStateToProps)(Detail)