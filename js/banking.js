function getInputValue( inputID ) {
    const inputField = document.getElementById( inputID );
    const inputAmountText = inputField.value;
    const inputAmountValue = parseFloat( inputAmountText );
    inputField.value = '';
    return inputAmountValue;
}

function updateTotalField( totalFieldID, amount) {
    const totalElement = document.getElementById( totalFieldID );
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat( totalText );
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceElement = document.getElementById( 'current-balance' );
    const balanceText = balanceElement.innerText;
    const previousBalance = parseFloat( balanceText );
    return previousBalance;
}

function updateBalance( amount, isAdd) {
    const balanceElement = document.getElementById( 'current-balance' );
    const previousBalance = getCurrentBalance();
    if( isAdd == true) {
        balanceElement.innerText = previousBalance + amount;
    }
    else {
        balanceElement.innerText = previousBalance - amount;
    }
}


//handle the deposit button
document.getElementById( 'deposit-btn' ).addEventListener( 'click', function() {
    const newDepositAmount = getInputValue( 'deposit-amount' );
    if( newDepositAmount > 0) {
        updateTotalField( 'currently-deposited', newDepositAmount);
        updateBalance( newDepositAmount, true);
    } 
} )

//handle the withdraw button
document.getElementById( 'withdraw-btn' ).addEventListener( 'click', function() {
    const newWithdrawnAmount = getInputValue( 'withdrawn-amount' );
    const currentBalance = getCurrentBalance();
    if( newWithdrawnAmount > 0 && newWithdrawnAmount < currentBalance) {
        updateTotalField( 'recently-withdrawn', newWithdrawnAmount);
        updateBalance( newWithdrawnAmount, false);
    }
    if( newWithdrawnAmount > currentBalance ) {
        console.log("You don't have sufficient balance to withdraw this amount.")
    }
} )