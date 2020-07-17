import React , {Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Jsontable from './jsontotableconversion'

let Interval ;
class Body extends Component{
   
    constructor(){
        super();
        this.state = {

            JsonData : "",

        }
    }

   async handleGenerateJsonData(){

        const JsonUrl = document.getElementById("inputfield").value

        if(JsonUrl !== ""){
           const res = await fetch(JsonUrl)
           const Json = await res.json();
          this.setState({JsonData: Json})
        }
        else{
            document.getElementById("errormsg").innerHTML = "Input must be URL"
           
            Interval = setTimeout(() => {
            document.getElementById("errormsg").innerHTML = ""
           }, 3000); 
        }
    }
   
    render(){
        return (
      <div>
          <Grid xs={12} spacing={2} container>
              
              
                    <Grid item xs={6} justifyContent="center" margin="10px">
                    <label style={{diaplay:"flex",justifyContent:"center",fontSize:"12px",padding:"20px"}}>
                        <strong>
                            Note : 
                        </strong>
                            {"  Copy the below URL and paste in input field."}
                    </label> <br/>
                       
                    <label style={{diaplay:"flex",justifyContent:"center",fontSize:"12px",padding:"20px"}}>
                               URL :  https://next.json-generator.com/api/json/get/4k4gHFc1t
                    </label>
                             
                    </Grid>
                    
                    <Grid  item xs={2} justifyContent="center" style={{
                                                                       diaplay:"flex",
                                                                       justifyContent:"flrx-end",
                                                                       paddingTop:"30px" 
                     }}>
                         <span id="errormsg" style={{fontSize:"13px",color:"red"}}></span>
                    </Grid>
                  
                    <Grid item xs={4} justifyContent="flex-end" style={{
                                                                      diaplay:"flex",
                                                                      justifyContent:"flex-end",
                                                                      padding:"20px" 
                    }}> 
                        
                        <input style={{
                                border:"2px solid #455a64",
                                margin:"10px",
                                height:"25px",
                                }} type="text" id="inputfield" required placeholder="Enter Url">

                        </input>
                            
                         <Button 
                         variant="outlined"
                         color="primary" 
                         size="small" 
                         onClick={() => this.handleGenerateJsonData()}
                         >
                             Generate Json
                        </Button>
                   
                    </Grid>
              
              
             
                     <Grid item xs={12} style={{margin:"20px", 
                                                maxHeight:"70vh", 
                                                overflowX:"scroll",
                                                overflowY:"scroll"}}>
                 {this.state.JsonData && <Jsontable JsonData = {this.state.JsonData}></Jsontable>} 
              </Grid>
             
          </Grid>
      </div>
        )
    }
 
}


export default Body;