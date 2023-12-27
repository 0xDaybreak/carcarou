import './CarSelectionForm.css'
import CarLogos from "./CarLogos";
import "./CarSelectionForm.css"

const CarSelectionForm = () => {

    return(
        <div className={"car-selection_form"}>
            <h1>Please choose the make of the car you would like to configure the paint job for</h1>
            <CarLogos/>
        </div>
    );
};

export default CarSelectionForm;