/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6gz8s77dca6s7m1")

  // remove
  collection.schema.removeField("hvhf1s7o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aqd4fljv",
    "name": "date_start",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rnpa943q",
    "name": "date_end",
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
  const collection = dao.findCollectionByNameOrId("6gz8s77dca6s7m1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hvhf1s7o",
    "name": "work_period",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("aqd4fljv")

  // remove
  collection.schema.removeField("rnpa943q")

  return dao.saveCollection(collection)
})
