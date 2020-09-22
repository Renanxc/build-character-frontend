export default class BuildOptionService {


    constructor(http) {

        this.$http = http;

    }

    getBuildOptions() {
        return this.$http
            .get('api/v1/build-option')
            .then(
                res => res.json(),
                err => {
                    throw new Error('Internal Server Error!');
                });
    }

    getBuildOptionsClass(charClass) {
        return this.$http
            .get('api/v1/build-option/' + charClass)
            .then(res => res.json(),
                err => {
                    if (err.status === 404) {
                        throw new Error('Not Found!');
                    }

                    throw new Error('Internal Server Error!');
                }
            );
    }

}