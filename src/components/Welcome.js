import React from 'react';
//import ReactDOM from 'react-dom';
import MoneyLeft from './LeftMoney'
import ItemTable from './itemTable';
import AddItemForm from './ItemAdd';
import ModalPayBills from './PayBill';
import Header from './Navbar';
import Footer from './Footer';

class MainPage extends React.Component {

    balance=5000;
    
    state = {
        products: [
            {
                item: 'Camera',
                price: 500,
                quantity: 0
            },
            {
                item: 'Shoes',
                price: 250,
                quantity: 0
            },
            {
                item: 'Bag',
                price: 1000,
                quantity: 0
            },
            {
                item: 'Smart Phone',
                price: 1200,
                quantity: 0
            },
            {
                item: 'Heels',
                price: 1100,
                quantity: 0
            },
            {
                item: 'Watch',
                price: 600,
                quantity: 0
            },
            {
                item: 'Headphones',
                price: 300,
                quantity: 0
            },
            {
                item: 'Book',
                price: 20,
                quantity: 0
            },
            {
                item: 'Ring',
                price: 3000,
                quantity: 0
            }
        ],
        openModalPayBills: false
        
    }
    onUpdateItem = (i,amount,override=false) => {
        this.setState(state => {
            const products = state.products.map((e, j) => {
                if (j === i) {
                    if(override){
                        return {item:e.item,price:e.price,quantity:amount}
                    }else{
                        return {item:e.item,price:e.price,quantity:e.quantity+amount}
                    }
                    
                } else {
                    return e;
                }
            });
            return {
                products,
            };
        });
    };

    balenceCal=(value) =>{
        this.balance +=  parseFloat(value);
        this.setState((prevState) => ({ openModalPayBills:!prevState.openModalPayBills }));

        return this.balance;
    }
    render() {
        let sum=0
        this.state.products.forEach(e => {
            sum+=e.price*e.quantity
        });
        return (
            <div>
                <Header></Header>
                <div class="amount"><MoneyLeft amount={this.balance-sum}></MoneyLeft>
                <button onClick={() => { this.setState((prevState) => ({ openModalPayBills:true })) }}>Pay Bill</button>
                
                <ItemTable products={this.state.products} onUpdateItem={this.onUpdateItem}></ItemTable>
                <AddItemForm products={this.state.products} onUpdateItem={this.onUpdateItem} ></AddItemForm>
                <ModalPayBills open={this.state.openModalPayBills}
                balenceCal = {this.balenceCal}/>
                
                </div>
                <Footer></Footer>
            </div>

        )
    }
}
export default MainPage;