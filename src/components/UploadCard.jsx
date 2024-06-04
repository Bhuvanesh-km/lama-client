import React from "react";
import ModelUpload from "./ModelUpload";

const UploadCard = (props) => {
  return (
    <>
      <ModelUpload imgurl={props.imgurl} desc={props.desc} />
    </>
  );
};

export default UploadCard;
