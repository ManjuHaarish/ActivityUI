import {React} from "react";
import  {DataGrid} from "@mui/x-data-grid";
import { useEffect, useState } from "react";

//construct rows

const cols =[
{ field: "name",headerName:"Activity Name ",width :200},
{field:"description",headerName:"Activity Description ",width :200},
{field:"fromDate",headerName:"Activity start Time ",width :200},
{field:"toDate",headerName:"Activity End time ",width :200}
]

const rows =[{id:1,name:"XXX",description:"YYY",fromDate:"25/03/1994 4PM",toDate:"25/03/1994 5PM"},
{id:2,name:"XXX",description:"YYY",fromDate:"25/03/1994 4PM",toDate:"25/03/1994 5PM"},
{id:2,name:"XXX",description:"YYY",fromDate:"25/03/1994 4PM",toDate:"25/03/1994 5PM"},
{id:4,name:"XXX",description:"YYY",fromDate:"25/03/1994 4PM",toDate:"25/03/1994 5PM"}
]

const ActivityGrid = () =>{
    const [activities,setactivity] = useState([]);

    const fetchData =  async() =>
    {
        try{
        const response =  await fetch('http://localhost:8080/activity/getActivityList');
        const data = await response.json();
        setactivity(data);
        console.log(data);
        }catch(error)
            {} 
        
    };  

    useEffect (() =>{
            fetchData();
    },[]);

    const rowDatas =  activities?.map(activity =>{
        return{
            name:activity?.name,
            description:activity?.description,
            fromDate:activity?.fromDate,
            toDate:activity?.toDate,
            id:activity?.id
        };

    }
    );

    return(
        <div style={{ display: 'flex',flexGrow: 1}}>
        <DataGrid checkboxSelection autoHeight rows={rowDatas} columns={cols}></DataGrid>
        </div>

    );
}


export default ActivityGrid;
