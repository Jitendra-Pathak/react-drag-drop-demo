import React from "react";
import SimpleListDragDrop from "simplelistdragdrop";
import { SIDEBAR_DATA, DRAGLIST_DATA, TABS_DATA } from './constants';
import './App.css';
import Header from "./components/header";

function App() {
  const getDragRowAction = (data) => {
    return (
      <div className='customTemplate'>
        <span className='label'> {data.value} </span>
        <span className='btn' onClick={()=>{console.log('clicked', data)}}>DELETE</span>
      </div>
    )
  };

  const onDragStart = (data) => {
    console.log('sidebar onDragStart data', data);
  };

  const onDragOver = (data) => {
    console.log('sidebar onDragOver data', data);
  };

  const onDragEnd = (data) => {
    console.log('sidebar onDragEnd data', data);
  };

  

  return (
    <div className='container'>
      HELLO REACT
      <Header />
      <div className='sidebar'>
        <SimpleListDragDrop
          containerId='sidebarDropArea'
          containerClass='colDragCustomClass'
          options={SIDEBAR_DATA}
          onDragStartCallback={onDragStart}
          onDragOverCallback={onDragOver}
          onDragEndCallback={onDragEnd}
        />
      </div>
      {/* 

      <div className='content'>
        <h1 className="demoPageTitle">Drag and Drop Example </h1>

        <div className='exptext'>
          <b>Example 1 (Sidebar view): </b>
          <span>This is default example with default UI</span>
        </div>

        <div className='exptext'>
          <b>Example 2: </b>
          <span>
            This is with custom template for custom UI using 
            <b>"customTemplate"</b> prop with a Delete action.
          </span>
          <p>Also we made option disable from drag and drop using <b>"draggable"</b> key in data.</p>
        </div>
        <div className='wrapper vertical'>
          <SimpleListDragDrop
            containerId='verticalDropArea'
            containerClass='customClass'
            options={DRAGLIST_DATA}
            customTemplate={getDragRowAction}
            itemClass="customListItem"
            onDragStartCallback={onDragStart}
            onDragOverCallback={onDragOver}
            onDragEndCallback={onDragEnd}
          />
        </div>

        <div className='exptext'>
          <b>Example 3: </b>
          <span>Here we override Style using custom class with default component UI.</span>
        </div>

        <div className='wrapper horizontal'>
          <SimpleListDragDrop
            containerId='horizontalDropArea'
            containerClass='customClass'
            options={TABS_DATA}
            itemClass="customListItem"
            onDragStartCallback={onDragStart}
            onDragOverCallback={onDragOver}
            onDragEndCallback={onDragEnd}
          />
        </div>

      </div> */}
    </div>
  );
}

export default App;
