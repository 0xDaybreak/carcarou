import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';



interface Car {
    make: string;
    model: string;
    year: string;
}

const MakeModelYear = () => {
    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');

    // State to store list of selected cars
    const [selectedCars, setSelectedCars] = useState<Car[]>([]);

    const handleAddCar = () => {
        if (make && model && year) {
            setSelectedCars([...selectedCars, { make, model, year }]);
            // Reset form fields after adding car to the list
            setMake('');
            setModel('');
            setYear('');
        }
    };

    return (
        <div style={{ margin: '20px' }}>
            <Typography variant="h5" gutterBottom>
                Add Car
            </Typography>

            {/* Make dropdown */}
            <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
                <InputLabel>Make</InputLabel>
                <Select
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                    label="Make"
                >
                    <MenuItem value="Toyota">Toyota</MenuItem>
                    <MenuItem value="Honda">Honda</MenuItem>
                    {/* Add more make options here */}
                </Select>
            </FormControl>

            {/* Model dropdown */}
            <FormControl fullWidth variant="outlined" style={{ marginBottom: '20px' }}>
                <InputLabel>Model</InputLabel>
                <Select
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    label="Model"
                >
                    {/* You can dynamically populate model options based on selected make */}
                    {/* For demonstration purpose, I'm using static options */}
                    <MenuItem value="Corolla">Corolla</MenuItem>
                    <MenuItem value="Camry">Camry</MenuItem>
                    {/* Add more model options here */}
                </Select>
            </FormControl>

            {/* Year input */}
            <TextField
                fullWidth
                label="Year"
                variant="outlined"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                style={{ marginBottom: '20px' }}
            />

            {/* Add button */}
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddCar}
                style={{ marginBottom: '20px' }}
            >
                Add Car
            </Button>

            {/* Selected cars list */}
            <Typography variant="h5" gutterBottom>
                Selected Cars
            </Typography>
            {selectedCars.map((car:Car, index) => (
                <Typography key={index} variant="body1" gutterBottom>
                    {`${car.make} - ${car.model} - ${car.year}`}
                </Typography>
            ))}
        </div>
    );
};

export default MakeModelYear;
