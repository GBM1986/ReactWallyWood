// import React from "react";
// import { useCartItems } from '../CartProvider/CartProvider'

// const CartList = () => {
//   const { cartItems } = useCartItems();

//   return (
//     <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//       {cartItems.map((item) => (
//         <div key={item.id} className="p-4 bg-lightbrow shadow-md">
//           <img src={item.image} alt={item.name} className="w-full h-auto" />
//           <div className="mt-2">
//             <h2 className="text-lg font-semibold">{item.name}</h2>
//             <p className="text-sm text-darkGray">{item.description}</p>
//             <p className="mt-2 text-lg font-bold">${item.price}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CartList;
