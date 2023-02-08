import React from 'react'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Box from '@mui/material/Box';
function IconsList() {
    return (
        <div style={{ display: 'flex' }}>
            <Box sx={{
                p: 0.5,
                borderRadius: 2,
                backgroundColor: '#e8f1ff',

            }}>
                <RestaurantIcon sx={{
                    color: '#191a1c', fontSize: 40,
                }} />
            </Box>
        </div >
    )
}

export default IconsList