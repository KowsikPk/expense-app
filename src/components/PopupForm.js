import { Button, Dialog, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import BasicDatePicker from './BasicDatePicker'
import DropDown from './DropDown'
import CloseIcon from '@mui/icons-material/Close';
import data from "../Data"

export const PopupForm = (props) => {
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [paymentMode, setPaymentMode] = useState('')
    const [note, setNote] = useState('')
    const [date, setDate] = useState(null)

    const handleClose = () => {
        const expenseData = {
            amount: amount, category: category, paymentMode: paymentMode, note: note, date: date
        }
        props.setExpenseDetailsList([...props.expenseDetailsList, expenseData])
        props.setOpen(false);
    };

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
                            value={amount}
                            style={{ paddingBottom: 15 }}
                            onChange={event => setAmount(event.target.value)}
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
                            <Button variant="contained"
                                onClick={handleClose}
                            >Add</Button>
                        </div>
                    </form>

                </DialogContent>
            </Dialog>
        </div >
    )
}

export default PopupForm