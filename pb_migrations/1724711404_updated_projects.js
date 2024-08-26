/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olp02v0lt5r3w2g")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("olp02v0lt5r3w2g")

  // remove
  collection.schema.removeField("0fc9qwvf")

  return dao.saveCollection(collection)
})
