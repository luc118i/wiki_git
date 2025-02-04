import gitLogo from "./../Assets/github-mark-white.png";
import { Container, ReposContainer } from "./Styles";
import Input from "../Components/Input";
import Button from "../Components/Button";
import ItemRepos from "../Components/ItemRepos/Index";
import { useState } from "react";
import { api } from "../services/Api";
function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handSearchRepos = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id);

        if (!isExist) {
          setRepos((prev) => [...prev, data]);
        } else {
          alert("Repositório já adicionado");
        }
      }
    } catch (error) {
      console.error("Erro ao buscar o repositório:", error);
      alert("Erro ao buscar o repositório");
    }

    setCurrentRepo(""); // Limpar o campo de busca
  };

  const handleChange = (event) =>
    event.target.value !== currentRepo
      ? setCurrentRepo(event.target.value)
      : null;

  const handleRemoveRepo = (repoId) => {
    setRepos((prevRepos) => prevRepos.filter((repo) => repo.id !== repoId));
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="logo github" />
      <Input
        type="text"
        value={currentRepo}
        onChange={handleChange}
        placeholder="Digite o nome do repositório (usuario/nome do respositorio)"
      />
      <Button onClick={handSearchRepos} />
      <ReposContainer>
        {repos.map((repo) => (
          <ItemRepos key={repo.id} repo={repo} remover={handleRemoveRepo} />
        ))}
      </ReposContainer>
    </Container>
  );
}

export default App;
