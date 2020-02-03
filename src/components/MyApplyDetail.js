import React, {Component} from "react";

const ScholarDetail = ({match})=>{

  return(
    <div>
      {match.params.id}
    </div>
  );
}

export default ScholarDetail;
