import React from 'react';


class ItemTable extends React.Component {
    removeItem = (index) => { 
        this.props.onUpdateItem(index,0,true)
    }
    render() {
        let hasItem = false
        this.props.products.forEach(e => {
            if (e.quantity > 0) {
                hasItem = true;
            }
        });
        if (!hasItem) {
            return <div>Please add some items</div>
        } else {
            let sum = 0
            this.props.products.forEach(e => {
                sum += e.price * e.quantity
            });
            return (
                <div>


                    <table>
                        <thead>
                            <tr>
                                <th align="left">Quantity</th>
                                <th align="left">Item</th>
                                <th align="left">Unit Cost</th>
                                <th align="left">Total Cost</th>
                                <th align="left">Remove Items</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map((item, i) => {

                                if (item.quantity > 0) {
                                    return (<tr key={i}>

                                        <td>{item.quantity}</td>
                                        <td>{item.item}</td>
                                        <td>{(item.price).toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</td>
                                        <td>{(item.price * item.quantity).toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</td>
                                        <td><button onClick={()=>{this.removeItem(i)}}>remove item</button></td>

                                    </tr>)
                                }
                            }

                            )}
                            <tr class="row">
                                <td colSpan="3" class="tableTotal">Total Money Spent:</td>
                                
                                <td>{sum.toLocaleString("en-US", { style: 'currency', currency: 'USD' })}</td>
                                <td>Deleted Items</td>
                            </tr>
                        </tbody>
                    </table>

                </div>


            )
        }


    }
}
export default ItemTable