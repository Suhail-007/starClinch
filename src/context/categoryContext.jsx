import React from 'react';

const CategoryContext = React.createContext(() => {
  return {
    data: []
  }
});


export default CategoryContext