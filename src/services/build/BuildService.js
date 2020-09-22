export default class BuildOptionService {


    constructor(http) {

        this.$http = http;

    }

    saveCharacter(character, selectedId) {
        return this.$http
            .post('api/v1/build/', character, { headers: { "ID": selectedId } })
            .then(null, err => {
                if (err.status === 404) {
                    throw new Error('Id not valid anymore!');
                }
                throw new Error('Internal Server Error!');
            });
    }

    getCharacter(selectedId) {
        return this.$http
            .get('api/v1/build/', { headers: { "ID": selectedId } })
            .then(res => res.json(),
                err => {
                    if (err.status === 404) {
                        return {expired:true};
                    }
                    throw new Error('Internal Server Error!');
                });
    }
}