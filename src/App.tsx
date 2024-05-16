import './App.css'
import Person from "./components/Person/Person";
import {useState} from "react";

interface IPerson {
    name: string;
    age: number;
}

const App = () => {

    const [people, setPeople] = useState<IPerson[]>([
        {name: 'Jane', age: 26},
        {name: 'John', age: 30},

    ]);

    // const people = [....] могу достать массив
    // setPeople это функция, которая будет менять состояние

    const changeNameForFirstPerson = () => {
        const copyPeople = [...people];
        copyPeople[0].name = 'Nurzada';

        setPeople(copyPeople);

        // setPeople([
        //     {name: 'Nurzada', age: 26},
        //     {name: 'John', age: 30},
        // ]);
    };

  return (
      <>
         <Person name={people[0].name} age={people[0].age} />
         <Person name={people[1].name} age={people[1].age} />
          <button onClick={changeNameForFirstPerson}>Change name for first person</button>
      </>
  )
};

export default App
