import { Component } from "react";
import { render } from "react-dom";
import axios from "axios";


class ActivityForm extends Component{
    constructor(props){
        super(props)
            this.state = {
                name: "",
                description:"",
                fromDate:"",
                toDate:""

            }

        
    }

    changeHandler = e =>{
        this.setState({[e.target.name] :e.target.value})

    }

     submitHandler = e =>{
         e.preventDefault();
         console.log(this.state)
         axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
         axios.post("http://localhost:8080/activity/saveActivity",this.state
         ).then(response => {
             console.log(response)
            if(response.status == 200){
                alert("Activity Saved Successfully")
                this.setState({
                name: "",
                description:"",
                fromDate:"",
                toDate:""
                  });
                
            }
            
            }).catch(error=> {console.log(error)})
     }
    
render(){
    const{name,description,fromDate,toDate} = this.state
    return(
        <div style={{ display: 'flex',flexGrow: 1}}>
        <form  className="FormText" onSubmit={this.submitHandler}>
            <div className="formHeading"> Activity </div>
            <br/>
            <span ></span>
            <input className="InputText" type="text" placeholder="Activity Name"  name="name"  value={name} onChange={this.changeHandler} required/>
            <br/>
           <textarea className="InputText" placeholder="Activity Description" name="description"  value={description}  onChange={this.changeHandler} required></textarea>
            <br/>
            <input className="InputText"  type="datetime-local" placeholder="Activity Start Time" name="fromDate"  value={fromDate}  onChange={this.changeHandler} required/>
            <br/>
            <input className="InputText"  type="datetime-local" placeholder="Activity End Time" name="toDate"   value={toDate} onChange={this.changeHandler} required/>
            <br/>
            <button>
            <span> Submit </span>
            </button>
        </form>
        </div>

    );
    
    }
}

export default ActivityForm;