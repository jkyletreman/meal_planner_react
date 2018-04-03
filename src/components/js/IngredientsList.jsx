import React from 'react';

const IngredientsList = (props) => {
  const ids = [] || 'null';
  const arrayArrayObject = Object.values(props.week);

  for (var i = 0; i < arrayArrayObject.length; i++) {
    var innerArray = arrayArrayObject[i];

    for (var j = 0; j < innerArray.length; j++) {
      var innerObject = innerArray[j];
      var id = innerObject.id;
      ids.push(id);
    }
  }
  
  return <p>{ids}</p>
};

export default IngredientsList;
