import React from 'react';
//import ModalPayBills from './ModalPayBills';


class LeftMoney extends React.Component {

    //make a variable which is null initially. Use if-else statement to define if money left is >=0, you still have the money remaining to spent,
    //but if the money spent exceeds $5000, you are in debt then. Then return the variable information which store the info.
    
    render() {
        var information=null
        if(this.props.amount>=0){
            information=`You have ${this.props.amount.toLocaleString("en-US",{style: 'currency', currency: 'USD'})} to spend`
        }else{
            information=`You are now in debt and you have to pay ${(-this.props.amount).toLocaleString("en-US",{style: 'currency', currency: 'USD'})}`

        }
        return (<div>{information}</div>);
    }
}
export default LeftMoney