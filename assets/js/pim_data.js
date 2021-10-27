var myData = {
  "regular": [
    {
      "category": "Desserts",
      "items": [
        {
          "name": "McFlurry",
          "externalName": "McFlurry",
          "description": null,
          "photo": "http://pimcore.local.com/BasicItems/mc-flurry-oreo.png",
          "modifierGroups": [
            {
              "name": "McFlurry flavors",
              "externalName": "Choose the flavor of your McFlurry",
              "isExtra": "1",
              "size": "1",
              "modifiers": [
                "KitKat",
                "m&m",
                "Oreo"
              ]
            }
          ]
        },
        {
          "name": "McFlurry",
          "externalName": "McFlurry",
          "description": null,
          "photo": "http://pimcore.local.com/BasicItems/mc-flurry-oreo.png",
          "modifierGroups": [
            {
              "name": "McFlurry flavors",
              "externalName": "Choose the flavor of your McFlurry",
              "isExtra": "1",
              "size": "1",
              "modifiers": [
                "KitKat",
                "m&m",
                "Oreo"
              ]
            }
          ]
        }
      ]
    }
  ],
  "combos": [
    {
      "name": "McChicken",
      "externalName": "McChicken Combo",
      "description": "Combo including McChicken hamburguer and a soft drink ",
      "photo": null,
      "basicItems": [
        {
          "name": "French fries",
          "externalName": "French fries",
          "description": "French fries",
          "photo": "http://pimcore.local.com/BasicItems/fries.jpg",
          "modifierGroups": []
        },
        {
          "name": "McChicken",
          "externalName": "McChicken",
          "description": "Chicken hamburguer with lettuce and mayonnaise.",
          "photo": "http://pimcore.local.com/BasicItems/mcChicken.jpg",
          "modifierGroups": []
        },
        {
          "name": "Soft drink",
          "externalName": "Soft drink",
          "description": "Soft drink",
          "photo": null,
          "modifierGroups": [
            {
              "name": "Soft drink flavors",
              "externalName": "Choose your flavor",
              "isExtra": null,
              "size": "1",
              "modifiers": [
                "Fanta",
                "Sprite",
                "Coca Cola",
                "DrPepper",
                "Coke"
              ]
            }
          ]
        }
      ]
    }
  ]
};

var textedJson = JSON.stringify(myData, undefined, 4);
$('#pimDemoJson').text(textedJson);