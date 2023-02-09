import React, { useState } from 'react'
import { Button } from '@mui/material'
import PopupForm from './components/PopupForm'
// import ListExpense from './components/ListExpense'
import Home from './Home'
export const App = () => {
    const [open, setOpen] = useState(false)
    const [expenseDetailsList, setExpenseDetailsList] = useState([
        { amount: '120', category: 'Debit/Loan', paymentMode: 'Other UPI', note: 'Some ', date: 'Feb 8, 2023' }])
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