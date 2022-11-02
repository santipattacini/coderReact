export const ItemListContainer = ({title, detail, price}) => {
    return (
        <div className="card">
            <div className="card__image"><img src="../../img/products/lisa-celeste.jpg" alt="Foto del artículo" /></div>
            <h3 className="card__title">{title}</h3>
            <div><span className="card__detail">{detail}</span></div>
            <span className="card__price">{price}</span>
        </div>
    );
}