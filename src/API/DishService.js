import data from './dishes.json'
export default class DishService{
    static async getAll(){

        //fetch from api//////////////////////////////////
            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // return response
        /////////////////////////////

        return data
    }
}