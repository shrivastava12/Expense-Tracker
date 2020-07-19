import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer';
import axios from "axios";


const initialState = {
    transactions:[],
    error:null,loading:true
}




export const GlobalContext =  createContext(initialState);



export const GlobalProvider = ({children}) => {
    const [state,dispatch] =  useReducer(AppReducer,initialState);
    
const getTransactions = async() =>{
    try{
        const {data} =  await axios.get('http://127.0.0.1:8000/api/expense/');
        dispatch({
            type:'GET_TRANSACTIONS',
            payload:data
        });
        console.log(data)

    }catch(err){
       console.log(err)
    }
   
} 

const deleteTransaction = async(id) =>{
    try{
        await axios.delete(`http://127.0.0.1:8000/api/expense/${id}`);

        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }catch(err){
        dispatch({
            type:'TRANSACTION_ERROR',
            payload:err.reponse.data.error
        })
    }
}

const addTransaction  =  async(transaction) => {

  
    try{
        const {data} =  await axios.post('http://127.0.0.1:8000/api/expense/',transaction);

        dispatch({
            type:'ADD_TRANSACTION',
            payload:data
            
        });
    

    }catch(err){
        console.log(err)
    }
}

    return (<GlobalContext.Provider value={{
        transactions:state.transactions,
        error:state.error,
        loading:state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}