import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import PopupForm from './components/PopupForm'
import ListExpense from './components/ListExpense'
import Home from './Home'
import db from './firebase.js'
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

import { SocialDistance } from '@mui/icons-material'
export const App = () => {
    const [s, setTest] = useState([])
    const [open, setOpen] = useState(false)
    const [expenseDetailsList, setExpenseDetailsList] = useState([
        { amount: '120', category: 'Debit/Loan', paymentMode: 'Other UPI', note: 'Some ', date: 'Feb 8, 2023' }])



    // useEffect(() => {
    //     const q = query(collection(db, "expense-list"))
    //     onSnapshot(q, (querySnapshot) => {
    //         setExpenseDetailsList([querySnapshot.docs.map(doc => doc.data())]);
    //     });
    // }, [])


    // console.log(s)
    // console.log(expenseDetailsList)
    return (
        <div>
            {/* <Button variant="contained"
                onClick={() => setOpen(true)}
            >Add</Button>
            <ListExpense expenseDetailsList={expenseDetailsList} />
            <PopupForm
                open={open} setOpen={setOpen}
                setExpenseDetailsList={setExpenseDetailsList}
                expenseDetailsList={expenseDetailsList}
            /> */}

            <Home />
        </div >
    )
}