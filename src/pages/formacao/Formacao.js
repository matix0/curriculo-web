import "./Formacao.css";
function Formacao() {
  return (
    <div className="body">
      <div class="blocoSuperior">
        <nav className="menu-global">
          <div className="opcoes">
            <ul>
              <a href="../Sobre">Sobre</a>
              <a href="../Formacao">Formacao</a>{" "}
              <a href="../Experiencia">Experiencia </a>{" "}
              <a href="../Conhecimentos">Conhecimentos</a>{" "}
              <a href="../Contato">Contato</a>{" "}
            </ul>
          </div>
        </nav>
      </div>
      <div className="textoCentralFormacao">
        <div class="titulo">Ensino Médio</div>
        <span>(2017) Centro Educacional 104</span>
        <br />
        <span>(2018-2019) Colégio Reação</span>
        <br />
        <br />
        <div class="titulo">Ensino Técnico</div>

        <span>
          (2018-2019) Técnico em Informática, ETB - Escola Técnica de Brasília
        </span>
        <br />
        <br />
        <div class="titulo">Ensino Superior</div>
        <span>
          (2021 - Atual)Engenharia de Software, UnB - Univerisade de Brasília
        </span>
      </div>
    </div>
  );
}

export default Formacao;
