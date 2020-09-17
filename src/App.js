import React, { Component } from 'react';
import Shopping from './component/shopping-cart'; 
import './App.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'

class App extends Component{
  state ={
    product :[
      {id : 1 ,name : 'Burger' , count :3, price: 80},
      {id : 2 ,name : 'Pizza', count :1, price: 60},
      {id : 3 ,name : 'Cola' , count :5, price:20}
    ]
  }
  handleDelete = (p)=>{
   let newproduct= [...this.state.product];
     let  newwproduct = newproduct.filter((product)=>{
        return(
          product.id !== p.id)
       });
       this.setState({product : newwproduct})

  }

  handleReset =()=>{
    let product = [...this.state.product];
   product= product.map((p)=>{
      p.count = 0
      return(p)
    })
    this.setState({product})
  }
  handleincrement =(p) =>{
    let product = [...this.state.product]
    let index = product.indexOf(p);
    product[index].count++;
    this.setState({product})
  }
  handleDecrese =(p)=>{
    let product = [...this.state.product];
    let index = product.indexOf(p);
    if (product[index].count> 0){
      product[index].count--;
    }
    this.setState({product})
  }
  render(){
    return(
      <div className="content">
        <h3>shopping cart</h3>
        <Shopping product={this.state.product} onDelete={this.handleDelete} oninc={this.handleincrement} onDec={this.handleDecrese}/>
        
        <h4 onClick={this.handleReset}>reset</h4>
      </div>
    )
  }
}

export default App;
