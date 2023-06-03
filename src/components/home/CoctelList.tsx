import { useState } from 'react';
import { useGetCoctel } from '../../hooks/getCoctelByFirstLetter';
import { Box, Pagination, PaginationItem, Typography, Grid } from '@mui/material';
import { CoctelItem } from './CoctelItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AlphabetList from './Letters';
import { Letters } from '../../interface/CoctelInterface';


const itemsPerPage = 3;


export const CoctelList = () => {
    const { coctels, setletter, letter } = useGetCoctel();
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentWords = coctels.slice(startIndex, endIndex);

    const totalPages = Math.ceil(coctels.length / itemsPerPage);

    const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };


    const handledLetter = (letter: Letters) => {
        setletter(letter)
    }
    return (
        <Grid container rowGap={2} >

            <Grid item>
                <AlphabetList onChange={handledLetter} />
            </Grid>
            <Grid
                xs={12}
                item
            >
                <Pagination
                    count={totalPages}
                    page={currentPage} // Página actual
                    onChange={handlePageChange} // Función para manejar el cambio de página
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Grid>
            <Grid
                item
                xs={12}
            >

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2,
                        justifyContent: 'center',
                    }}
                >

                    {currentWords.map((coctel, index) => (
                        <Typography key={index} variant="body1">
                            <CoctelItem key={coctel.idDrink} coctel={coctel} letter={letter} />
                        </Typography>
                    ))}
                </Box>


            </Grid>
            <Grid
                item
                marginBottom={10}
                xs={12}
            >
                <Pagination
                    count={totalPages}
                    page={currentPage} // Página actual
                    onChange={handlePageChange} // Función para manejar el cambio de página
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Grid>
        </Grid>

    );
};




/* 

const { coctels, isLoading, setletter, letter } = useGetCoctel();
const [currentPage, setCurrentPage] = useState(1);

const handlePageChange = (event, page) => {
    setCurrentPage(page); // Actualizar la página actual cuando cambie
};


return (
    <Box>
        <Pagination
            count={10}
            page={currentPage} // Página actual
            onChange={handlePageChange} // Función para manejar el cambio de página
            renderItem={(item) => (
                <PaginationItem
                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                    {...item}
                />
            )}
        />
        <List>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                    justifyContent: 'center',
                }}
            >
                {coctels.map((coctel) => (
                    <CoctelItem key={coctel.idDrink} coctel={coctel} letter={letter} />
                ))}
            </Box>
        </List>
    </Box> */