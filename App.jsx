// import { useState } from 'react';
import useLocalStorage from './Hook/useLocalStorage';
export default function App() {
  // const localFetch = localStorage.getItem('localData');
  // const data = localFetch ? JSON.parse(localFetch) : [];
  // const [listTodo, setListTodo] = useState(data);
  // function punchTask(formdata) {
  //   const getTodo = formdata.get('task');
  //   getTodo &&
  //     setListTodo(prev => {
  //       localStorage.setItem('localData', JSON.stringify([...prev, getTodo]));
  //       return [...prev, getTodo];
  //     });
  // }
  // function dltBox(e) {
  //   const dltGrab = e.target.closest('button').dataset.name;
  //   console.log(dltGrab);
  //   setListTodo(prev => {
  //     localStorage.setItem(
  //       'localData',
  //       JSON.stringify(prev.filter(ele => ele !== dltGrab)),
  //     );
  //     return prev.filter(ele => ele !== dltGrab);
  //   });
  // }
  const { listTodo, punchTask, dltBox }=useLocalStorage();

  return (
    <main className="app_box">
      <h1>Todo List APP</h1>
      <form action={punchTask}>
        <input
          type="text"
          name="task"
          id="task_box"
          placeholder="Add a new todo"
        />

        <button type="submit">Add</button>
      </form>
      <section>
        <ul>
          {listTodo.map((ele, ind) => {
            return (
              <li className="item_Box" key={ind} onClick={dltBox}>
                <span key={ind}>{ele}</span>
                <button className="dltBtn" data-name={ele}>
                  x
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
