import React from 'react'
class ListItem extends React.Component{
    deleteContact=()=>{
    	this.props.deleteThis(this.props.item.number)

    }
	
render(){

	return(

  
   <tr>
   	<td data-label="Name">{this.props.item.name}</td>
   	<td data-label="Phone">{this.props.item.number}</td>
   	<td ><button className="small ui red button" onClick={this.deleteContact}>Delete</button></td>
   </tr>
  
		)
}
};
export default ListItem