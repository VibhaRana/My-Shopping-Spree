import React from 'react';
import Modal from 'react-modal';


const PayBills  = (props) => {
    
    return (
        <Modal
        isOpen={props.open}
        contentLabel = "Add payment"
        class="dialog"
        >
            
       <h1>Pay The Bill</h1>
       <h2>Amount To Pay: <input type="number" name="amountToPay" id="amountToPay" min="0" defaultValue="0"/></h2>
      <hr></hr>
      <br></br>
    
       <button onClick={() => { props.balenceCalculation(document.getElementById("amountToPay").value) }}>Pay Bill</button>&nbsp;&nbsp;
       <button onClick={() => { props.balenceCalculation(0) }}>Cancel</button>
       <hr></hr>
        </Modal>
    );
}


//Modal.setAppElement('#root');

export default PayBills ;
