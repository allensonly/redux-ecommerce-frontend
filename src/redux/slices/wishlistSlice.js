import { createSlice } from "@reduxjs/toolkit";


const wishlistSlice = createSlice({
    name:'wishliast',
    initialState:[],//wishlist may have more than one value
    reducers:{
        //actions
        //function/logic to add items into wishlist array
        addToWishlist :(state,action) =>{
            state.push(action.payload)
        },

        //function to remove items from the wishlist

        removeFromWishlist :(state,action) => {
          return  state.filter(item => item.id!=action.payload)

        } 
    }
})

export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer