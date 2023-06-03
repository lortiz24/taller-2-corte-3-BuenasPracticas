import { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { Letters } from '../../interface/CoctelInterface';

interface Propo {
    onChange?: (value: Letters) => void;
}


const abecedario: Letters[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


const AlphabetList = ({ onChange }: Propo) => {
    const [selectedLetter, setSelectedLetter] = useState<Letters>('a');

    const handleLetterClick = (letter: Letters) => {
        setSelectedLetter(letter);
        if (onChange)
            onChange(letter)
    };


    return (
        <div>
            {abecedario.map((letter) => (
                <Button
                    key={letter}
                    variant={selectedLetter === letter ? 'contained' : 'outlined'}
                    onClick={() => handleLetterClick(letter)}
                >
                    <Typography variant="h6">{letter}</Typography>
                </Button>
            ))}

        </div>
    );
};

export default AlphabetList;
