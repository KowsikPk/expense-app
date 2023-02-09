import { Button, Dialog, DialogContent, DialogTitle, IconButton, Input, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import BasicDatePicker from './BasicDatePicker'
import DropDown from './DropDown'
import CloseIcon from '@mui/icons-material/Close';
import data from "../Data/Data"

export const PopupForm = (props) => {
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState('')
    const [paymentMode, setPaymentMode] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState('')

    const cleanInput = () => {
        setAmount('')
        setCategory('')
        setPaymentMode('')
        setNote('')
        setDate('')
    }
    const handleClose = () => {
        props.setOpen(false);
        cleanInput()

    };


    const buttonState = ([amount, category, paymentMode, note, data].filter(v => v === '').length === 0) ?
        false : true

    const addDetails = () => {
        const expenseData = {
            amount: amount, category: category, paymentMode: paymentMode, note: note, date: date
        }
        props.setExpenseDetailsList([...props.expenseDetailsList, expenseData])
        cleanInput()
        props.setOpen(false);
        props.addExpenseToDB(expenseData)
    }

    return (
        <div>
            <Dialog open={props.open}
                onClose={handleClose}>
                <DialogTitle>
                    <div style={{ display: "flex" }}>
                        <div style={{ flexGrow: 1 }}>Add Expense</div>
                        <IconButton onClick={handleClose} sx={{ color: "black" }} >
                            <CloseIcon />
                        </IconButton>
                    </div>
                </DialogTitle>
                <DialogContent>
                    <form style={{ display: 'flex', flexDirection: 'column', padding: 20, }}>
                        <TextField label="Amount" variant="standard"
                            type="number"
                            value={amount}
                            style={{ paddingBottom: 15 }}
                            onChange={event => setAmount(event.target.value)}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                        />
                        <div style={{ paddingBottom: 10 }}>
                            <DropDown data={data[0].paymentMethods}
                                category={"Payment Mode"}
                                setInput={setPaymentMode}
                                input={paymentMode}
                            />
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <DropDown data={data[0].categoryList} category={"Category"}
                                setInput={setCategory}
                                input={category} />
                        </div>
                        <div style={{ paddingBottom: 10 }}>
                            <BasicDatePicker setDate={setDate} />
                        </div>
                        <TextField
                            label="Note"
                            multiline
                            maxRows={5}
                            onChange={event => setNote(event.target.value)}
                        />
                        <div style={{
                            paddingTop: 10, alignSelf: 'center'
                        }}>
                            <Button variant="contained" disabled={buttonState}
                                onClick={addDetails}
                            >Add</Button>
                        </div>
                    </form>

                </DialogContent>
            </Dialog>
        </div >
    )
}

export default PopupForm