import React from "react";

function Todolist(props) {



  return (
    <div className="flex items-center justify-between mt-3 text-gray-900">
      <li className="font-semibold text-xl ">{props.text}</li>
      <button onClick={()=>{props.onSelect(props.id)}} className="flex-no-shrink p-1 border-2 rounded-md text-teal border-teal hover:text-white hover:bg-red-500 ease-in duration-200">
        Remove
      </button>
    </div>
  );
}

export default Todolist;
