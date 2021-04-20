import "./Sobre.css";
function Sobre() {
  return (
    <div className="body">
      <div class="blocoSuperior">
        <nav className="menu-global">
          <div className="opcoes">
            <ul>
              <a href="../Sobre">Sobre</a> <a href="../Formacao">Formacao</a>{" "}
              <a href="../Experiencia">Experiencia </a>{" "}
              <a href="../Conhecimentos">Conhecimentos</a>{" "}
              <a href="../Contato">Contato</a>{" "}
            </ul>
          </div>
        </nav>
      </div>
      <div className="textoCentralSobre">
        Bom, eu sou o Mateus Vieira, um pequeno gafonhoto no ramo de progamação,
        <br />
        apaixonado por jogos e tecnologia desde criança. Sou formado em Técnico
        em <br />
        Informática pela Escola Técnica de Brasília e recentemente entrei na
        <br />
        Universidade de Brasília para cursar Engenharia de Software
      </div>
    </div>
  );
}

export default Sobre;
