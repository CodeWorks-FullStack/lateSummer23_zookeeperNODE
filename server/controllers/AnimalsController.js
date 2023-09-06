import { animalsService } from "../services/AnimalsService.js";
import BaseController from "../utils/BaseController.js";


export class AnimalsController extends BaseController {
    constructor() {
        super('api/animals')
        this.router
            .post('', this.createAnimal)
            .get('', this.getAnimals)
    }

    async createAnimal(request, response, next) {
        try {
            const body = request.body
            const newAnimal = await animalsService.createAnimal(body)
            response.send(newAnimal)
        } catch (error) {
            next(error)
        }
    }

    async getAnimals(request, response, next) {
        try {
            const animals = await animalsService.getAnimals(request.query)
            response.send(animals)
        } catch (error) {
            next(error)
        }
    }
}