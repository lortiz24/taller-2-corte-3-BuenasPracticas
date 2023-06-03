import { Card, Box, CardHeader, Avatar, IconButton, Typography, CardMedia } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import { Coctel } from '../../interface/CoctelInterface';


interface Props {
    coctel: Coctel
    letter: string
}
export const CoctelItem = ({ coctel, letter }: Props) => {
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
                            {letter.toUpperCase()}
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
                    >{coctel.strDrink}</Typography>}
                    subheader={coctel.strInstructions}
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
                    src={coctel.strDrinkThumb}
                    loading={'lazy'}
                    component="img"
                    alt="Paella dish"
                />

            </Box>
        </Card >
    )
}
