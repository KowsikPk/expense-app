import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Avatar } from '@mui/material';

export default function DropDown(props) {
    const [paymentMode, setPaymentMode] = React.useState('');
    const handleChange = (event) => {
        setPaymentMode(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.category}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={paymentMode}
                    label={props.category}
                    onChange={handleChange}
                >
                    {props.data.map((method, i) =>
                        <MenuItem value={i}>
                            {/* <Avatar style={{ backgroundColor: "red", margin: 5 }}>OP</Avatar> */}
                            {method}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box >
    );
}