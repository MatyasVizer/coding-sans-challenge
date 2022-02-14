// JSON imported at the top of the file, solutions can be found below that
'use strict';

const initial_data =`[
    {
      "id": "ccw-1",
      "name": "Coding Challenge White",
      "brand": "Coding Challenge Brewery",
      "type": "White",
      "price": "4645",
      "alcohol": "0.119",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.002"
        },
        {
          "name": "sugar",
          "ratio": "0.014"
        },
        {
          "name": "barley",
          "ratio": "0.025"
        },
        {
          "name": "wheat",
          "ratio": "0.014"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "sw-1",
      "name": "Share White",
      "brand": "Share",
      "type": "White",
      "price": "6474",
      "alcohol": "0.126",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.005"
        },
        {
          "name": "sugar",
          "ratio": "0.021"
        },
        {
          "name": "barley",
          "ratio": "0.013"
        },
        {
          "name": "wheat",
          "ratio": "0.014"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "bspa-1",
      "name": "Beer Sans Pale Ale",
      "brand": "Beer Sans Brewery",
      "type": "Pale Ale",
      "price": "5283",
      "alcohol": "0.096",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.005"
        },
        {
          "name": "sugar",
          "ratio": "0.013"
        },
        {
          "name": "barley",
          "ratio": "0.022"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "ccb-1",
      "name": "Coding Challenge Brown",
      "brand": "Coding Challenge Brewery",
      "type": "Brown",
      "price": "8949",
      "alcohol": "0.141",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.004"
        },
        {
          "name": "sugar",
          "ratio": "0.018"
        },
        {
          "name": "barley",
          "ratio": "0.042"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "ccw-2",
      "name": "Coding Challenge Wheat",
      "brand": "Coding Challenge Brewery",
      "type": "Wheat",
      "price": "5786",
      "alcohol": "0.147",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.006"
        },
        {
          "name": "sugar",
          "ratio": "0.02"
        },
        {
          "name": "barley",
          "ratio": "0.013"
        },
        {
          "name": "wheat",
          "ratio": "0.022"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "bsc-1",
      "name": "Beer Sans Corn",
      "brand": "Beer Sans Brewery",
      "type": "Corn",
      "price": "910",
      "alcohol": "0.129",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.004"
        },
        {
          "name": "sugar",
          "ratio": "0.027"
        },
        {
          "name": "barley",
          "ratio": "0"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0.221"
        }
      ]
    },
    {
      "id": "bsw-1",
      "name": "Beer Sans Wheat",
      "brand": "Beer Sans Brewery",
      "type": "Wheat",
      "price": "4477",
      "alcohol": "0.164",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.007"
        },
        {
          "name": "sugar",
          "ratio": "0.023"
        },
        {
          "name": "barley",
          "ratio": "0.023"
        },
        {
          "name": "wheat",
          "ratio": "0.027"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "ccpa-1",
      "name": "Coding Challenge Pale Ale",
      "brand": "Coding Challenge Brewery",
      "type": "Pale Ale",
      "price": "1801",
      "alcohol": "0.119",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.003"
        },
        {
          "name": "sugar",
          "ratio": "0.015"
        },
        {
          "name": "barley",
          "ratio": "0.013"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "lupa-1",
      "name": "Level Up Pale Ale",
      "brand": "Level Up Brewery",
      "type": "Pale Ale",
      "price": "3528",
      "alcohol": "0.15",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.002"
        },
        {
          "name": "sugar",
          "ratio": "0.023"
        },
        {
          "name": "barley",
          "ratio": "0.023"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "spa-1",
      "name": "Share Pale Ale",
      "brand": "Share",
      "type": "Pale Ale",
      "price": "9775",
      "alcohol": "0.142",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.003"
        },
        {
          "name": "sugar",
          "ratio": "0.019"
        },
        {
          "name": "barley",
          "ratio": "0.013"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "csb-1",
      "name": "Coding Sans Brown",
      "brand": "Coding Sans Brewery",
      "type": "Brown",
      "price": "2392",
      "alcohol": "0.11",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.004"
        },
        {
          "name": "sugar",
          "ratio": "0.01"
        },
        {
          "name": "barley",
          "ratio": "0.041"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "csw-1",
      "name": "Coding Sans White",
      "brand": "Coding Sans Brewery",
      "type": "White",
      "price": "8192",
      "alcohol": "0.166",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.003"
        },
        {
          "name": "sugar",
          "ratio": "0.027"
        },
        {
          "name": "barley",
          "ratio": "0.014"
        },
        {
          "name": "wheat",
          "ratio": "0.015"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "csw-2",
      "name": "Coding Sans Wheat",
      "brand": "Coding Sans Brewery",
      "type": "Wheat",
      "price": "2248",
      "alcohol": "0.146",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.006"
        },
        {
          "name": "sugar",
          "ratio": "0.012"
        },
        {
          "name": "barley",
          "ratio": "0.014"
        },
        {
          "name": "wheat",
          "ratio": "0.02"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "luw-1",
      "name": "Level Up Wheat",
      "brand": "Level Up Brewery",
      "type": "Wheat",
      "price": "7923",
      "alcohol": "0.152",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.007"
        },
        {
          "name": "sugar",
          "ratio": "0.016"
        },
        {
          "name": "barley",
          "ratio": "0.018"
        },
        {
          "name": "wheat",
          "ratio": "0.033"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "luw-2",
      "name": "Level Up White",
      "brand": "Level Up Brewery",
      "type": "White",
      "price": "5362",
      "alcohol": "0.154",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.004"
        },
        {
          "name": "sugar",
          "ratio": "0.011"
        },
        {
          "name": "barley",
          "ratio": "0.02"
        },
        {
          "name": "wheat",
          "ratio": "0.013"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "ccc-1",
      "name": "Coding Challenge Corn",
      "brand": "Coding Challenge Brewery",
      "type": "Corn",
      "price": "8450",
      "alcohol": "0.09",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.002"
        },
        {
          "name": "sugar",
          "ratio": "0.013"
        },
        {
          "name": "barley",
          "ratio": "0"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0.295"
        }
      ]
    },
    {
      "id": "csc-1",
      "name": "Coding Sans Corn",
      "brand": "Coding Sans Brewery",
      "type": "Corn",
      "price": "1854",
      "alcohol": "0.111",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.008"
        },
        {
          "name": "sugar",
          "ratio": "0.022"
        },
        {
          "name": "barley",
          "ratio": "0"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0.23"
        }
      ]
    },
    {
      "id": "cspa-1",
      "name": "Coding Sans Pale Ale",
      "brand": "Coding Sans Brewery",
      "type": "Pale Ale",
      "price": "6990",
      "alcohol": "0.104",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.008"
        },
        {
          "name": "sugar",
          "ratio": "0.026"
        },
        {
          "name": "barley",
          "ratio": "0.012"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "lub-1",
      "name": "Level Up Brown",
      "brand": "Level Up Brewery",
      "type": "Brown",
      "price": "9766",
      "alcohol": "0.095",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.005"
        },
        {
          "name": "sugar",
          "ratio": "0.019"
        },
        {
          "name": "barley",
          "ratio": "0.034"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "bsb-1",
      "name": "Beer Sans Brown",
      "brand": "Beer Sans Brewery",
      "type": "Brown",
      "price": "4988",
      "alcohol": "0.183",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.006"
        },
        {
          "name": "sugar",
          "ratio": "0.025"
        },
        {
          "name": "barley",
          "ratio": "0.035"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "bsw-2",
      "name": "Beer Sans White",
      "brand": "Beer Sans Brewery",
      "type": "White",
      "price": "2814",
      "alcohol": "0.126",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.006"
        },
        {
          "name": "sugar",
          "ratio": "0.025"
        },
        {
          "name": "barley",
          "ratio": "0.019"
        },
        {
          "name": "wheat",
          "ratio": "0.011"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "sb-1",
      "name": "Share Brown",
      "brand": "Share",
      "type": "Brown",
      "price": "3234",
      "alcohol": "0.183",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.008"
        },
        {
          "name": "sugar",
          "ratio": "0.019"
        },
        {
          "name": "barley",
          "ratio": "0.042"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    },
    {
      "id": "luc-1",
      "name": "Level Up Corn",
      "brand": "Level Up Brewery",
      "type": "Corn",
      "price": "2992",
      "alcohol": "0.18",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.008"
        },
        {
          "name": "sugar",
          "ratio": "0.022"
        },
        {
          "name": "barley",
          "ratio": "0"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0.254"
        }
      ]
    },
    {
      "id": "sc-1",
      "name": "Share Corn",
      "brand": "Share",
      "type": "Corn",
      "price": "3945",
      "alcohol": "0.197",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.008"
        },
        {
          "name": "sugar",
          "ratio": "0.018"
        },
        {
          "name": "barley",
          "ratio": "0"
        },
        {
          "name": "wheat",
          "ratio": "0"
        },
        {
          "name": "corn",
          "ratio": "0.215"
        }
      ]
    },
    {
      "id": "sw-2",
      "name": "Share Wheat",
      "brand": "Share",
      "type": "Wheat",
      "price": "5433",
      "alcohol": "0.125",
      "ingredients": [
        {
          "name": "salt",
          "ratio": "0.008"
        },
        {
          "name": "sugar",
          "ratio": "0.03"
        },
        {
          "name": "barley",
          "ratio": "0.024"
        },
        {
          "name": "wheat",
          "ratio": "0.016"
        },
        {
          "name": "corn",
          "ratio": "0"
        }
      ]
    }
  ]`;

