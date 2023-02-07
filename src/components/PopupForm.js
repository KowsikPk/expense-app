import { Dialog, DialogContent, DialogTitle, IconButton, TextField } from '@mui/material'
import React from 'react'
import BasicDatePicker from './BasicDatePicker'
import DropDown from './DropDown'
import CloseIcon from '@mui/icons-material/Close';
import data from "../Data"

export const PopupForm = (props) => {
    const handleClose = () => {
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
                    <div >
                        <form>
                            <TextField label="Amount" variant="standard"
                                value={0}
                                style={{ paddingBottom: 15 }}
                            />
                            <div style={{ paddingBottom: 10 }}>
                                <DropDown data={data[0].paymentMethods} category={"Payment Mode"} />
                            </div>
                            <div style={{ paddingBottom: 10 }}>
                                <DropDown data={data[0].categoryList} category={"Category"} />
                            </div>
                            <BasicDatePicker />
                        </form>
                    </div>

                </DialogContent>
            </Dialog>
        </div >
    )
}

export default PopupForm