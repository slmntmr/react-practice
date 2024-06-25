import React from 'react';
import './my-comp.css'; // CSS dosyasını import ediyoruz

const MyComp = () => {
  const sayHello = () => {
    alert("Hello there!");
  };

  return (
    <div>
      <div className="clickable-div" onClick={sayHello}>
        Say Hello
      </div>
    </div>
  );
};

export default MyComp;
