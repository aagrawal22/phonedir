   import React from 'react'
   import ReactDOM from 'react-dom'
   var data=[{name:" ",number:null}]
class App extends React.Component{
	
  loadDataFromVar=()=>{
      this.setState({data: data});
      console.log("from load")
      console.log(this.state.data)
  }
  handleContactSubmit=(contact)=>{
  	console.log("handle submit")
      this.props.data.push(contact);
      //console.log(this.state.data);
  }
 /* getInitialState=()=> function(){
      return{data: []};
  }*/
  componentDidMount=()=> function(){
      this.loadDataFromVar();
      setInterval(this.loadDataFromVar, this.props.pollInterval);
  }
  render(){
      return (
          <div className="phoneBookApp">
              <h1>My PhoneBook</h1>
           <AddContactForm onContactSubmit={this.handleContactSubmit}  />
              <PhoneBookList data={this.props.data} />
          </div>
      )
  }
};

class PhoneBookList extends React.Component{
  render(){
  	console.log("from book ")
  	console.log(this.props.data)
      var contactNodes = this.props.data.map((contact)=> {
          return(
              <Contact name={contact.name} number={contact.number} />
          )
      });
      return (
          <div className="phoneBookList">
              {contactNodes}
          </div>
      )

  }
};

class AddContactForm extends React.Component{
  handleSubmit= (e)=>{
      e.preventDefault();

      var name = ReactDOM.findDOMNode(this.refs.name).value.trim();
      var number = ReactDOM.findDOMNode(this.refs.number).value.trim();
    
      if(!name || !number){
          return;
      }
      this.props.onContactSubmit({name: name, number: number});

      ReactDOM.findDOMNode(this.refs.name).value = '';
      ReactDOM.findDOMNode(this.refs.number).value = '';
      return;
  }
  newdata={name:"",number:null}
  onNameInputChange=(event)=>{
  var newname=event.target.value     
    this.newdata.name=newname
    //console.log(this.newdata)
  }
onNumberInputChange=(event)=>{
  var newnumber=event.target.value
 this.newdata.number=newnumber
  //console.log(this.newdata.number)
 
  }
  finalName=()=>{

  	console.log("final")
  	console.log(this.newdata.name)
  }
   
  render(){

      return (
          <form className="addContactForm" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Name" ref="name" onChange={this.onNameInputChange}/>
              <input type="text" placeholder="Number" ref="number" onChange={this.onNumberInputChange}/>
              
          <p>Name:</p>
          <p>Contact:</p>
              <button type="submit">Add Contact</button>
          </form>
      );
  }
};

class Contact extends React.Component{
  render(){
  	console.log("From contact")
  	console.log(this.props.name)
      return(
          <div className="contact">

              <h2 className="contactName">{this.props.name}</h2>
              <p>{this.props.number}</p>
          </div>
      )
  }
}

ReactDOM.render(
  <App data={data} pollInterval={200} />,
  document.querySelector('#root')
  );