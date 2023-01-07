import React, { useState } from "react";
import Todolist from "./Todolist";

function Todo() {
  const [task, setTask] = useState("");
  const [lists, setLists] = useState([]);

  const ItemEvent = (event) => {
    setTask(event.target.value);
  };

  const taskList = () => {
    setLists((oldItems) => {
      return [...oldItems, task];
    });
    setTask("");
  };

  const ItemDelete = (id) => {
    setLists((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="h-200 w-full flex items-center justify-center font-sans">
      <div className="bg-white mt-[5%] rounded-md shadow-xl p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <h1 className=" text-center font-semibold text-2xl">Todo List</h1>
          <div className="flex mt-4">
            <input
              value={task}
              onChange={ItemEvent}
              className="shadow outline-none appearance-none border rounded w-full py-2 px-3 mr-4"
              placeholder="Add Todo"
            />
            <button
              onClick={taskList}
              className="flex-no-shrink p-2 border-2 rounded text-teal 
              border-teal hover:text-white hover:bg-green-500 ease-in duration-200"
            >
              Add
            </button>
          </div>
        </div>
        <div>
          <div >
            <ol>
              {lists.map((list, index) => {
                return (
                  <div>
                    <Todolist
                      text={list}
                      key={index}
                      id={index}
                      onSelect={ItemDelete}
                    />
                  </div>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
