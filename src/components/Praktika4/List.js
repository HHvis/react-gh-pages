import React, {useState} from "react";
import Card from './Card';
import { v4 as uuidv4 } from 'uuid';


function List() {
    let data = [{
        id: 1,
        pic: "https://en.number13.de/content/images/size/w600/2021/08/photo-1542831371-29b0f74f9713.jpg",
        headline: "As mokausi HTML",
        status: false,
        statusChange: { statusChange }
      }, {
        id: 2,
        pic: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ",
        headline: "As mokausi CSS",
        status: false,
        statusChange: { statusChange }
      }, {
        id: 3,
        pic: "https://miro.medium.com/max/1400/0*-v413rdknCLjM3r8",
        headline: "As mokausi JavaScript",
        status: false,
        statusChange: { statusChange }
      }]

      const [task, setTask] = useState(data);
      function statusChange (id){
          const updateTask = [...task];
          updateTask.forEach((item) => {
              if (item.id ==id){
                  item.status=true;
              }
          }
          );
          setTask(updateTask);
      }
    
      const listas = task.map((item) => {
        return( 
        <Card 
        key={uuidv4()}
        id={item.id} 
        pic={item.pic} 
        headline={item.headline}
        status={item.status}
        statusChange={statusChange} />
        );
    });
    return (
        <div className="row">
            {listas.length ? listas : "Empty"}
        </div>
    )
}
export default List