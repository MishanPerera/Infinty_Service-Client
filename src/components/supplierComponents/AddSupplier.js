import React,{useState} from "react";
import axios from "axios";
import '../../addStyle.css'
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function AddSupplier(){

    const [supplierNo, setSupplierNo] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [address, setAddress] = useState("");
    const [companyEmail, setCompanyEmail] = useState("");
    const [comPhone, setComPhone] = useState("");
    const [agentName, setAgentName] = useState("");
    const [agentPhone, setAgentPhone] = useState("");
    const [agentEmail, setAgentEmail] = useState("");

    function sentData(e){
        e.preventDefault();
        
        const newSupplier ={
            supplierNo,
            companyName,
            address,
            companyEmail,
            comPhone,
            agentName,
            agentPhone,
            agentEmail
        }

        axios.post("http://localhost:8070/supplier/add",newSupplier).then(()=>{
            alert("Supplier Added")
            window.location.reload(false);
            setSupplierNo("");
            setCompanyName("");
            setAddress("");
            setCompanyEmail("");
            setComPhone("");
            setAgentName("");
            setAgentPhone("");
            setAgentEmail("");
            
        }).catch((err)=>{
            alert(err)
        })
        
    }

    return(
        
        <div>
            <NavBar/>

        <div class="lft">
        <center>
            <h1 className="text-white" style={{marginTop:"-30px"}}>SUPPLIER MANAGEMENT</h1>
            </center><br/>
            <center>
      <h5 className="text-white"  >ADD SUPPLIER</h5>
    </center>
        <div className="container">  
    <br></br>


       <div style={{  background: "#BBDEFB", width:"1000px", marginLeft:"-40px" }}>
        <form onSubmit={sentData}>

        <br></br>

            <div className="form-group">
                <label for="SupplierNo" className="label" style={{marginLeft:"6px"}}>Supplier No. : </label>
                <input type="text" class="form-control" id="SupplierNo" placeholder="Enter Supplier Number"
                onChange={(e)=>{
                    setSupplierNo(e.target.value);
                }}/>
            </div>
                    <br/>
            <div class="form-group">
                <label for="CompanyName" className="label" style={{marginLeft:"6px"}}>Company Name : </label>
                <input type="text" className="form-control" id="CompanyName" placeholder="Enter Company Name"
                onChange={(e)=>{
                    setCompanyName(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="form-group">
                <label for="Address" className="label" style={{marginLeft:"6px"}}>Address : </label>
                <input type="text" className="form-control" id="Address" placeholder="Enter Address"
                onChange={(e)=>{
                    setAddress(e.target.value);
                }}/>
            </div>
                    <br/>
            <div class="form-group">
                <label for="CompanyEmail" className="label" style={{marginLeft:"6px"}}>Company Email : </label>
                <input type="email" class="form-control" id="CompanyEmail" placeholder="Enter Company Email"
                onChange={(e)=>{
                    setCompanyEmail(e.target.value);
                }}/>
            </div>
                    <br/>
            <div class="form-group">
                <label for="ComPhone" className="label" style={{marginLeft:"6px"}}>Company Phone No. : </label>
                <input type="text" class="form-control" id="ComPhone" minLength={10} maxLength={10} placeholder="Enter Company Phone No"
                onChange={(e)=>{
                    setComPhone(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="form-group">
                <label for="AgentName" className="label" style={{marginLeft:"6px"}}>Agent Name : </label>
                <input type="text" className="form-control" id="AgentName" placeholder="Enter Agent Name"
                onChange={(e)=>{
                    setAgentName(e.target.value);
                }}/>
            </div>
                    <br/>
            <div class="form-group">
                <label for="AgentPhone" className="label" style={{marginLeft:"6px"}}>Agent Phone No. : </label>
                <input type="text" class="form-control" id="AgentPhone" minLength={10} maxLength={10} placeholder="Enter Agent Phone No."
                onChange={(e)=>{
                    setAgentPhone(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="form-group">
                <label for="AgentEmail" className="label" style={{marginLeft:"6px"}}>Agent Email : </label>
                <input type="email" className="form-control" id="AgentEmail" placeholder="Enter Agent Email Address"
                onChange={(e)=>{
                    setAgentEmail(e.target.value);
                }}/>
            </div>
                    <br/>
            <center><button type="submit" class="btn btn-primary">Submit</button></center><br/>

        </form>
        
        </div> 
        </div>
        </div> 
        </div>
       
    )
}