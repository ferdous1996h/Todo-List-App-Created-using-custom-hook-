import { clsx } from 'clsx';
import useLocalStorage from './Hook/useLocalStorage';
export default function App() {
  const { listTodo, punchTask, dltBox } = useLocalStorage();

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
            const cls = clsx(ele.stat && 'complete');
            return (
              <li className="item_Box" key={ind} onClick={dltBox}>
                <span key={ind} className={cls}>
                  {ele.note}
                </span>
                <button className="dltBtn" data-name={ele.note}>
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
