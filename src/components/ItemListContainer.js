import ItemCount from "./ItemCount/ItemCount";
import { useEffect } from "react";

const ItemListContainer = ({greeting}) => {
    const getProducts = new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve([
                'producto 1',
                'producto 2',
                'producto 3',
                'producto 4',
                'producto 5',
                'producto 6',
                'producto 7',
            ])
        }, 2000)
    })

    return (
<div>
            <h1>{greeting}</h1>
            <ItemCount />
        </div>
    );
};
export default ItemListContainer;