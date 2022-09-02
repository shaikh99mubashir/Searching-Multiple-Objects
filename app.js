let mobiles = {
  iphone: {
    v14: {
      ram: 2,
      rom: 3,
      price: 4665,
    },
    v13: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    v15: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
  },
  samsung: {
    s14: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    s13: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    s15: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
  },
  xiomi: {
    x14: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    x13: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    x15: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
  },
  infinix: {
    hot14: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    hot13: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
    hot15: {
      ram: 2,
      rom: 3,
      price: 464665,
    },
  },
};
let Mobile_Brand = document.getElementById("Mobile_Brand");
let Mobile_Model = document.getElementById("Mobile_Model");

let parent = Object.keys(mobiles);
console.log(parent);

letsDisplayItem(parent, "Mobile_Brand");
function letsDisplayItem(parentData, idBrand) {
  let myvariable = "";
  for (let i = 0; i < parentData.length; i++) {
    let name = parentData[i];
    console.log("name", name);
    myvariable += `<option value="${name}">${name}</option>`;
  }
  document.getElementById(idBrand).innerHTML = myvariable;
}

function functionGotChanged() {
  let parentData = Object.keys(mobiles[Mobile_Brand.value]);
  letsDisplayItem(parentData, "Mobile_Model");
}
functionGotChanged();
function childItem() {
  let displayItemString = "";
  Object.entries(mobiles[Mobile_Brand.value][Mobile_Model.value]).forEach(
    ([key, value]) => {
      displayItemString += `<p> ${key}: ${value} </p>`;
    }
  );
  document.getElementById("specs").innerHTML = displayItemString;
  // document.getElementById("SMS").innerHTML = result;
  // document.getElementById("SMS1").innerHTML = result1;
}

// let parents = Object.keys(mobiles);
// let child = Object.values(mobiles);
// letsDisplayItem(parents, "Mobile_Brand");
// function letsDisplayItem(data, idName) {
//   let myVar = "";
//   for (let i = 0; i < data.length; i++) {
//     let name = data[i];
//     console.log("name", name);
//     myVar += `<option  value="${name}">${name}</option>`;
//   }
//   document.getElementById(idName).innerHTML = myVar;
// }

// function functionGotChanged() {
//   let Mobile_Brand = document.getElementById("Mobile_Brand");
//   let data = Object.keys(mobiles[Mobile_Brand.value]);
//   letsDisplayItem(data, "Mobile_Model");
// }
