import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconsList from './IconsList';
import ExpenseCard from './ExpenseCard';
import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material';
export default function ListExpense(props) {
    const data = props.expenseDetailsList
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <List sx={{ backgroundColor: 'gray', }}>
            {data.map((item, i) =>
                <ListItem key={i} >
                    <ExpenseCard data={item} />
                </ListItem>
            )}

        </List >
    );
}