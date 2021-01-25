import React, { Component } from 'react'
import './../App.css'
import {getBills,getBillByStatus} from '../Actions/viewAction'
import {connect} from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
 class ViewBillByStatus extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             state:null
        }
    }
    

    componentDidMount(){
      this.props.getBills();
    }

    handleOnClick = () => {
       console.log("run", this.props.getBillByStatus(this.state.status));
    }
  
    render() {
      // console.log(this.props.currentbill);
        const bills = this.props.bills;
        console.log("status bill",bills);
       
        return (
            <div className="viewlist-container">

            <Form>
           
                <FormGroup>
                       <Button color="primary" onClick={()=>{
                                this.setState( {status:"paid" })
                                this.handleOnClick()
                            }}>
                                Paid Bills
                        </Button>
                </FormGroup>
                <FormGroup>
                       <Button color="primary" onClick={()=>{
                                this.setState( {status:"unpaid" })
                                this.handleOnClick()
                            }}>
                                Unpaid Bills
                        </Button>
                </FormGroup>
            
            </Form>

               <div className="list-group">
               {
                 bills!=null ?   bills.map( bill => {
                     return (<Card>
                        <CardBody>
                            <CardTitle>Bill ID: {bill.billno}</CardTitle>
                            <CardSubtitle>Customer ID: {bill.customer.custId} Date: {bill.billDate}</CardSubtitle>
                            <CardText>
                                Units: {bill.units} Status: {bill.status}<br/>
                                Amount: {bill.amount}/-
                            </CardText>
                        </CardBody>
                    </Card>)
                    
                    }) 
                : "No Bills"
                 }
                </div> 

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        bills:state.view.billByStatus,  
        currentbill:state.view.billno ? state.view.bills.filter(bill => bill.billno === state.view.billno)[0] : null
    }
  
}

export default connect(mapStateToProps, {getBills,getBillByStatus})(ViewBillByStatus)
