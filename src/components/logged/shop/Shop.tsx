
import './Shop.css';
import ColorGrid from "./ColorGrid";


interface Color {
    ral: string;
    name: string;
    hex: string;
}

const Shop = () => {
    const colors:Color[] = [
        { ral: 'RAL 1000', name: 'Green beige', hex: '#CDBA88' },
        { ral: 'RAL 1001', name: 'Beige', hex: '#D0B084' },
        { ral: 'RAL 1002', name: 'Sand yellow', hex: '#D2AA6D' },
        // Add more colors as needed
    ];
    return (
    <div className={"shop-container"}>
        <ColorGrid colors={colors} />
    </div>
    );
}

export default Shop;