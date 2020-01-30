const compareVectors = {
    add: function add(vec1, vec2) {
        let result = [vec1[0] + vec2[0], vec1[1] + vec2[1]];
        return result;
    },
    multiply: function multiply(vec1, scalar) {
        let result = [vec1[0] * scalar, vec1[1] * scalar];
        return result;
    },
    length: function length(vec1) {
        let result = Math.sqrt(vec1[0] ** 2 + vec1[1] ** 2);
        return result;
    },
    dot: function dot(vec1, vec2) {
        let result = vec1[0] * vec2[0] + vec1[1] * vec2[1];
        return result;
    },
    cross: function cross(vec1, vec2) {
        let result = vec1[0] * vec2[1] - vec1[1] * vec2[0];
        return result;
    }
};
