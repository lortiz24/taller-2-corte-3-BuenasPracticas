import React from 'react'
import { Card, Box, CardHeader, Avatar, IconButton, Typography, CardMedia } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

export const CoctelItem = () => {
    return (
        <Card
            sx={{
                width: {
                    xs: '100%', sm: 400, lg: 400
                },
                borderRadius: '2rem'
            }}>
            <Box>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            M
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={<Typography
                        variant='body2'
                        fontSize={20}
                    >efefefefefef</Typography>}
                />
                <CardMedia
                    sx={{
                        width: {
                            xs: '100%'
                        },
                        height: {
                            xs: '100%', sm: 400, lg: 400
                        },
                        objectFit: 'contain',
                    }}
                    loading={'lazy'}
                    component="img"
                    alt="Paella dish"
                />

            </Box>
        </Card >
    )
}
