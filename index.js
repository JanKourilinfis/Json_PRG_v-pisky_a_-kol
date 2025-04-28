const gameData ={
 "name": "hel",
 "level":5,
 "lastsave":2025,
 "items":["potion","sword","pickaxe"]
}
console.log(gameData.name)
console.log(gameData.items[0])
//*json je pro ukládání dat*//

const shop = {
    "items":[
        {"name":"apple","price":10},
        {"name":"pear","price":20}
    ]
}
console.log(shop.items[0].price)