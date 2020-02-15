import React from 'react';
import Modal from 'react-modal';


const ModalPayBills  = (props) => {
    
    return (
        <Modal
        isOpen={props.open}
        contentLabel = "Add payment"
        class="your-dialog-classname"
        >
            
       <h2>Pay Bill</h2>
       <p>Amount To Pay: <input type="number" name="amountToPay" id="amountToPay" min="0" defaultValue="0"/></p>
       <br></br><br></br>
       
       <button onClick={() => { props.balenceCal(document.getElementById("amountToPay").value) }}>Pay Bill</button>&nbsp;&nbsp;
       <button onClick={() => { props.balenceCal(0) }}>Cancel</button>
        </Modal>
    );
}


Modal.setAppElement('#root');

export default ModalPayBills ;
