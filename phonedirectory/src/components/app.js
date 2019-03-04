 import React from 'react'
 import List from './list.js'
 import ContactForm from './contactform.js'
 class App extends React.Component{
 	state={data:[{name:" ",number:null}],showList:true,showForm:false}
 	/*componentDidMount=()=>{
 		console.log("Mounted")
 	}*/
 	handleSubmit=(name,number)=>{
 		//console.log("submitted")
 		var obj={name:name,number:number}
  		if(obj.name && obj.number){
 			var newdata=this.state.data
 			newdata.push(obj)
    		this.setState({data:newdata})
    		this.setState({showList:true})
    		this.setState({showForm:false})

 	}

 }
 onAddClick=()=>{
  this.setState({showList:false})

  this.setState({showForm:true})
  
 }
 handleBackClick=(list,form)=>{
  this.setState({showList:list})

  this.setState({showForm:form})

  
 }
 	deleteItem=(deleteNumber)=>{
    var newdata=this.state.data.filter((item)=>{
         return(item.number!==deleteNumber)

    })
    this.setState({data:newdata})
 	}
render(){

	return(
		<div>
        {this.state.showList? 
         
         <div className="ui inverted segment">
       	<h1 className="ui grey inverted header text">PHONE DIRECTORY</h1>
       	 
       	</div>:null}
       <div className="main">
       
      
        {this.state.showList? 
         <div>
         <button  className=" ui green button" onClick={this.onAddClick}>Add</button>
        <br/>
       	<List list={this.state.data} delete={this.deleteItem}/>
       	</div>:null}
   </div>
      
       {this.state.showForm?

         <div>
         <ContactForm submitting={this.handleSubmit} backclicking={this.handleBackClick} />
 		     
         </div>
       :null}       
       
       </div>
		)
 }
}
export default App;