import axios from 'axios';
import './App.css';

function App() {
  const tryLogin = async () => {
    const res = await axios.post('https://8it.kro.kr:4000/api/v1/auth/signin',{
      email: 'test@8it.kro.kr',
      password: 'test',
    },
    {
      withCredentials: true,
    })
    console.log(res)
  }
  return (
    <div>
      <button onClick={tryLogin}>TEST</button>
    </div>
  );
}

export default App;
