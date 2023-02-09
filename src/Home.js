import React, { useState } from 'react'
import { Button, ListItemText } from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import PopupForm from './components/PopupForm'
import ListExpense from './components/ListExpense'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Home = () => {
    const [open, setOpen] = useState(false)
    const [expenseDetailsList, setExpenseDetailsList] = useState([
        { amount: '120', category: 'Debit/Loan', paymentMode: 'Other UPI', note: 'Some ', date: 'Feb 8, 2023' },
        { amount: '120', category: 'Debit/Loan', paymentMode: 'Other UPI', note: 'Some ', date: 'Feb 8, 2023' },
        { amount: '120', category: 'Debit/Loan', paymentMode: 'Other UPI', note: 'Some ', date: 'Feb 8, 2023' },
    ])
    let totalExpense = 0
    expenseDetailsList.map(a => {
        totalExpense += parseInt(a.amount)
    })

    return (
        <div >
            <div >
                <h1 style={{ textAlign: 'center' }}>This Month</h1>
                <h2 style={{ textAlign: 'center' }}>You Spend</h2>

                <ListItemText primary={
                    <div style={{ textAlign: 'center' }}>
                        <CurrencyRupeeIcon />{totalExpense}
                    </div>
                } />

                <ListExpense expenseDetailsList={expenseDetailsList} />
                <PopupForm
                    open={open} setOpen={setOpen}
                    setExpenseDetailsList={setExpenseDetailsList}
                    expenseDetailsList={expenseDetailsList}
                />

            </div >
            <Fab sx={{ position: 'absolute', bottom: 16, right: 16 }} color="primary" onClick={() => setOpen(true)}>
                <AddIcon />
            </Fab>
        </div >
    )
}

export default Home