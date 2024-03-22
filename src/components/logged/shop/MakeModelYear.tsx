import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from '@mui/material';
import './MakeModelYear.css';


interface Car {
    make: string;
    model: string;
    year: string;
}

interface MakeModelYearProps {
    handleConfirm: () => void;
}

const MakeModelYear:React.FC<MakeModelYearProps> = (props) => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [selectedCars, setSelectedCars] = useState<Car[]>([]);

    const handleAddCar = () => {
        if (make && model && year) {
            setSelectedCars([...selectedCars, {make, model, year}]);
            // Reset form fields after adding car to the list
            setMake('');
            setModel('');
            setYear('');
        }
    };

    return (
        <div className={"make-model-year-wrapper"}>
            <Typography variant="h5" gutterBottom>
                Add Car
            </Typography>

            <FormControl fullWidth>
                <InputLabel>Make</InputLabel>
                <Select
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    label="Make"
                >
                    <MenuItem value="Toyota">Toyota</MenuItem>
                    <MenuItem value="Honda">Honda</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel>Model</InputLabel>
                <Select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    label="Model"
                >

                    <MenuItem value="Corolla">Corolla</MenuItem>
                    <MenuItem value="Camry">Camry</MenuItem>
                </Select>
            </FormControl>

            <TextField
                fullWidth
                label="Year"
                variant="outlined"
                value={year}
                onChange={(e) => setYear(e.target.value)}
            />

            <Button
                variant="contained"
                color="secondary"
                onClick={handleAddCar}
                style={{borderRadius: "40px"}}
            >
                Add Car
            </Button>

            <Typography style={{marginTop: "1rem"}} variant="h5" gutterBottom>
                Cars your body paint shop can service:
            </Typography>
            {selectedCars.map((car: Car, index) => (
                <Typography key={index} variant="body1" gutterBottom>
                    {`${car.make} - ${car.model} - ${car.year}`}
                </Typography>
            ))}
            <Button
                variant="contained"
                color="primary"
                onClick={props.handleConfirm}
                style={{borderRadius: "40px"}}
            >
                Confirm
            </Button>
        </div>
    );
};

export default MakeModelYear;
