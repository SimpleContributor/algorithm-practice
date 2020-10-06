function updateInventory(arr1, arr2) {
    let currentItems = []; // Names of arr1's items
    let newItems = []; // Names of arr2's items
  
    // Iterate through the current inventory array
      // For each item in the current inventory,
      // iterate through the new inventory array.
      // If the item names match, update the current
      // inventories number.
    arr1.forEach((item1) => {
      arr2.forEach((item2) => {
        if (item1[1] === item2[1]) {
          item1[0] += item2[0]; //Increase number of stock
                  
        }
      });
    });
  
    // Iterate through new inventory and push the
    // names to the newInvName array
    arr2.forEach((item) => {
      newItems.push(item[1]);
    });
  
    // Iterate through current inventory and push the
      // names to the curInvName array
    arr1.forEach((item) => {
      currentItems.push(item[1]);
    });

    // Iterate through the names in the newInvName array
      // to check if the name exists in the curInvName array
      // If it does not (brand new item), push the new item
      // and count to the current inventory
    newItems.forEach((item, index) => {
      if (currentItems.indexOf(item) === -1) {
        arr1.push(arr2[index]);
      }
    });
  
    // Sort the array alphabetically by the item names
    arr1.sort((a, b) => {
      return a[1] > b[1] ? 1 : -1;
    });
  
    return arr1;
  }
  
  var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
  ];
  
  var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
  ];
  
  updateInventory(curInv, newInv);
  