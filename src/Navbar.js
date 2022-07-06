import logo from './logo.svg';

const Navbar = () => {
    
    return (
        <nav>
            <div id="nav-title">
                <img id="nav-title-image" src={logo} alt="logo" />
                <div id="nav-title-text">Windfall</div>
            </div>
            <div id="nav-links">
                <div className="nav-links-link">Home</div>
            </div>
            <div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar;