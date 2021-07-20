import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '20ch',
        },
    },
}));

const Edit = () => {
    const classes = useStyles();
    const [color, setColor] = useState("");
    const [title, setTitle] = useState("");
    const [prority, setPrority] = useState("");
    const [complete, setComplete] = useState("false");

    const getColor = (e) => {
        setColor(e.target.value);
    }

    const getText = (e) => {
        setColor(e.target.value);
    }

    const getCheck = (e) => {
        if(title !== "" || color !== "" || prority !==  ""){
            setComplete("true");
        }else{
            setComplete("false");
        }
       
    }

    const getTitle = (e) => {
        setTitle(e.target.value);
    }

    const updateBtn = async (e) => {
        if(complete === "false"){
           await axios.patch('/dataset/todo-list/[0]/',
           {id : "1", color : "red", title : "Hai", priority : "low"}).then((res)=>{
        alert("ok"); console.log(res);          
            }).catch((e)=>{
               console.log(e);
           })
        }
    }

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={(e)=>{e.preventDefault();}}>
            <input type="color" onChange={(e) => { getColor(e); }} />
            <TextField id="outlined-basic" label="Color" variant="outlined" onChange={(e)=>{getText(e);}} value={color} />
            <TextField id="outlined-basic" label="prority" variant="outlined" />
            <TextField id="outlined-basic" label="Title" variant="outlined" onChange={(e)=>{getTitle(e)}} value={title} />
            <Checkbox onChange={(e)=>{getCheck(e)}} checked={complete} inputProps={{ 'aria-label': 'primary checkbox' }} />
            <Button onClick={()=>{updateBtn()}} variant="contained" color="secondary">Update</Button>
        </form>
    );
}

export default Edit;
