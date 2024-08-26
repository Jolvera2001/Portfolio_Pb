/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6gz8s77dca6s7m1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4y2gmwai",
    "name": "logo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6gz8s77dca6s7m1")

  // remove
  collection.schema.removeField("4y2gmwai")

  return dao.saveCollection(collection)
})
