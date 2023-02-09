import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import PopupForm from './components/PopupForm'
import ListExpense from './components/ListExpense'
import Home from './Home'
import db from './firebase.js'
import { SocialDistance } from '@mui/icons-material'
export const App = () => {
    const [s, setTest] = useState([])
    const [open, setOpen] = useState(false)
    const [expenseDetailsList, setExpenseDetailsList] = useState([
        { amount: '120', category: 'Debit/Loan', paymentMode: 'Other UPI', note: 'Some ', date: 'Feb 8, 2023' }])

    useEffect(() => {
        db.collection('test').onSnapShot(snapshot => {
            console.log(setTest(snapshot.docs.map(doc => doc)))
            setTest(snapshot.docs.map(doc => doc.data()))
        })
    }, [])
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