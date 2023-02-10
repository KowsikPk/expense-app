import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CreditScoreIcon from '@mui/icons-material/CreditScore';


export default function DropDown(props) {
    const handleChange = (event) => {
        props.setInput(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.category}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.input}
                    label={props.category}
                    onChange={handleChange}
                >
                    {props.data.map(method =>
                        <MenuItem key={method} value={method}>
                            {/* <Avatar style={{ backgroundColor: "red", margin: 5 }}>OP</Avatar> */}
                            {method}<CreditScoreIcon />
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
        </Box >
    );
}