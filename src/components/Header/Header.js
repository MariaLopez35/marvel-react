import { useState } from 'react';
import './Header.scss';
import { Menu } from 'semantic-ui-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const currentPath = location.pathname.replace("/", "");

    const [activeItem, setActiveItem] = useState(currentPath);
    const navigate = useNavigate();

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        navigate(name);
    };

    return (
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item name="inicio" active={activeItem === "inicio"} onClick={handleItemClick} />
                <Menu.Item name="series" active={activeItem === "series"} onClick={handleItemClick} />
                <Menu.Item name="comics" active={activeItem === "comics"} onClick={handleItemClick} />
            </Menu>
        </div>
    );
}
