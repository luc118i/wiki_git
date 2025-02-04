import { ItemConteiner } from "./Styles";
import PropTypes from "prop-types";
function ItemRepos({ repo, remover }) {
  const handleRemove = () => {
    remover(repo.id);
  };

  return (
    <ItemConteiner>
      <h3 className="nameRepositorio">{repo.name}</h3>
      <p>{repo.full_name}</p>
      {repo.description && <p>{repo.description}</p>}

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
  }).isRequired,
  remover: PropTypes.func.isRequired,
};

export default ItemRepos;
