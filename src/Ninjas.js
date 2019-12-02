import React from "react";
const Ninjas = props => {
  console.log(props);
  const ninjas = props.ninjas;
  const deleteNinja = props.deleteNinja;
  const ninjaList = ninjas.map(ninja => {
    return (
      <div key={ninja.id}>
        <div>name:{ninja.name}</div>
        <div>age:{ninja.age}</div>
        <div>belt:{ninja.belt}</div>
        <button
          onClick={() => {
            deleteNinja(ninja.id);
          }}
        >
          DeleteNinja
        </button>
      </div>
    );
  });
  console.log("ninjaList", ninjaList);
  return <div>{ninjaList}</div>;
};

export default Ninjas;
