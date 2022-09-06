import logoSmall from '../images/logo-small.png';

export default function Navbar(props){
    return(
        <nav className= {props.darkMode ? 'dark' : ''}>
            <div className="logo">
                <img src={logoSmall} alt="React logo" className="logo__img" />
                <h2 className='logo__text'>React Facts</h2>
            </div>
            <div className="toggle">
                <span className="toggle__mode toggle__mode-light">Light</span>
                <label for="switch" className="toggle__switch">
                    <input type="checkbox" id="switch" />
                    <span className="toggle__slider" onClick={props.toggleDarkMode}></span>
                </label>
                <span className='toggle__mode toggle__mode-dark'>Dark</span>
            </div>
        </nav>
    )
}