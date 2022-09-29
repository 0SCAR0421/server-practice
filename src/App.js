import axios from 'axios';
import './App.css';

function App() {
  const tryLogin = async () => {
    const res = await axios.post('https://8it.kro.kr:4000/api/v1/auth/signin',{
      email: 'test@8it.kro.kr',
      password: 'test',
    },
    {
      withCredentials: 'include',
    })
    console.log(res)
  }
  const tryLogin1 = async () => {
    const res = await axios.post('https://8it.kro.kr:4000/api/v1/auth/signin',{
      email: 'test@8it.kro.kr',
      password: 'test',
    },
    {
      withCredentials: true,
    })
    console.log(res)
  }
  const tryLogin2 = async () => {
    const res = await axios.post('https://8it.kro.kr:4000/api/v1/auth/signin',{
      email: 'test@8it.kro.kr',
      password: 'test',
    })
    console.log(res)
  }
  return (
    <div>
      <button onClick={tryLogin}>TEST</button>
      <button onClick={tryLogin1}>TEST1</button>
      <button onClick={tryLogin2}>TEST2</button>
    </div>
  );
}

export default App;
