import React, { Component } from 'react'
import './../App.css'
import {getBills,setBills,getBillById} from '../Actions/viewAction'
import {connect} from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
 class ViewBillById extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             billID:null
        }
    }
    

    componentDidMount(){
      // this.props.getBillById(this.state.billID);
    }

    handleOnClick = () => {
        this.props.getBillById(this.state.billID);
    }
  
    render() {
       console.log(this.props.currentbill);
        const bills = this.props.bills;
         console.log(bills);
        let renderList = 'No Bills';
       
        return (
            <div className="viewlist-container">

            <Form>
                <FormGroup>
                    <label for="id" className="inputName">Enter Bill ID:</label>
                       <Input
                            type="text"
                            placeholder="Enter Bill ID"
                            name="id"
                            id="id"
                            onChange={(e)=>{
                                this.setState( {billID:e.target.value })
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
                           <CardTitle>Bill ID: {bills.billno}</CardTitle>
                           <CardSubtitle>Customer ID: {bills.customer.custId} Date: {bills.billDate}</CardSubtitle>
                           <CardText>
                               Units: {bills.units} Status: {bills.status}<br/>
                               Amount: {bills.amount}/-
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
        bills:state.view.billByID,  
        currentbill:state.view.billno ? state.view.bills.filter(bill => bill.billno === state.view.billno)[0] : null
    }
  
}

export default connect(mapStateToProps, {getBillById})(ViewBillById)
