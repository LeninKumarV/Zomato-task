import React, { useState } from "react";

function Comp({key,question,answer}) {

  const [show,setShow]=useState(false);

  const handlClick=()=>{
    setShow(!show)
    console.log("jhbhb")
  }

  return (
    <div className="comp">
          <section key={key}>
            <div className="head" onClick={handlClick}>{question}</div>
            <div className={`body ${show ? 'active' : ''}`}>{answer}</div>
          </section>
    </div>
  );
}

export default Comp;
