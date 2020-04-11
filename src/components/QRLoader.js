import React from "react";
import { setDataFromLink } from "../logic/QRLogic";
import { Redirect, useParams } from "react-router-dom";

const QRLoader = () => {
  const { data } = useParams();
  setDataFromLink(JSON.parse(decodeURIComponent(data)));
  return <Redirect to="/medical" />;
};

export default QRLoader;
