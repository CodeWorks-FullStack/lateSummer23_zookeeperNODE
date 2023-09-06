import { dbContext } from "../db/DbContext.js"

class ExhibitsService {
    async editExhibit(exhibitId, updates) {
        const originalExhibit = await dbContext.Exhibits.findById(exhibitId)
        // NOTE null check....throw error if no exhibit was found
        if (!originalExhibit) throw new Error(`Unable to find exhbit at ${exhibitId}`)

        // NOTE when working with pipe operator... need to be mindful of truthy/falsy logic... will NOT work for bools or numbers
        originalExhibit.name = updates.name || originalExhibit.name
        // NOTE use a ternary to check for undefined/provided values.... safer case here in case the payload has undefined values and won't default them to true
        originalExhibit.emoji = updates.emoji != undefined ? updates.emoji : originalExhibit.emoji
        // NOTE check if biome property on updates is undefined....if it isn't reassign the value, ELSE default to the original
        originalExhibit.biome = updates.biome != undefined ? updates.biome : originalExhibit.biome

        await originalExhibit.save()
        return originalExhibit
    }

    async createExhibit(body) {
        const newExhibit = await dbContext.Exhibits.create(body)
        return newExhibit
    }

    async getExhibits(query) {
        const exhibits = await dbContext.Exhibits.find(query)
        return exhibits
    }

}

export const exhibitsService = new ExhibitsService()