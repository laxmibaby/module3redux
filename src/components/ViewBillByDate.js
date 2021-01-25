import React, { Component } from 'react'
import './../App.css'
import {getBills,setBills,getBillByDate} from '../Actions/viewAction'
import {connect} from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { Button, Container, Form, FormGroup, Input } from 'reactstrap';
 class ViewBillByDate extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             date:null
        }
    }
    

    componentDidMount(){
       this.props.getBills();
    }

    handleOnClick = () => {
        this.props.getBillByDate(this.state.date);
    }
  
    render() {
       console.log(this.props.currentbill);
        const bills = this.props.bills;
       // const fbill = this.props.fetchbill;
         console.log(bills);
      //  let renderList = 'No Bills';
       
        return (
            <div className="viewlist-container">

            <Form>
                <FormGroup>
                    <label for="id" className="inputName">Enter Date:</label>
                       <Input
                            type="text"
                            placeholder="Enter Date"
                            name="id"
                            id="id"
                            onChange={(e)=>{
                                this.setState( {date:e.target.value })
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
                 bills!=null ?  bills.map( bill => {
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
        bills:state.view.billByDate,  
       // fetchbill:state.view.billByDate ? state.view.billByDate[0] : null
    }
  
}

export default connect(mapStateToProps, {getBills,getBillByDate})(ViewBillByDate)
