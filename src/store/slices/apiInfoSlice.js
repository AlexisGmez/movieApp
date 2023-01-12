import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const apiInfoSlice = createSlice({

    name: 'apiData',
    initialState: [],
    reducers:{

        insertData:( state, {payload} )=> payload,
        insertDataById:(state, {payload})=> payload
    }
})

export const { insertData, insertDataById } = apiInfoSlice.actions;

export default apiInfoSlice.reducer


export const getDataApiThunk = (type='discover', searchQuery='') => async(dispatch)=>{

    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'bccc5a648d2b9be688cf2ed21dc8cc24';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

    try {
       const {data:{results}} = await axios.get(`${API_URL}/${type}/movie`,{
            params:{
                api_key: API_KEY,  
            }
        })
        dispatch( insertData(results) );
       
    } catch (error) {
        console.log(error)
    }   

}

export const getDataByIdThunk = ( id )=> async( dispatch )=>{
    const API_URL = 'https://api.themoviedb.org/3/movie/';
    const API_KEY = 'bccc5a648d2b9be688cf2ed21dc8cc24';
    try {
        const {data} = await axios.get(`${API_URL}${id}`,{
             params:{
                 api_key: API_KEY,  
             }
         })
         
         dispatch( insertDataById(data) );
         

     } catch (error) {
         console.log(error)
     }   
}