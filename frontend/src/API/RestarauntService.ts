import ky from 'ky';

const API_URL = 'https://1386ca2b65b23e75.mokky.dev/restaurants';

export default class RestarauntService {
    static async getAll() {
        const response = await ky.get(API_URL).json();

        console.log(response);
        return response;
    }
}
