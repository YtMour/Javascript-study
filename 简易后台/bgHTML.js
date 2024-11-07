import express from 'express';

// 创建应用对象
const app = express();

// 设置跨域请求头
const setCrossOrigin = (response) => {
    response.setHeader('Access-Control-Allow-Origin', '*'); // 允许跨域请求
};

// 创建路由规则
app.all('/register', (request, response) => {
    try {
        console.log(request.url);
        setCrossOrigin(response);
        response.send('register success');
    } catch (error) {
        console.error('Error processing /register:', error);
        response.status(500).send('Internal Server Error');
    }
});

app.all('/', (request, response) => {
    try {
        console.log(request.method, request.url);
        setCrossOrigin(response);
        response.send('register success /');
    } catch (error) {
        console.error('Error processing /:', error);
        response.status(500).send('Internal Server Error');
    }
});

// 监听端口，启动服务
app.listen(8080, () => {
    console.log('后台启动完毕，监听在8080端口');
});
