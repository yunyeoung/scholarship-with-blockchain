import React, {Component} from "react";

const MyApplyDetail = ({match})=>{

  return(
    <div>
      {match.params.id}
    </div>
  );
}

export default MyApplyDetail;
