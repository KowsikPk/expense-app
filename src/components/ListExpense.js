import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import IconsList from './IconsList';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
export default function ListExpense(props) {
    const data = props.expenseDetailsList
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <List sx={{ backgroundColor: 'gray', }}>
            {data.map((item, i) =>
                <ListItem key={i}>
                    <Accordion
                        expanded={expanded === 'panel'}
                        onChange={handleChange('panel')}
                        sx={{ width: 400 }}
                    >
                        <AccordionSummary>
                            <ListItemAvatar>
                                <IconsList />
                            </ListItemAvatar>
                            <ListItemText primary={item.category} secondary={item.date} />
                            <div style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                                <CurrencyRupeeIcon sx={{ fontSize: 20, alignSelf: 'center' }} />
                                <ListItemText primary={
                                    <div style={{ fontSize: 20, }}>
                                        {item.amount}
                                    </div>
                                } />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.note}
                        </AccordionDetails>
                    </Accordion>
                </ListItem>

            )
            }

        </List >
    );
}