const http = require('http');
const student = require('./student');
const PORT = 3000;

const server = http.createServer((request, response) => {
    res.write(`My name is ${student.getStudentFullName()}. My student ID is ${student.getStudentId()}`);
    res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
