import React, { useEffect, useState } from 'react';
import ListItem from '../Sample/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

const Completed = () => {
    const [dataSet, setDataSet] = useState([]);

    useEffect(() => {
        readData();
    }, []);

    const readData = async () => {
        await axios.get('/dataset/todo-list.json')
            .then((res) => {
                setDataSet(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const listUi = dataSet.map((item) => {
        if(item.completed === true) {
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

export default Completed;
