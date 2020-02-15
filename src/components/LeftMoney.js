import React from 'react';
//import ModalPayBills from './ModalPayBills';


class MoneyLeft extends React.Component {
    
    render() {
        let info=""
        if(this.props.amount>=0){
            info=`You have ${this.props.amount.toLocaleString("en-US",{style: 'currency', currency: 'USD'})} to spend`
        }else{
            info=`You are now in debt and you owe ${(-this.props.amount).toLocaleString("en-US",{style: 'currency', currency: 'USD'})}`

        }
        return (<div>{info}</div>);
    }
}
export default MoneyLeft