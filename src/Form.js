import React, { useEffect, useState } from "react";
// import DatePicker from 'react-datetime';
// import moment from 'moment';
// import 'react-datetime/css/react-datetime.css';
//import "./styles.css";

//import axios from 'axios';


const Form = () => {
    const [state,setState] = useState({});
    const [isLoading,setIsLoading] =useState(true) ;
    const [flightPrice,setFlightPrice]=useState({});

    const [formData,setFormData]=useState({
        source:"",
        destination:"",
        airline:"",
        stops:"",
        dep_Time:"",
        arrival_Time:""
    })

    useEffect( ()=>{
        async function getData () {
        const url= "http://127.0.0.1:5000";
        const response = await fetch(url+"/get_data");
        const data=await response.json();
        setState(data);
        setIsLoading(false);
    }
    getData();

    },[]); 

    console.log(state);



    const onChangeHandler = (event)=>{
        const {name,value} = event.target;

        setFormData(prevFormData=>{
            return {...prevFormData,
            [name]:value};
        });
    }

    const onSubmitHandler= (event)=>{
        event.preventDefault();
        // let headers = new Headers();

        // headers.append('Content-Type', 'application/json');
        // headers.append('Accept', 'application/json');
        // headers.append('Origin','http://localhost:3000');
        
        //console.log(formData);
        const url= "http://127.0.0.1:5000";
        // (async ()=> {
        //     const response = await fetch(url+"/predict", {
        //         method: 'POST',
        //         // headers:headers,
        //         body: JSON.stringify(formData)
        //         });
        //     const result =await response.json();    
        //     console.log(result);
            
        // })();
        //axios.post(url+"/predict", JSON.stringify(formData)).then(res => res.json()).then(data => console.log(data)); 
        fetch(url+"/predict",{
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                
         },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => setFlightPrice(data)); 
    };

   return (
   <div>
        <form onSubmit={onSubmitHandler}>
            {isLoading? <p>Data is loading.....</p>:<>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="source">Source</label>
                    <select id="source" className="form-control" name="source" onChange={onChangeHandler} value={formData.source}>
                    <option defaultValue>Choose...</option>
                    {state.data.sources.map((source,index)=><option key={index}>{source}</option>)}
                    
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="destination">Destination</label>
                    <select id="destination" className="form-control" name="destination" onChange={onChangeHandler} value={formData.destination}>
                    <option defaultValue>Choose...</option>
                    {state.data.destinations.map((destination,index)=><option key={index}>{destination}</option>)}
                    
                    </select>
                </div>
            </div>  
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="airline">Airlines</label>
                    <select id="airline" className="form-control" name="airline" onChange={onChangeHandler} value={formData.airline}>
                    <option defaultValue>Choose...</option>
                    {state.data.airlines.map((airline,index)=><option key={index}>{airline}</option>)}
                    
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="stops">Stops</label>
                    <select id="stops" className="form-control" name="stops" onChange={onChangeHandler} value={formData.stops}>
                    <option defaultValue>Choose...</option>
                    {Object.keys(state.data.stop_details).map((key,index) =><option key={index}>{key}</option>)}
                    
                    </select>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="dep_Time">Departure</label>
                    {/* <DatePicker class="data" name="dep_Time" value={formData.dep_Time} onChange={onChangeHandler} dateFormat="DD-MM-YYYY" timeFormat="hh:mm" /> */}
                    <input type="datetime-local" className="form-control" name="dep_Time" id="dep_Time" onChange={onChangeHandler} value={formData.dep_Time}  required="required"></input>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="arrival_Time">Arrival</label>
                    {/* <DatePicker class="data" name="dep_Time" value={formData.dep_Time} onChange={onChangeHandler} dateFormat="DD-MM-YYYY" timeFormat="hh:mm" /> */}
                    <input type="datetime-local" className="form-control" name="arrival_Time" id="arrival_Time" onChange={onChangeHandler} value={formData.arrival_Time}  required="required"></input>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Predict</button></>}
            
        </form>
        {Object.keys(flightPrice).length>=1&& <p>Predicted Flight Price {flightPrice.price}</p>}

    </div>);
}


export default Form;