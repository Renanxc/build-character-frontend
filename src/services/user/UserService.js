export default class UserService {
    constructor(http) {
        this.$http = http;
    }

    saveUser(user) {
        return this.$http
            .post('api/v1/session', user)
            .then(null, err => {
                if (err.status === 400) {
                    throw new Error('Invalid request!');
                }
                if (err.status === 404) {
                    throw new Error('Invalid request!');
                }
                throw new Error('Internal Server Error!');
            });
    }
    
}