/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olp02v0lt5r3w2g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0fc9qwvf",
    "name": "date_started",
    "type": "date",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olp02v0lt5r3w2g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0fc9qwvf",
    "name": "date_started",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
