/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2etvv5wmukq9f3o",
    "created": "2024-09-18 14:52:44.267Z",
    "updated": "2024-09-18 14:52:44.267Z",
    "name": "introduction",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "35tcco61",
        "name": "intro",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "kjgtbwmn",
        "name": "body",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tcbatuql",
        "name": "closer",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2etvv5wmukq9f3o");

  return dao.deleteCollection(collection);
})
