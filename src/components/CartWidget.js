import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className='copa-container'>
            <img src={require('./img/copa.png')} />
            <span className='copa-items'>3</span>
        </div>
    );
};

export default CartWidget;
