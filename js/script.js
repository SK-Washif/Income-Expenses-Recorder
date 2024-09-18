let totalBalanceShow;

function updateStrToVal(elementId){
  const getElementId = document.getElementById(elementId);
  const getElementIdStr = getElementId.value;
  const getElementIdVal = parseFloat(getElementIdStr);
  return getElementIdVal;
}

function totalExpenses(foodField, rentField, clothesField){
  const totalExpensesCost =foodField + rentField + clothesField;
  
  return totalExpensesCost;
}





document.getElementById('calculate-btn').addEventListener('click', function(){
  const incomeField = updateStrToVal('income-field');
  const foodField = updateStrToVal('food-field');
  const rentField = updateStrToVal('rent-field');
  const clothesField = updateStrToVal('clothes-field');

  const myTotalExpenses = totalExpenses(foodField, rentField, clothesField);
  

  const totalExpense = document.getElementById('total-expense');
  totalExpense.innerText = myTotalExpenses;

  const totalBalanceShow = incomeField - myTotalExpenses;
  const balanceShow = document.getElementById('balance-show');
  if(myTotalExpenses > incomeField){
    alert('You are spending more than you earn!');
  }
  balanceShow.innerText = totalBalanceShow;

  

  

})




document.getElementById('btn-save').addEventListener('click', function(){
  const saveField = updateStrToVal('save-field');
  const incomeField = updateStrToVal('income-field');

  const savingAmount = document.getElementById('saving-amount')
  const mySavingAmount =(incomeField/100) * saveField;

  savingAmount.innerText = mySavingAmount;




  
  const foodField = updateStrToVal('food-field');
  const rentField = updateStrToVal('rent-field');
  const clothesField = updateStrToVal('clothes-field');

  const myTotalExpenses = totalExpenses(foodField, rentField, clothesField);
  

  const totalExpense = document.getElementById('total-expense');
  totalExpense.innerText = myTotalExpenses;

  const totalBalanceShow = incomeField - myTotalExpenses;
  const remainingBalance = document.getElementById('remaining-balance');
  const balanceShow = document.getElementById('balance-show');
  balanceShow.innerText = totalBalanceShow;

  
  
  
 
  const myRemainingBalance = totalBalanceShow - mySavingAmount;
  remainingBalance.innerText = myRemainingBalance;
  
})