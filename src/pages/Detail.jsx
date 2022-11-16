import { useState } from "react"
import { useEffect } from "react"
import { useParams, redirect } from "react-router-dom"
import { getProduct } from "../api/products"
import { UserLayout } from "../components/UserLayout"

export const Detail = () => {
    const { productId } = useParams()
    const [ product, setProduct ] = useState({})

    useEffect(() => {
        getProduct(productId)
            .then(data => !data
                ? redirect("/") 
                : setProduct(data)
            );
    }, [productId])

    return (
        <UserLayout>
        <main>
            <div>{product?.nombre}</div>
            <div>Precio: ${product?.precio}</div> 
        </main>
        </UserLayout>
    )
}
