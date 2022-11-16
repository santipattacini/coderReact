const products = [
    {
        id: 0,
        categoria: "lisos",
        nombre: "Short de baño liso",
        tag: "3 colores",
        precio: 5499,
        imagen: "https://i.ibb.co/3W6Bxg6/lisa.jpg"
        
    },
    {
        id: 1,
        categoria: "tricolor",
        nombre: "Short de baño tricolor",
        tag: "3 combinaciones",
        precio: 5799,
        imagen: "https://i.ibb.co/BLTQkCD/tricolor.jpg"
    },
    {
        id: 2,
        categoria: "estampados",
        nombre: "Short de baño estampado",
        tag: "2 diseños",
        precio: 5999,
        imagen: "https://i.ibb.co/JsMszTm/estampada.jpg"
    },
    {
        id: 3,
        categoria: "premium",
        nombre: "Short de baño Denver",
        tag: "Textura premium",
        precio: 6499,
        imagen: "https://i.ibb.co/Z2Gt3Wq/premium.jpg"
    },
    {
        id: 4,
        categoria: "estampados",
        nombre: "Short de baño estampado",
        tag: "Estampas bordadas",
        precio: 5999,
        imagen: "https://i.ibb.co/nz5yNJL/estampada-bord.jpg"
    },
    {
        id: 5,
        categoria: "estampados",
        nombre: "Short de baño estampado",
        tag: "2 diseños",
        precio: 5999,
        imagen: "https://i.ibb.co/WWDkJfV/estampada-petro.jpg"
    },
    {
        id: 6,
        categoria: "lisos",
        nombre: "Short de baño liso",
        tag: "3 colores",
        precio: 5499,
        imagen: "https://i.ibb.co/1Lw8gwZ/lisa-mosti.jpg"
    },
    {
        id: 7,
        categoria: "lisos",
        nombre: "Short de baño liso",
        tag: "3 colores",
        precio: 5499,
        imagen: "https://i.ibb.co/gWNTccz/lisa-rosa.jpg"
    },
    {
        id: 8,
        categoria: "tricolor",
        nombre: "Short de baño tricolor",
        tag: "3 combinaciones",
        precio: 5799,
        imagen: "https://i.ibb.co/Rh2xLQb/tricolor-aqua.jpg"
    },
    {
        id: 9,
        categoria: "tricolor",
        nombre: "Short de baño tricolor",
        tag: "3 combinaciones",
        precio: 5799,
        imagen: "https://i.ibb.co/yhvprtf/tricolor-mosti.jpg"
    }
]

export const getProducts = (categoria) =>
    new Promise((res,rej) => {
        const response = categoria
            ? products.filter((p) => p.categoria === categoria)
            : products;
        setTimeout(() => {
            res(response);
        }, 250);
    });

export const getProduct = (productId) =>
    new Promise((res,rej) => {
        const response = products.find((product) => product.id === +productId);
        setTimeout(() => {
            res(response);
        }, 250);
    });
