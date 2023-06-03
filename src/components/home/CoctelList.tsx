import { useGetCoctel } from '../../hooks/getCoctelByFirstLetter'
import { List, Box, Pagination, Card } from '@mui/material'
import { CoctelItem } from './CoctelItem';
export const CoctelList = () => {
    const { coctels, isLoading, setletter } = useGetCoctel()
    console.log(coctels);

    return (
        <Box>
            <Pagination count={coctels.length} size="small" />
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >


            </List>
        </Box>
    )
}
