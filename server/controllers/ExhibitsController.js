import { animalsService } from "../services/AnimalsService.js";
import { exhibitsService } from "../services/ExhibitsService.js";
import BaseController from "../utils/BaseController.js";

export class ExhibitsController extends BaseController {
    constructor() {
        super('api/exhibits')
        this.router
            .post('', this.createExhibit)
            .get('', this.getExhibits)
            .put('/:exhibitId', this.editExhibit)
            .get('/:exhibitId/animals', this.getAnimalsByExhibitId)
        // api/exhibits/hskdjhflksjdfkslfk/animals
    }

    async createExhibit(request, response, next) {
        try {
            const body = request.body
            const newExhibit = await exhibitsService.createExhibit(body)
            response.send(newExhibit)
        } catch (error) {
            next(error)
        }
    }
    async getExhibits(request, response, next) {
        try {
            const query = request.query
            const exhibits = await exhibitsService.getExhibits(query)
            response.send(exhibits)
        } catch (error) {
            next(error)
        }
    }

    async editExhibit(request, response, next) {
        try {
            const updates = request.body
            const exhibitId = request.params.exhibitId
            const editedExhibit = await exhibitsService.editExhibit(exhibitId, updates)
            response.send(editedExhibit)
        } catch (error) {
            next(error)
        }
    }

    async getAnimalsByExhibitId(request, response, next) {
        try {
            const exhibitId = request.params.exhibitId
            const animals = await animalsService.getAnimalsByExhibitId(exhibitId)
            response.send(animals)
        } catch (error) {
            next(error)
        }
    }



}