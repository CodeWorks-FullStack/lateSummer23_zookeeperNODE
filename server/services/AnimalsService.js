import { dbContext } from "../db/DbContext.js"

class AnimalsService {


    async createAnimal(body) {
        const newAnimal = await dbContext.Animals.create(body)
        await newAnimal.populate('exhibit')
        return newAnimal
    }

    async getAnimals(query) {
        const animals = await dbContext.Animals.find(query).populate('exhibit')
        // NOTE populates/returns whole object OR we can specify properties we want populated 🔽🔽
        // const animals = await dbContext.Animals.find(query).populate('exhibit', 'biome emoji')

        // await animals.populate('exhibit')
        return animals
    }

    async getAnimalsByExhibitId(exhibitId) {
        const animals = await dbContext.Animals.find({ exhibitId: exhibitId }).populate('exhibit')
        // NOTE if the name of the property and value are the same, we can pass it like this 🔽🔽
        // const animals = await dbContext.Animals.find({ exhibitId })
        return animals
    }

}

export const animalsService = new AnimalsService()