import '../css/Navbar_Style.css';
import 'boxicons';


const Navbar = () => {

    return (
        <header className='header1'>
            <a href="/principalusuario" className="logo">Sistema de Riego en tiempo real</a>

            <input type="checkbox" id='check' />
            <label htmlFor="check" className='icons1'>
                <i className='bx bx-menu' id='menu-icon'></i>
                <i className='bx bx-x' id='close-icon'></i>
            </label>

        </header>

    )
}

export default Navbar;