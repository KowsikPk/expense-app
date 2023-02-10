import { Button, Dialog, DialogContent, DialogTitle, IconButton,  InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import BasicDatePicker from './BasicDatePicker'
import DropDown from './DropDown'
import CloseIcon from '@mui/icons-material/Close';
import data from "../Data/Data"

export const EditForm = (props) => {
    const [amount, setAmount] = useState(props.expenseDetailsList.amount)
    const [category, setCategory] = useState(props.expenseDetailsList.category)
    const [paymentMode, setPaymentMode] = useState(props.expenseDetailsList.paymentMode)
    const [note, setNote] = useState(props.expenseDetailsList.note)
    const [date, setDate] = useState(props.expenseDetailsList.date)



    const handleClose = () => {
        props.setOpen(false);
    };

    const buttonState = ([amount, category, paymentMode, note, data].filter(v => v === '').length === 0) ?
        false : true

    const addUpdatedDetails = () => {
        const expenseData = {
            amount: amount, category: category, paymentMode: paymentMode, note: note, date: date
        }
        props.updateData(expenseData)
        props.setOpen(false);
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
                            <BasicDatePicker setDate={setDate} date={date} />
                        </div>
                        <TextField
                            label="Note"
                            defaultValue={note}
                            multiline
                            maxRows={5}
                            onChange={event => setNote(event.target.value)}
                        />
                        <div style={{
                            paddingTop: 10, alignSelf: 'center'
                        }}>
                            <Button variant="contained" disabled={buttonState}
                                onClick={addUpdatedDetails}
                            >Save</Button>
                        </div>
                    </form>

                </DialogContent>
            </Dialog>
        </div >
    )
}

export default EditForm