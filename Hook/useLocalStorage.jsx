import { useState } from "react";
export default function useLocalStorage(){
  const localFetch = localStorage.getItem('localData');
  const data = localFetch ? JSON.parse(localFetch) : [];
  const [listTodo, setListTodo] = useState(data);
  function punchTask(formdata) {
    const getTodo = formdata.get('task');
    getTodo &&
      setListTodo(prev => {
        localStorage.setItem('localData', JSON.stringify([...prev, getTodo]));
        return [...prev, getTodo];
      });
  }

  function dltBox(e) {
    const dltGrab = e.target.closest('button')?.dataset.name;
    console.log(dltGrab);
    if(dltGrab){
      setListTodo(prev => {
        localStorage.setItem(
          'localData',
          JSON.stringify(prev.filter(ele => ele !== dltGrab)),
        );
        return prev.filter(ele => ele !== dltGrab);
      });
    }
    console.log(e.target.closest('span')?.textContent)
    if(e.target.closest('span')?.textContent){
      e.target.style.textDecoration = 'line-through';
    }
  }
  return {listTodo,punchTask,dltBox}
}