//* ===============================================================================

//! create a new file -> cartSlice.js
//todo: Creating a slice for our store
// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItems: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItems: (state, action) => {
//       state.items.pop();
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });

// export const { addItems, removeItems, clearCart } = cartSlice.actions;

// export default cartSlice.reducer;

//* ===============================================================================

//! create a new file -> store.js
//todo: Putting "cartSlice" in our store
// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from "./cartSlice";

// const store = configureStore({
//   reducer: {
//     cart: cartSlice,  //* { here -> name: sliceName}
//   },
// });

// export default store;

//* ===============================================================================

//! in our existing file -> index.js
//todo: we will provide store access to whole application (it's our choice)

// import { Provider } from "react-redux";
// import store from "./util/store";

// const AppLayout = () => {
//   const [searchVal, setSearchVal] = useState({
//     searchKeyword: "",
//   });

//   const online = useOnline();
//   return !online ? (
//     <OfflinePage />
//   ) : (
//     // use Provider in root level
//     <Provider store={store}>
//       <SearchContext.Provider
//         value={{
//           searchVal: searchVal,
//           setSearchVal: setSearchVal,
//         }}
//       >
//         <Header />
//         <Outlet />
//         <Footer />
//       </SearchContext.Provider>
//     </Provider>
//   );
// };

//* ===============================================================================

//! in our existing file -> header.js
// Reading data from store, subscribing to our store using useSelector hook
//todo: let suppose we have a "cart" in our header

// import { list } from "postcss";
// import { useSelector } from "react-redux";

// const cartItems = useSelector((store) => store.cart.items);

// // in header's ul > li
// <li>Cart {cartItems.length}</li>

//* ===============================================================================

//! let suppose we have product page => product.js
// Modifying data in our store
//todo: let suppose we have a "add to cart" button in our product page

// import { useDispatch } from "react-redux";
// import { addItem } from "./utils/cartSlice";

// const dispatch = useDispatch();

// const handleAddItem = () => {
//   dispatch(addItem("Apple"));
// };

// <button onClick={() => handleAddItem()}>Add to Cart</button>;
