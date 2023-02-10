import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ExpenseCard from './ExpenseCard';


export default function ListExpense(props) {
    const data = props.expenseDetailsList
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