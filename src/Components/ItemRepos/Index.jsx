import { ItemConteiner } from "./Styles";
import PropTypes from "prop-types";
function ItemRepos({ repo, remover }) {
  const handleRemove = () => {
    remover(repo.id);
  };

  return (
    <ItemConteiner>
      <h3 className="nameRepositorio">{repo.name}</h3>
      {/*<p>{repo.full_name}</p>*/}
      <p className="nomeUsuario">
        <strong>{repo.owner.login}</strong>
      </p>
      {repo.fork && repo.parent && (
        <p className="repositorioOriginal">
          Repositório original:{" "}
          <strong>
            {repo.parent.owner.login}/{repo.parent.name}
          </strong>
        </p>
      )}
      {repo.description && <p className="description">{repo.description}</p>}

      <a className="verMais" href={repo.html_url} target="_blank">
        Ver mais
      </a>
      <button onClick={handleRemove}>Remover</button>
      <hr></hr>
    </ItemConteiner>
  );
}

ItemRepos.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
    }).isRequired,
    fork: PropTypes.bool.isRequired, // Verifica se é um fork
    parent: PropTypes.shape({
      full_name: PropTypes.string, // Nome completo do repositório original
      name: PropTypes.string, // Nome do repositório original
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired, // Dono do repositório original
      }),
    }), // Define a estrutura do repositório original, caso seja um fork
  }).isRequired,
  remover: PropTypes.func.isRequired,
};

export default ItemRepos;
