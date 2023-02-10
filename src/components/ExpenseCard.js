import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { CardHeader, CardContent, CardActions, Collapse, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconsList from './IconsList';
import db from '../firebase.js'
import EditForm from './EditForm'
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ExpenseCard(props) {
    const [open, setOpen] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const data = props.data.expenseDetails
    const deleteData = () => {
        deleteDoc(doc(db, "expense-list", props.data.id))
    }
    const updateData = (expenseData) => {
        const docRef = (doc(db, "expense-list", props.data.id))
        updateDoc(docRef, expenseData);
    }
    return (
        <Card sx={{ width: 400 }}>
            <CardHeader
                avatar={<IconsList category={data.category} />}
                action={
                    <div style={{
                        display: 'flex', flexDirection: 'row', alignSelf: 'center'
                    }}>
                        <CardContent sx={{ fontSize: 20 }}>
                            ₹ {data.amount}
                        </CardContent>
                    </div>
                }
                title={data.category}
                subheader={data.date}
            />

            <CardActions disableSpacing >
                <IconButton onClick={deleteData} sx={{ borderRadius: 3, border: "1px solid", marginRight: 1 }}>
                    <DeleteIcon sx={{ color: '#007FFF', }} />
                </IconButton>
                <IconButton sx={{ borderRadius: 3, border: "1px solid", }} onClick={() => setOpen(true)}>
                    <EditIcon sx={{ color: '#007FFF' }} />
                </IconButton>
                <EditForm
                    open={open} setOpen={setOpen}
                    expenseDetailsList={data}
                    updateData={updateData}
                />
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>
                        {data.note}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
}
