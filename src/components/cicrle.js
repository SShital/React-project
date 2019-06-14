import React from 'react'

function Cicrle(props) {
return (
    <div style={{ }}>
    <div style={{ marginTop: 20, display: "flex" }}>
        <div style={{ width: 100 }}>{props.children}</div>
        <div style={{ marginLeft: 30 }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};


export default Cicrle;