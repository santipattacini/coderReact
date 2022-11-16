import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../api/products";
import { Item } from "../Item/Item"
import { Loader } from '../Loader'
import './ItemContainer.scss'

export const AppContainer = () => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProducts(categoryId)
            .then((items) => {setProducts(items); setLoading(false) })
            .catch((e) => console.log(e))
    }, [categoryId]);

    return(
        <div className="item__container">
            {loading ? <Loader /> : null}
            {products.map((product) => {
                return <Item
                    key={product.id}
                    id={product.id}
                    nombre={product.nombre}
                    tag={product.tag}
                    precio={product.precio}
                    imagen={product.imagen}
                />
            })}
        </div>
    )
}   