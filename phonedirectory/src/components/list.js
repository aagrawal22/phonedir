import React from 'react'
import ListItem from './listitem.js'
 import ContactForm from './contactform.js';
 
class List extends React.Component{
	state={showForm:false}
 passDelete=(no)=>{

   this.props.delete(no)

 }
   render(){
   	var list=this.props.list.map((listItem)=>{
   		if(listItem.name && listItem.number)
   		{
   			return(<ListItem item={listItem} deleteThis={this.passDelete}/>)
   		}
     

   	});
   	return(
   		
   		
    <table className="ui celled table">
    <thead>
    <tr><th>Name</th>
    <th>Phone</th>
    <th></th>
  </tr></thead>
  <tbody>
  	{list}
  </tbody>
   </table>
   
   )
   }
}
export default List