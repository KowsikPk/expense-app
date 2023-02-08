import React, { useState } from 'react'
import { Button, ListItemText } from '@mui/material'
import PopupForm from './components/PopupForm'
import ListExpense from './components/ListExpense'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
const Home = () => {
    const [open, setOpen] = useState(false)
    const [expenseDetailsList, setExpenseDetailsList] = useState([
        { amount: '120', category: 'Debit/Loan', paymentMode: 'Other UPI', note: 'Some ', date: 'Feb 8, 2023' }])

    return (
        <div >
            <h1 style={{ textAlign: 'center' }}>This Month</h1>
            <h2 style={{ textAlign: 'center' }}>You Spend</h2>
            <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                <CurrencyRupeeIcon sx={{ fontSize: 20, alignSelf: 'center' }} />
                <ListItemText primary={
                    <div style={{ fontSize: 20 }}>
                        {200}
                    </div>
                } />
            </div>
        </div >
    )
}

export default Home