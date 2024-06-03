import React from "react";
import ModelUpload from "./ModelUpload";

const UploadCard = (props) => {
  // const { imgurl, desc } = props;
  // const descwords = desc.split(" ");
  return (
    <>
      <ModelUpload imgurl={props.imgurl} desc={props.desc} />
    </>
    // <div className="card">
    //   <div className="card-img">
    //     <img src={imgurl} alt="youtube" />
    //   </div>
    //   <div className="card-desc">
    //     <h3>
    //       {descwords[0]}
    //       <br />
    //       {descwords.splice(1, descwords.length).join(" ")}
    //     </h3>
    //   </div>
    // </div>
  );
};

export default UploadCard;
