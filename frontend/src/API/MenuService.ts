import ky from 'ky';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export default class MenuService {
    static async getAll(limit: number = 10, page: number = 1) {
        const response = await ky.get(API_URL, {
            searchParams: {
                _limit: limit,
                _page: page,
            },
        }).json();

        console.log(response);
        return response;
    }
}
