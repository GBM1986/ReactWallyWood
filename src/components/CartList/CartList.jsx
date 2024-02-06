import { useCartItems } from '../CartProvider/CartProvider';
import { useAuth } from '../AuthProvider/AuthProvider';
import axios from 'axios';
import { AiFillDelete } from 'react-icons/ai';

const CartList = () => {
    const { cartItems, setCartItems } = useCartItems();
    const { loginData } = useAuth();

    let sum = cartItems.reduce((prev, current) => {
        return prev + +current.poster.price;
    }, 0);

    const handleTrashClick = async (id) => {
        const options = {
            headers: {
                Authorization: `Bearer ${loginData.access_token}`,
            },
        };
        const endpoint = `http://localhost:3000/cart/${id}`;
        const result = await axios.delete(endpoint, options);
        if (result.data) {
            const newCartData = await axios.get(endpoint, options);
            setCartItems(newCartData.data);
        }
    };

    return (
        <div>
            <div className="font-bold grid grid-cols-4 gap-0 py-2 border-b border-gray-300">
                <div>Produkt</div>
                <div>Antal</div>
                <div>Pris</div>
                <div>Handling</div>
            </div>
            {cartItems &&
                cartItems.map((item) => (
                    <div key={item.id} className="grid grid-cols-4 gap-0 py-2 border-b border-gray-300">
                        <div>{item.poster.name}</div>
                        <div>{item.quantity}</div>
                        <div>{item.poster.price},00 DKK</div>
                        <div>
                            <AiFillDelete onClick={() => handleTrashClick(item.id)} />
                        </div>
                    </div>
                ))}
            <div className="flex justify-end py-2 border-b border-gray-300">
                <div>Total</div>
                <div className="font-bold">{sum},00 DKK</div>
            </div>
        </div>
    );
};

export default CartList;
