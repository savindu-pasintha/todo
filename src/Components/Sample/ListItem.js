import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

const ListItem = (props) => {
return (
    <div>

        <div>
            <h> {props.itemId} - {props.itemColor} </h>
            <p> {props.itemTitle} </p>
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
            <Link to="/edit">
                <EditIcon 
                itemId= {props.itemId}
                 itemColor={props.itemColor}
                  itemTitle={props.itemTitle}
                   itemCompleted={props.itemCompleted}
                   itemPriority={props.itemPriority}
                type="button" style={{ color: "blue" }} />
            </Link>
            <DeleteIcon onClick={() => { console.log(props.itemId); }}
                style={{ color: "red", position: "relative", display: "inline-flex" }} />
            <Checkbox checked={props.itemCompleted} inputProps={{ 'aria-label': 'primary checkbox' }}
                style={{ position: "relative", display: "inline-flex" }} />
            {

            }
        </div>

    </div>
);
}

export default ListItem;
