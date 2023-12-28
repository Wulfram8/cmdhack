import ky from 'ky';
import { mockIngredients, mockRestaurants } from './mocks';

const API_URL = 'https://1386ca2b65b23e75.mokky.dev/restaurants';

const response = <ResData>(resData: ResData) => {
    return new Promise<ResData>(resolve => {
        setTimeout(() => {
            resolve(resData)
        }, 100)
    })
}

export default class RestarauntService {
    static async getAll() {
        return response(mockRestaurants);
    }
}
