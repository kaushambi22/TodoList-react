import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>
    {
        console.log("I am on delete of todo",todo);
        // setTodos(todo => todo.filter((e)=>{
        //   return e!== todo;
        // }));
    }

    const addTodo = (title, desc) =>{
      console.log("I am adding this todo", title, desc)
      let sno = todo[todo.length-1].sno+1;
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc
      }
      setTodos([...todo, myTodo]);
      console.log(myTodo);
    }
    const [todo, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
      desc: "You need to do this job1 done!!"
    },
    {
      sno: 2,
      title: "Go to the zxcvb",
      desc: "You need to do this job2 done"
    }
  ]);
  return (
    <><Header title="MyTodosList" searchbar = {true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todo = {todo} onDelete={onDelete}/>
    <Footer /></>
  );
}

export default App;
