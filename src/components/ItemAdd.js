import React from 'react';


class AddItemForm extends React.Component {
    dropDown = (arr) => {
        const listItems = arr.map((item, i) => <option key={i} value={i}>{item.item}:${item.price}</option>);
        return <div><label for="thing">Select Item: </label><select id="thing" name="thing" type="text">{listItems}</select></div>;
    }
    addItem = (e) => {
        e.preventDefault();
        this.props.onUpdateItem(parseInt(e.target.elements.thing.value), parseInt(e.target.elements.quantity.value))
    }
    render() {
        return (<form onSubmit={this.addItem}>
            {this.dropDown(this.props.products)}<label for="quantity">Quantity:</label> <input id="quantity" type="number" name="quantity" min="0" required/>
            <button type="submit" value="Submit">Add</button>
        </form>
        );
    }
}
export default AddItemForm