import React from "react";
import { useParams } from "react-router-dom";

import Revise from "./revise";


export default function Index() {
  const params = useParams();
  return (
    <>
    <Revise index={params.id}/>
    </>
  )
}