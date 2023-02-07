import { Button, Dialog, DialogContent, DialogTitle, TextField, Tooltip } from '@mui/material'
import React from 'react'
import DropDown from './DropDown'


export const PopupForm = () => {
    return (
        <div>
            <Dialog open={true}>
                <DialogTitle><div>add

                </div></DialogTitle>
                <DialogContent>

                    <div >
                        <form>
                            <TextField label="Amount" variant="standard"
                                value={0}
                                style={{ paddingBottom: 15 }}
                            />
                            <DropDown />
                        </form>
                    </div>

                </DialogContent>
            </Dialog>
        </div>
    )
}

export default PopupForm