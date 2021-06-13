import React, { useState} from 'react' 
import {Form,Button} from "react-bootstrap"
import firebase from './fire_base'
function Firstpage(){
  const [name,setName]=useState("")
  const [standard,setClass]=useState("")
  const [Section,setSection]=useState("")


  const addData=()=>{
    const db= firebase.firestore()
    db.collection("student_data").doc(`${name}`).set({
      Name:name,
      Class:standard,
      Section:Section
    })
    setName("")
    setClass("")
    setSection("")
    setRows([])
    readData()
  }

  const [row,setRows] = useState([])

  const readData=()=>{
    const db= firebase.firestore()
    var rows=[]
    db.collection("student_data").get().then(doc=>{
      doc.forEach(query=>{
        rows.push(query.data())
      })
      setRows(rows)

    })
  } 
  React.useEffect(()=>{

    readData()

  },[])
  return (
    <div>
    
      <div style={{display:"flex"}}>
      <Form.Group>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} style={{width:300,height:20}} />
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Class" onChange={(e)=>setClass(e.target.value)} style={{width:300,height:20}}/>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" placeholder="Section" onChange={(e)=>setSection(e.target.value)} style={{width:300,height:20}}/>
      </Form.Group>
      <Button style={{width:100,height:50,backgroundColor:"#32CD32",marginLeft:30}} onClick={addData}><h3>SAVE</h3></Button>
      </div>
      <div style={{ height: 400, width: '100%' }}>
      <table style={{ "font-family": "arial, sans-serif","KhtmlBoxAlign": "collapse","width": "100%"}}>
        <tr>
        <th style={{"border": "1px solid #dddddd","padding": "8px"}}>Name</th>
        <th style={{"border": "1px solid #dddddd","padding": "8px"}}>Class</th>
        <th style={{"border": "1px solid #dddddd","padding": "8px"}}>Section</th>
        </tr>
        {row.map(p=>{
          return(
            <tr>
              <td style={{"border": "1px solid #dddddd","padding": "8px"}} key={p.Name}>{p.Name}</td>
              <td style={{"border": "1px solid #dddddd","padding": "8px"}} key={p.Class}>{p.Class}</td>
              <td style={{"border": "1px solid #dddddd","padding": "8px"}} key={p.Section}>{p.Section}</td>

            </tr>
          )
        })}
      </table>
</div>

    </div>
  );

}

export default Firstpage;
