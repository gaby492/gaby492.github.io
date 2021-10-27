var myData = {
  "data": [
      {
          "name": "enchiladas",
          "country_name": "Mexico",
          "type": "main dish",
          "spicy": false,
          "ingredients": [
              "tortilla",
              "lettuce",
              "chicken",
              "cotija cheese"
          ]
      },
      {
          "name": "pizza",
          "country_name": "Italy",
          "type": "main dish",
          "spicy": false,
          "ingredients": [
              "wheat flour",
              "mozzarella",
              "pepperoni"
          ]
      },
      {
          "name": "Tacos",
          "country_name": "Mexico",
          "type": "main dish",
          "spicy": true,
          "ingredients": [
              "tortilla",
              "beef",
              "lettuce",
              "sour cream"
          ]
      }
  ]
};

var textedJson = JSON.stringify(myData, undefined, 4);
$('#phpAPIDemoJson').text(textedJson);