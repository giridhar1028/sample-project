import React from 'react';
import '../Styles/JsontoTable.css'
import ReactHtmlTableToExcel from 'react-html-table-to-excel';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button'

export default class TableCom extends React.Component {
 
    
    componentDidMount(){
        document.getElementById("button").style.visibility = 'hidden'
    }
    
    getKeys = function(){
        return Object.keys(this.props.JsonData[0]);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key} style={{width:"100px"}}>{key}</th>
        })
    }
    
    getRowsData = function(){
        var items = this.props.JsonData;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
        }
    
    render() {
    return (
    <div >
        <Button
         
         variant="contained"
         color="secondary"
         startIcon={<ArrowDownwardIcon/>}
         onClick={() => document.getElementById("button").click()}
         >
            Export
        </Button>
            <div style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"flex-end",
                
            }}>
                <ReactHtmlTableToExcel 
                    id="button"
                    table="t02"
                    filename="ExcelFile"
                    sheet="tablexls"
                    
                >

                </ReactHtmlTableToExcel>
            </div>
        
    <table className="sticky-header"  id="t02" >
    
    <thead >
    <tr>{this.getHeader()}</tr>
    </thead>
    <tbody>
    {this.getRowsData()}
    </tbody>
    
    </table>
    </div>
    
    );
    }
   }
   const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
    return <td key={props.data[key]} style={{border:"1px solid #dddddd"}}>{props.data[key].toString()}</td>
    })
   }