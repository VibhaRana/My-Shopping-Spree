import React from 'react';


class ItemAdd extends React.Component {
    
    //Make a dropdown list which stores array of list items. Render the array by using map method.
    dropDown = (arr) => {
        const listItems = arr.map((item, i) => <option key={i} value={i}>{item.item}:${item.price}</option>);
        //return the drop down list
        return <div><label for="thing">Select Item: </label><select id="thing" name="thing" type="text">{listItems}</select></div>;
    }
    
     //call addItem as as event
    //call the preventDefault() method on element to prevent browser load or refresh. Use e.target.value method on thing and quantity. This method usually 
    // used to enter text in input. use parseInt method to convert this string to integer
    addItem = (e) => {
        e.preventDefault();
        this.props.onUpdateItem(parseInt(e.target.elements.thing.value), parseInt(e.target.elements.quantity.value))
    }

    //render and return the dropdown list of products and quantities. This method says add the items on submitting the form. set the min quantity = 0 so that quantity does not go in negative
    render() {
        return (<form onSubmit={this.addItem}>
            
            {this.dropDown(this.props.products)}
            <label for="quantity">Quantity:</label>
             <input id="quantity" type="number" name="quantity" min="0" required/>
            <button type="submit" value="Submit">Add</button>
        </form>
        );
    }
}
export default ItemAdd