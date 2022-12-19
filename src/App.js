import './App.css';
import {useEffect, useState} from "react"; //2.9k (gzipped: 1.3k)


type Repository = {
 // dataTransferencia: Date;
  valor: Number[];
 // tipo: String;
  operadorTransacao: String[];
//  contaId: Number;
}

function App() {

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
      fetch('http://localhost:8080/operacao')
        .then(response => response.json())
        .then(data => {
          setRepositories(data);
        })
    }, [])

    return(
      <ul>
        {repositories.map(repo => {
          return(
            <li key={repo.tipo}>
              <strong>{repo.tipo}</strong>
              <p>{repo.operadorTransacao}</p>
            </li>
          )
        })}
      </ul>
    )
}

export default App;
