import React from 'react';
import Modal from 'react-modal';

//display the modal using isOpen. set the input as number and give minimum value as 0
const PayBills  = (props) => {
    
    return (
        <Modal
        isOpen={props.open}
        paymentLabel = "Add payment"
        class="dialog"
        >

            
       <h1>Pay The Bill</h1> 
       <hr></hr>
       <h2>Amount To Pay:<br></br> 
       <input type="number" name="payAmount" id="payAmount" min="0" defaultValue="0"/></h2>
      <hr></hr>
      <br></br>
    
       <button onClick={() => { props.balenceCalculation(document.getElementById("payAmount").value) }}>Pay Bill</button>&nbsp;&nbsp;
       <button onClick={() => { props.balenceCalculation(0) }}>Cancel</button>
       <hr></hr>
        </Modal>
    );
}


//Modal.setAppElement('#root');

export default PayBills ;
