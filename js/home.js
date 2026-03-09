document.getElementById('btn-primary').addEventListener('click', function(event){
    const pinNumber = document.getElementById('pin-number').value 
    const addMoney = document.getElementById('Add-money').value 
    event.preventDefault();
    
    if(pinNumber === '123') {
        console.log('log in successfully')

        const Balance = document.getElementById('Balance-money').innerText;
        console.log(typeof Balance)

        const newbalance = parseFloat(Balance) + parseFloat(addMoney);
        console.log(newbalance)
        document.getElementById('Balance-money').innerText = newbalance;
    }

    else{
        alert('wrong pin number ,Please input the right !!')
    }

});