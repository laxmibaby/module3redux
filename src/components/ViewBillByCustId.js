import React, { Component } from 'react'
import './../App.css'
import {getBills,getBillByCustId} from '../Actions/viewAction'
import {connect} from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
 class ViewBillByCustId extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             custID:null
        }
    }
    

    componentDidMount(){
        this.props.getBills();
      // this.props.getBillById(this.state.billID);
    }

    handleOnClick = () => {
        this.props.getBillByCustId(this.state.custID);
    }
  
    render() {
       console.log("fetched bill",this.props.fetchbill);
        let bills = this.props.bills;
        console.log("cust bill",bills);
        const fbill= this.props.fetchbill;
       
        return (
            <div className="viewlist-container">

            <Form>
                <FormGroup>
                    <label for="id" className="inputName">Enter Customer ID:</label>
                       <Input
                            type="text"
                            placeholder="Enter Customer ID"
                            name="id"
                            id="id"
                            onChange={(e)=>{
                                this.setState( {custID:e.target.value })
                            }}
                        />
                </FormGroup>
                <Container className="text-center mt-4">
                   <Button color="success" size="lg" outline onClick={()=>this.handleOnClick()}>
                        <b>Search</b>
                   </Button>
                </Container>   
            </Form>

               <div className="list-group">
               {
                 bills!=null ?   
                   <Card>
                       <CardBody>
                           <CardTitle>Bill ID: {fbill.billno}</CardTitle>
                           <CardSubtitle>Customer ID: {this.state.custID} Date: {fbill.billDate}</CardSubtitle>
                           <CardText>
                               Units: {fbill.units} Status: {fbill.status}<br/>
                               Amount: {fbill.amount}/-
                           </CardText>
                       </CardBody>
                   </Card>
                   : "No Bills"
        
                 }
                </div> 

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        bills:state.view.billByCustID,  
        fetchbill:state.view.billByCustID ? state.view.billByCustID[0] : null
    }
  
}

export default connect(mapStateToProps, {getBills,getBillByCustId})(ViewBillByCustId)
