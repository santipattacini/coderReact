import './Item.scss'
import { useNavigate } from 'react-router-dom';

export const Item = (props) => {    const navigate = useNavigate()
    return (
        <div className="card">
            <div className="card__image"><img src={props.imagen} alt="Foto del artículo" /></div>
            <h3 className="card__title" onClick={() => navigate(`/product/${props.id}`)}>{props.nombre}</h3>
            <div><span className="card__detail">{props.tag}</span></div>
            <span className="card__price">${props.precio}</span>
        </div>
    )
};
