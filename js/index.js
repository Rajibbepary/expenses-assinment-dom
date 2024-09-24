
//creat Commen function
function getInputValueById(id){
    return parseFloat(document.getElementById(id).value);
}

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function(){

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    // const income = getInputValueById(income);
    // const software = getInputValueById(software);
    // const courses = getInputValueById(courses);
    // const internet = getInputValueById(internet);

    if(income <= 0 || isNaN(income)){
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }

    if(software <= 0 || isNaN(software)){
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }

    if(courses <= 0 || isNaN(courses)){
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }

    if(internet <= 0 || isNaN(internet)){
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }
    const totalExpenses = software + courses + internet;

    const balance = income - totalExpenses;

    if(totalExpenses > income){
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }

    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    const results = document.getElementById('results');
    results.classList.remove('hidden');

    const historyItem = document.createElement('div');
    historyItem.className = " bg-white p-3 rounded-md border-l-2 border-indigo-500"

    historyItem.innerHTML = `
    <P class = "text-xs text-gray-500">${new Date().toLocaleDateString()}</P>
     <P class = "text-xs text-black">Income: $${income.toFixed(2)}</P>
     <P class = "text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</P>
    <P class = "text-xs text-gray-500">Balance: $${balance.toFixed(2)}</P>
    
    `;

    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);

})


const calculateSavaingButton = document.getElementById('calculate-savings');
calculateSavaingButton.addEventListener('click', function(){

    const savingsParcentace = parseFloat(document.getElementById('savings').value);
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;
    const savingAmout = (savingsParcentace * balance) / 100;
    const remaingBalance = balance - savingAmout;
    const savaingElement = document.getElementById('savings-amount');
    savaingElement.innerText =savingAmout.toFixed(2);

    const remaingElement = document.getElementById('remaining-balance');
    remaingElement.innerText = remaingBalance.toFixed(2);
})


const historyTab = document.getElementById('history-tab');
const assistantTab = document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){
    historyTab.classList.add(
        'text-white',
         'bg-gradient-to-r',
         'from-blue-500',
         'to-purple-600');
historyTab.classList.remove('text-gray-600')
   assistantTab.classList.remove(
         'text-white',
         'bg-gradient-to-r',
         'from-blue-500',
         'to-purple-600'
    );  
    assistantTab.classList.add('text-gray-600'); 
    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
});


assistantTab.addEventListener('click', function(){
    assistantTab.classList.add(
        'text-white',
         'bg-gradient-to-r',
         'from-blue-500',
         'to-purple-600');
   historyTab.classList.remove(
         'text-white',
         'bg-gradient-to-r',
         'from-blue-500',
         'to-purple-600'
    );  
    // assistantTab.classList.add('text-gray-600'); 
    document.getElementById('expense-form').classList.remove('hidden');
     document.getElementById('history-section').classList.add('hidden');
});



//live validation for input

document.getElementById('income').addEventListener("input", function(){
const inputValue = parseFloat(document.getElementById('income').value)
if(isNaN(inputValue) || inputValue <= 0){
    document.getElementById('income-error').classList.remove('hidden');
}
});