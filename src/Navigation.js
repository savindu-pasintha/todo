import React from 'react';
import { Link} from 'react-router-dom';



const Navigation = () => { 
    const sty={
        fontSize:"14px", color:"black",padding:"10px",position:"relative",color:"black",fontWeight:"bolder"
    }
    return (
        <div className="Navigation">
          
               
                <Link to = "/"  style={sty} >
                Completed
                </Link>

                <Link to = "/pending"  style={sty} >
                 Pending
                </Link> 
                <Link to = "/search"  style={sty} >
                 Search
                </Link> 
              
        </div>
    );
};


Navigation.propTypes = {

};


export default Navigation;
