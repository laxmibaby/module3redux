import React, { Component } from 'react'
import './../App.css'
import {getBills,setBills} from '../Actions/viewAction'
import {connect} from 'react-redux';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
 class ViewSideBar extends Component {

    componentDidMount(){
       this.props.getBills();
    }

    handleOnClick = billBody => {
        this.props.setBills(billBody);
    }
    render() {
       console.log(this.props.currentbill);
        const bills = this.props.bills;
        let renderList = 'No Bills';
        if(bills){
            renderList = bills.map(bill => {
               // return (<a onClick={()=> {this.handleOnClick(bill.billno)}} key={bill.billno} >{bill.billno}</a>);
               return (
                   <Card>
                       <CardBody>
                           <CardTitle>Bill ID: {bill.billno}</CardTitle>
                           <CardSubtitle>Customer ID: {bill.customer.custId} Date: {bill.billDate}</CardSubtitle>
                           <CardText>
                               Units: {bill.units} Status: {bill.status}<br/>
                               Amount: {bill.amount}/-
                           </CardText>
                       </CardBody>
                   </Card>
               )
            });
        }

        return (
            <div className="viewlist-container">
               <div className="list-group">
                  {renderList}  
                </div> 

            </div>
        )
    }
}

// dispatchStateToStore = () =>{
//     getBills: () => dispatch(getBills())
// }

const mapStateToProps = state => {
    return {
        bills:state.view.bills,  
        currentbill:state.view.billno ? state.view.bills.filter(bill => bill.billno === state.view.billno)[0] : null
    }
  
}

export default connect(mapStateToProps, {getBills,setBills})(ViewSideBar)
