export class Model {
    constructor(dataBase, collectionName) {
        this.collection = dataBase.collection(collectionName);
    }

    async create(item) {
        return await this.collection.insertOne(item);
    }
}