import React from 'react'
class ContactForm extends React.Component{
	state={changingname:"",changingnumber:"",showListstate:false,showFormstate:true}

    onFormSubmit=(event)=>{
         event.preventDefault();
         //console.log("To submit")
         this.props.submitting(this.state.changingname,this.state.changingnumber)
         this.setState({changingname:"",changingnumber:""})
    }
    nameChange=(event)=>{
      this.setState({changingname:event.target.value})
      
    }
    numberChange=(event)=>{
    	 this.setState({changingnumber:event.target.value})
    	 
    }
    onBackClick=()=>{
    	this.setState({showListstate:true,showFormstate:false},()=>{

    		this.props.backclicking(this.state.showListstate,this.state.showFormstate)
    	})
    	
    }
	render(){
		
		return(
			<div >
			<div className="ui inverted segment">
       	<h1 className="ui grey inverted header text">ADD SUBSCRIBER</h1>
       	</div>
       	<div className="main">
       	<button  className=" ui white button" onClick={this.onBackClick.bind(this)}>Back</button>
           <br/>
           <br/>
         <form  onSubmit={this.onFormSubmit.bind(this)} className="ui form">
         <div className=" field">
         <label>Name:</label>
         <input type="text"   onChange={this.nameChange} value={this.state.changingname}/>
         </div>
         <div className=" field">
         <label>Number:</label>
         <input type="text"   onChange={this.numberChange} value={this.state.changingnumber} /></div>
          <p>Subscriber to be added:</p>
          <p>Name:{this.state.changingname}</p>
          <p>Contact:{this.state.changingnumber}</p>
              <button type="submit" className="ui green button">Add</button>
          </form>
          </div>
          </div>
         
			)
	}
}
export default ContactForm