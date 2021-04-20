import "./Conhecimentos.css";
function Conhecimentos() {
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
      <div className="textoCentralConhecimento">
        <div class="titulo">Capacidades Gerais</div>
        <span>
          Montagem e Configuração de Computadores, Redes E Pacote Office
        </span>
        <br />
        <br />
        <br />
        <div class="titulo">Idiomas</div>
        <span>Inglês Intermediário</span>
        <br />
        <br />
        <br />
        <div class="titulo">Linguagens de Progamação</div>
        <span>C/C++ , Java , JavaScript</span>
        <br />
        <br />
        <br />
        <div class="titulo">Front-End</div>
        <span>HTML, CSS , bootstrap</span>
      </div>
    </div>
  );
}

export default Conhecimentos;
