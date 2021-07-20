import React, { useEffect, useState } from 'react';
import ListItem from '../Sample/ListItem';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const Search = () => {

    const [dataSet, setDataSet] = useState([]);
    const [dataSetDiscription, setDataSetDiscription] = useState([]);
    const [dataSetTitle, setDataSetTitle] = useState([]);

    useEffect(() => {
        readData();
    }, []);

    const readData = async () => {
        await axios.get('/dataset/todo-list.json')
            .then((res) => {
                setDataSet(res.data);
                var arr = [];
                for(var i=0; i<=dataSet.length; i++){
                    console.log(i)
                    arr[i]=dataSet[i];
                    setDataSetDiscription(arr);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const discriptionSearch = (searchingValue)=>{
      
       // dataSet.map((x,i) => { arr[i] = x.title; setDataSetDiscription(arr); });
            var arra = dataSetDiscription.filter(name => name.toLowerCase().search(searchingValue.toLowerCase()) !== -1);
           console.log(arra);
           // setDataSetTitle();
        };
    


    const listUi = dataSet.map((item,index) =>  {
            return (
                <li>
                    <h>
                     {item.id}
                    </h>
                </li>
            );
      
       
    });


    return (
        <div>
              <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(e)=>{ discriptionSearch(e.target.value);}} />
            <ul>
                {listUi}
            </ul>
        </div>
    );
}

export default Search;
