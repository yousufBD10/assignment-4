// problem---1

function redianToDegree(radians){
     if ( typeof radians !== 'number'){
                  return "Please enter a number."
           }
  const  pi = Math.PI;
  const degree = radians * (180/pi);
    toFixed = degree.toFixed(2);
  return parseFloat(toFixed); 
}
      const radian = 199; 
       const results = redianToDegree(radian);
    



// Problem--2

function isJavaScriptFile(name){
    if (typeof name !== 'string'){
        return "Please enter a valid keyword."
    }
    else if (name.endsWith ('.js')){
        return true;
    }
    else{
        return false;
    }
   
}
const fileName = "index.js";
const results = isJavaScriptFile(fileName);






// Problem--3


function oilPrice(disselQuantity,petrolQuantity,octaneQuantity){
    if(typeof disselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number'){
        return "Plese enter a number."
    }
    const disselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;
   let totalDisselPrice = disselPrice * disselQuantity;
   let totalPetrolPrice = petrolPrice * petrolQuantity;
   let totalOctanePrice = octanePrice * octaneQuantity;
   const totalPrice = totalDisselPrice + totalOctanePrice + totalPetrolPrice;
   return totalPrice;
}
const disselQuantity = 20;
const petrolQuantity = 30;
const octaneQuantity = 10;
const totalPrice = oilPrice(disselQuantity,petrolQuantity,octaneQuantity);




// problem---4

function publicBusFare(persons){
    let busCapacity = 50;
    let microBusCapacity = 11;
    PublicBusTickets = 250;
    if(typeof persons !== "number"){
        return "Please enter a number."
    }
   else if(persons >= busCapacity){
        const reservedBus = persons % busCapacity;
        if(reservedBus < microBusCapacity){
            const publicBus = reservedBus * PublicBusTickets;
            return publicBus;
        }
         else if (reservedBus >=microBusCapacity){
             const microbus = reservedBus % microBusCapacity;
              const publicBus = microbus * PublicBusTickets;
              return publicBus;
            }
            else {
               const publicBus= microbus * PublicBusTickets;
                return publicBus;
            }
        }
        else if (persons <busCapacity){
            const microbus = persons % microBusCapacity;
            const publicBus = microbus * PublicBusTickets;
            return publicBus;

        }
    }

const totalParticipants = 55;
const publicBusFares = publicBusFare(totalParticipants);




// Problem --5

function isBestFriend(friend1,friend2){
    if(typeof friend1 !== 'object' || typeof friend2 !== 'object'){
        return "Please enter a valided keywords."
     }
     else if(friend1.name === friend2.friend && friend1.friend === friend2.name){
        return true;   
}
else {
    return false
}
    }
   
const friend1 = {name: "Jack", friend: "Tom"};
const friend2 = {name: "Tom", friend: "Jack"};
const result = isBestFriend(friend1,friend2);

