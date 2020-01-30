const functions = {
    add: (a, b) => a + b,
    isNull: () => null,
    createUser: () => {
        const user = { firstName: "William" }
        user['lastName'] = 'Richman';
        return user;
    },

    fetchUser: () =>
        axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => 'error')

};

module.exports = functions;