import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function ListExpense() {
    const data = [{
        amount: 200,
        category: "Food",
        date: "Jan 9, 2014",
        primary: "Food"
    },
    {
        amount: 2020,
        category: "Work",
        date: "Jan 9, 2015",
        primary: "Work"
    },
    {
        amount: 130,
        category: "Vacation",
        date: "Jan 9, 2014",
        primary: "Vacation"
    },
    {
        amount: 120,
        category: "Food",
        date: "Jan 9, 2014",
        primary: "Food"
    },
    ]
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {data.map(item =>
                <div>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.category} secondary={item.date} />
                    </ListItem>
                </div>
            )}
        </List>
    );
}