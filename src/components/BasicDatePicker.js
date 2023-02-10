import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker(props) {
    const [value, setValue] = React.useState(props.date);
    const getDate = (date) => {
        const dateStr = new Date(date).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })
        setValue(dateStr);
        props.setDate(value)
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Date"
                inputFormat="DD/MM/YYYY"
                value={value}
                onChange={(date) => {
                    getDate(date);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
