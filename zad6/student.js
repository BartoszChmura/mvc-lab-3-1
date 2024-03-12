
function getStudentFullName(id) {
    switch (id) {
        case 0:
            return "Bartosz Chmura";
        case 1:
            return "Kacper Nowak";
        case 2:
            return "Maja Kowalska";
        default:
            return "Michał Inny";
    }
}

function getStudentId(id) {
    switch (id) {
        case 0:
            return "42878";
        case 1:
            return "34321";
        case 2:
            return "36887";
        default:
            return "99999";
    }
}


module.exports = {
    getStudentFullName,
    getStudentId,
};
