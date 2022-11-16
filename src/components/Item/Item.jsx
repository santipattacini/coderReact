import './Item.scss'

export const Item = ({imagen, nombre, tag, precio}) => {
    return (
        <div className="card">
            <div className="card__image"><img src={imagen} alt="Foto del artículo" /></div>
            <h3 className="card__title">{nombre}</h3>
            <div><span className="card__detail">{tag}</span></div>
            <span className="card__price">${precio}</span>
        </div>
    )
};
