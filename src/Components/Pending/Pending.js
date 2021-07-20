import React, { useEffect, useState } from 'react';
import ListItem from '../Sample/ListItem';
import axios from 'axios';

const Pending = () => {

    const [dataSet, setDataSet] = useState([]);

    useEffect(() => {
        readData();
    }, []);

    const readData = async () => {
        await axios.get('/dataset/todo-list.json')
            .then((res) => {
                setDataSet(res.data);
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const listUi = dataSet.map((item) =>  {
        if(item.completed === false) {
            return (
                <li>
                    <ListItem itemId={item.id} itemColor={item.color} itemTitle={item.title} itemCompleted={item.completed} />
                </li>
            );
        }
       
    });


    return (
        <div>
            <ul>
                {listUi}
            </ul>
        </div>
    );
}

export default Pending;
