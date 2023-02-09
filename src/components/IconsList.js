import React from 'react'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import Box from '@mui/material/Box';
function IconsList(props) {
    const icons = {
        Food: <RestaurantIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        Shopping: <ShoppingBagIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        Fuel: <LocalGasStationIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        Grocery: <LocalGroceryStoreIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        Snacks: <LunchDiningIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        Coffee: <EmojiFoodBeverageIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        Travel: <AirplaneTicketIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        Entertainment: <LiveTvIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        'Debit/Loan': <CreditScoreIcon sx={{ color: '#007FFF', fontSize: 40 }} />,
        'Recharge/Subscription': <PhonelinkIcon sx={{ color: '#007FFF', fontSize: 40 }} />
    }
    const cate = props.category
    return (
        <div style={{ display: 'flex' }}>
            <Box sx={{
                p: 0.5,
                borderRadius: 2.5,
                border: '1px solid grey'

            }}>
                {icons[props.category]}
            </Box>
        </div >
    )
}

export default IconsList

