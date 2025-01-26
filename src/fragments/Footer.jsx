import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Footer_Style.css'; 


const Footer = () => {
    return (
        <div className="footerContainer">
          <div className="footerContent">
            {/* Columna izquierda */}
            <div className="footerLeft">
              <p>Elaborado por:</p>
              <ul className="footerNames">
                <li>Hilary Madeley Calva Camacho</li>
              </ul>
            </div>
            {/* Columna derecha */}
            <div className="footerRight">
              <p>© 2025 Derechos Reservados</p>
            </div>
          </div>
        </div>
      );
      
}

export default Footer;