// First solution:

console.log("\n")
console.log("First solution:")
console.log("\n")

function groupingFunc() {
    const parsed_data = JSON.parse(initial_data);

    const groupByBrand = Object.entries(parsed_data.reduce((acc, { brand, id }) => {
        const parsed_data = JSON.parse(initial_data);
            acc[brand] = (acc[brand] || []);
            acc[brand].push(id);
            return acc;
        }, {})).map(([key, value]) => ({ brand: key, beers: value }));
    
    console.dir(JSON.stringify(groupByBrand));
}

groupingFunc()

// Second solution:

console.log("\n")
console.log("Second solution:")
console.log("\n")
  
const listByType = type => {
    const beer_names = [];
    const parsed_data = JSON.parse(initial_data);
    for (let i = 0; i < parsed_data.length; i++) {
      if (parsed_data[i].type == type) {
          beer_names.push(parsed_data[i].id)
      }
    }
    console.log(JSON.stringify(beer_names))
}

    // Place the desired type filter between " ",  e.g "Wheat"

listByType("White")

// Third solution:

console.log("\n")
console.log("Third solution:")
console.log("\n")

const getCheapest = function() {

    const parsed_data = JSON.parse(initial_data);

    const beerGrouped = parsed_data.reduce((groupedBeers, beer) => {
        const brand = beer.brand
        if (groupedBeers[brand] == null) groupedBeers[brand] = []
        groupedBeers[brand].push(beer.price)
        return groupedBeers
    }, {})

    const beer_totals = []
    for (const key in beerGrouped) {
        let sum = 0;
        beerGrouped[key].forEach(element => {
            sum += parseInt(element)/beerGrouped[key].length            
        });        
        beer_totals.push(sum)
    }
    const min = Math.min(...beer_totals)
    const index = beer_totals.indexOf(min)
    const result = Object.getOwnPropertyNames(beerGrouped)[2]
    console.log(`"` + result + `"`)
}

