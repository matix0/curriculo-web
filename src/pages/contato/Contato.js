import "./Contato.css";
import img1 from "../../images/gh.png";
import img2 from "../../images/ig.png";
import img3 from "../../images/in.png";
function Contato() {
  return (
    <div className="body">
      <div class="blocoSuperior">
        <nav className="menu-global">
          <div className="opcoes">
            <ul>
              <a href="../Sobre">Sobre</a>{" "}
              <a href="../Formacao">Conhecimentos</a>{" "}
              <a href="../Experiencia">Experiencia </a>{" "}
              <a href="../Conhecimentos">Conhecimentos</a>{" "}
              <a href="../Contato">Contato</a>{" "}
            </ul>
          </div>
        </nav>
      </div>
      <h5>mateusviniciuspw@gmail.com</h5>
      <div className="imagensCentral">
        <a href="https://github.com/matix0">
          <img src={img1} />
        </a>
        <a href="https://www.instagram.com/matiox_">
          <img id="img2" src={img2} />
        </a>
        <a href="https://www.linkedin.com/in/mateus-vieira-b35a66199/">
          <img src={img3} />
        </a>
      </div>
    </div>
  );
}

export default Contato;
