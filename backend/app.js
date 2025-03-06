const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// 中间件
app.use(cors()); // 允许所有来源的跨域请求
app.use(express.json()); // 解析 JSON 格式的请求体

// 存储参数的变量
let storedParameter = null;

// 设置参数的路由
app.post('/set_parameter', (req, res) => {
  storedParameter = req.body.parameter;
  res.json({ message: `参数已设置为: ${storedParameter}` });
});

// 欢迎消息
app.get('/', (req, res) => {
  res.send('欢迎访问后端服务');
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});