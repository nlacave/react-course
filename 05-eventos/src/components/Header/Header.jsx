import './Header.css';
import PropTypes from 'prop-types';

export const Header = ({children, title, show}) => {
    return (
        <header className="header">
            <h1 className="title">{title || "Titulo por defecto"}</h1>
            {children}
            {show && "Mostramos el texto porque show es true"}
        </header>
    )
}

Header.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    show: PropTypes.bool,
}