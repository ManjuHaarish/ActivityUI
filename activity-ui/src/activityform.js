import { render } from "react-dom";


function ActivityForm(){
    return(
        <form className="FormText">
            <span ></span>
            <input className="InputText" type="text" placeholder="Activity Name" required/>
            <br/>
           <textarea className="InputText" placeholder="Activity Description" required></textarea>
            <br/>
            <input className="InputText"  type="datetime-local" placeholder="Activity Start Time" required/>
            <br/>
            <input className="InputText"  type="datetime-local" placeholder="Activity End Time" required/>
            <br/>
            <button>
            <span> Submit </span>
            </button>
        </form>

    );
    
}


export default ActivityForm;