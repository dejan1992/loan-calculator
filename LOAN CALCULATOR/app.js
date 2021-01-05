//listen for Submit
document.querySelector('.btn').addEventListener('click', calculate);
document.querySelector('.btn1').addEventListener('click', reload);

// calculate results

function calculate(e) {

    // UI Vars

    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const ytr = document.getElementById('ytr');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(ytr.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    } else {
        showError('Please check your numbers');
    }

    e.preventDefault();
}



//show Error

function showError(error) {

    //get element
    const errorDiv = document.querySelector('.card');

    //append div
    errorDiv.appendChild(document.createTextNode(error));

    //clear error

    setTimeout(clearError, 2500);
}

//clear error

function clearError() {
    document.querySelector('.card').remove();
    location.reload();
}

//reload
function reload() {
    location.reload();
}
