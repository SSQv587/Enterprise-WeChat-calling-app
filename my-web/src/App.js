import React, { useState } from 'react';
import axiosInstance from './axiosInstance';

function App() {
  const [parameter, setParameter] = useState('');

  const sendParameter = () => {
    axiosInstance.post('/set_parameter', { parameter: parameter })
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="App">
      <h1>欢迎使用我的简单网页</h1>
      <input
        type="text"
        value={parameter}
        onChange={(e) => setParameter(e.target.value)}
        placeholder="输入参数"
      />
      <button onClick={sendParameter}>点击设置参数</button>
    </div>
  );
}

export default App;