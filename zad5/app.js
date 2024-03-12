const http = require('http');
const student = require('./student');
const PORT = 3000;

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<!DOCTYPE html>');
    response.write('<html>');
    response.write('<head>');
    response.write('<title>About student</title>');
    response.write('</head>');
    response.write('<body>');
    response.write(`<p>My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}</p>`);
    response.write('</body>');
    response.write('</html>');
    response.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
