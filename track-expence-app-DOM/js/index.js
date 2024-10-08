const expenseList = document.getElementById("expense-list");

let expenseObjArr = [];

let filteredArray;

function removeLi(id) {
  expenseObjArr = expenseObjArr.filter((user) => user.id !== id);
  filteredArray = filteredArray.filter((user) => user.id !== id);

  let filterValue = idValue("filter-category");

  if (filterValue === "food") {
    filteredArray = filterArray(expenseObjArr, "food");
    fetchList(filteredArray);
    calculateExpenses(filteredArray);
  } else if (filterValue === "shopping") {
    filteredArray = filterArray(expenseObjArr, "shopping");
    fetchList(filteredArray);
    calculateExpenses(filteredArray);
  } else if (filterValue === "grocery") {
    filteredArray = filterArray(expenseObjArr, "grocery");
    fetchList(filteredArray);
    calculateExpenses(filteredArray);
  } else if (filterValue === "travel") {
    filteredArray = filterArray(expenseObjArr, "travel");
    fetchList(filteredArray);
    calculateExpenses(filteredArray);
  } else if (filterValue === "entertainment") {
    filteredArray = filterArray(expenseObjArr, "entertainment");
    fetchList(filteredArray);
    calculateExpenses(filteredArray);
  } else if (filterValue === "other") {
    filteredArray = filterArray(expenseObjArr, "other");
    fetchList(filteredArray);
    calculateExpenses(filteredArray);
  } else {
    fetchList(expenseObjArr);
    calculateExpenses(expenseObjArr);
  }
}

// Hide and show expense Form
document
  .getElementById("expense-form-btn")
  .addEventListener("click", function () {
    document.getElementById("expense-form").classList.toggle("hidden");
  });

// Add input as object in array and account balance
document
  .getElementById("submit-expense")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // Creating New Object: Selecting Value
    let id = Date.now();
    let description = idValue("description");
    let amount = idAmount("amount");
    let category = idValue("category");

    if (amount === "" || description === "") {
      alert("Invalid Input");
      return;
    }

    // Creating New Object: Creating & Push
    const newObject = { id, description, amount, category };
    expenseObjArr.push(newObject);

    // Clear Form
    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "other";

    calculateExpenses(expenseObjArr);

    fetchList(expenseObjArr);
    document.getElementById("expense-form").classList.add("hidden");
  });

// filter Array - Filter By Category
document
  .getElementById("filter-category")
  .addEventListener("change", function (event) {
    event.preventDefault();
    let filterValue = idValue("filter-category");

    if (filterValue === "food") {
      filteredArray = filterArray(expenseObjArr, "food");
      fetchList(filteredArray);
      calculateExpenses(filteredArray);
    } else if (filterValue === "shopping") {
      filteredArray = filterArray(expenseObjArr, "shopping");
      fetchList(filteredArray);
      calculateExpenses(filteredArray);
    } else if (filterValue === "grocery") {
      filteredArray = filterArray(expenseObjArr, "grocery");
      fetchList(filteredArray);
      calculateExpenses(filteredArray);
    } else if (filterValue === "travel") {
      filteredArray = filterArray(expenseObjArr, "travel");
      fetchList(filteredArray);
      calculateExpenses(filteredArray);
    } else if (filterValue === "entertainment") {
      filteredArray = filterArray(expenseObjArr, "entertainment");
      fetchList(filteredArray);
      calculateExpenses(filteredArray);
    } else if (filterValue === "other") {
      filteredArray = filterArray(expenseObjArr, "other");
      fetchList(filteredArray);
      calculateExpenses(filteredArray);
    } else {
      fetchList(expenseObjArr);
      calculateExpenses(expenseObjArr);
    }
  });
