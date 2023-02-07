import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropDown() {
    const [paymentMode, setPaymentMode] = React.useState('');
    const handleChange = (event) => {
        setPaymentMode(event.target.value);
    };
    const paymentMethods = ["Paytm", "Gpay", "PhonePe", "Other UPI", "Cash", "Credit Card", "Debit Card", "Other"]

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Payment Mode</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={paymentMode}
                    label="Payment Mode"
                    onChange={handleChange}
                >
                    {paymentMethods.map((method, i) =>
                        <MenuItem value={i}>{method}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box >
    );
}