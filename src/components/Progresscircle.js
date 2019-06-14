import React from 'react'

function Progresscircle(props) {
 const  percentage = 66;
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: 100 }}>{props.children}</div>
        <div style={{ marginLeft: 30 }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};


export default Progresscircle;


