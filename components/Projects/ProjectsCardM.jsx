import React from "react";
import Image from 'next/image'
const ProjectsCardM = ({ item }) => {
  return (
    <div>
      <div className="card">
        <Image src={item.image} width={500} height={500} alt="image" />
        <div className="card-body">
          <h2>{item.name}</h2>

          <h5>{item.description}</h5>
        </div>
      </div>
    </div>
  );
  };

export default ProjectsCardM;
