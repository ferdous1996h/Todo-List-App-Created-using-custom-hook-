import { useState } from 'react';
export default function useLocalStorage() {
  const localFetch = localStorage.getItem('localData');
  const data = localFetch ? JSON.parse(localFetch) : [];
  const [listTodo, setListTodo] = useState(data);
  function punchTask(formdata) {
    const getTodo = formdata.get('task');
    getTodo &&
      setListTodo(prev => {
        localStorage.setItem(
          'localData',
          JSON.stringify([...prev, { note: getTodo, stat: false }]),
        );
        return [...prev, { note: getTodo, stat: false }];
      });
  }

  function dltBox(e) {
    const dltGrab = e.target.closest('button')?.dataset.name;
    console.log(dltGrab);
    if (dltGrab) {
      setListTodo(prev => {
        localStorage.setItem(
          'localData',
          JSON.stringify(prev.filter(ele => ele?.note !== dltGrab)),
        );
        return prev.filter(ele => ele?.note !== dltGrab);
      });
    }
    const completeGrab = e.target.closest('span');
    if (completeGrab) {
      setListTodo(prev => {
        const reviseComplete = prev.map(ele => {
          if (ele.note === completeGrab?.textContent) {
            return { note: ele.note, stat: !ele.stat };
          } else {
            return { note: ele.note, stat: ele.stat };
          }
        });

        localStorage.setItem('localData', JSON.stringify(reviseComplete));

        return reviseComplete;
      });
    }
  }
  return { listTodo, punchTask, dltBox };
}
