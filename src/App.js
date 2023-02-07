import React, { useState } from 'react'
import { Button } from '@mui/material'
import PopupForm from './components/PopupForm'

export const App = () => {
    const [open, setOpen] = useState(false)

    return (
        <div>

            <Button variant="contained"
                onClick={() => setOpen(true)}
            >Add</Button>
            {/* <ListExpense /> */}
            <PopupForm open={open} setOpen={setOpen} />

        </div >
    )
}