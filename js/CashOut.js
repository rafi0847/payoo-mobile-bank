document.getElementById('btn-cashout-primary').addEventListener('click', function(event){
    const pinNumber = document.getElementById('pin-cashout-number').value 
    const cashoutMoney = document.getElementById('cashout-money').value
    event.preventDefault();
    

    if(pinNumber === '123'){
        console.log('log in successfully')

        const Blance = document.getElementById('Balance-money').innerText;
        console.log( Blance)

        const cashoutBalance = parseFloat(Blance)- parseFloat(cashoutMoney);
        console.log(cashoutBalance)
        document.getElementById('Balance-money').innerText = cashoutBalance;
        
    }
    else{
        alert('wrong pin number ,Please input the right !!')
    }
});