getCheapest()

// Fourth solution

console.log("\n")
console.log("Fourth solution:")
console.log("\n")

const filterBeers = function(ingredient) {
      
    const parsed_data = JSON.parse(initial_data);
      
    const beer_names = [];

    for (let i = 0; i < parsed_data.length; i++) {
        for (let k = 0; k < parsed_data[i].ingredients.length; k++) {
            if(parsed_data[i].ingredients[k].name == ingredient && parsed_data[i].ingredients[k].ratio == "0") {
                beer_names.push(parsed_data[i].id);
            }
        } 
    }
    console.log(JSON.stringify(beer_names))
}

filterBeers("barley")

//Fifth solution

console.log("\n")
console.log("Fifth solution:")
console.log("\n")

const sortByWater = function() {
    const parsed_data = JSON.parse(initial_data);

    const beer_contents = []
    const beer_ids = []

    const fieldSorter = (fields) => (a, b) => fields.map(o => {
        let dir = 1;
        if (o[0] === '-') { dir = -1; o=o.substring(1); }
        return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
    }).reduce((p, n) => p ? p : n, 0);


    for (let i = 0; i < parsed_data.length; i++) {
        let currWater = 1
        for (let k = 0; k < parsed_data[i].ingredients.length; k++) {
            let currRatio = parsed_data[i].ingredients[k].ratio
            currWater = currWater - currRatio
        }
        let waterRatio = currWater.toFixed(4)

        let tempObj = {};
        let water = {};
        let id = {};
        tempObj.id = parsed_data[i].id;
        tempObj.water = waterRatio;
        beer_contents.push(tempObj);

        beer_contents.sort(fieldSorter(['-water', 'id']));
    }
    for (let i = 0; i < beer_contents.length; i++) {
        beer_ids.push(beer_contents[i].id)
    }


    console.log(JSON.stringify(beer_ids))
}
sortByWater()

//Sixth solution

console.log("\n")
console.log("Sixth solution:")
console.log("\n")

function groupByPrice () {
    const parsed_data = JSON.parse(initial_data);
    
    const priceGrouped = parsed_data.reduce((groupedBeers, beer) => {
    const price = roundUpTo100(beer.price)
    if (groupedBeers[price] == null) groupedBeers[price] = []
    groupedBeers[price].push(beer.id)
    return groupedBeers
    }, {})
    console.log(JSON.stringify(priceGrouped))}

function roundUpTo100(num) {
    return Math.ceil(num / 100) * 100;
}

groupByPrice()