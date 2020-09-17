import React from 'react';
const Shopping = (props) => {
const Delete = props.onDelete; 
const inc = props.oninc;   
const decr = props.onDec;
const product = props.product;
const products = product.map((p)=>{
    return(
    
        <div key={p.id}>
          <p className="col-3">{p.name}</p>
          <p className="count"><span className="control" onClick={()=>{decr(p)}}>-</span>{p.count}<span className="control" onClick={()=>{inc(p)}}>+</span> </p>
          <p className="col-3 price">${p.count * p.price}</p>
          <span className="btn col-3" onClick={()=>{Delete(p)}}><i className="fas fa-times"></i></span>
          
        <div className="clear"></div>
        </div>
        
    )
});
    return ( 
    <div>{products}</div>
     );
}
 
export default Shopping;