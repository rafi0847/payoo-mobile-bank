document.getElementById('btn-primary').addEventListener('click', function(event){
    const pinNumber = document.getElementById('pin-number').value 
    const phoneNumber = document.getElementById('phone-number').value 
    
    if(phoneNumber === '0123' && pinNumber === '123') {
        console.log('log in successfully')
    }
    
    else{
        alert('wrong phone number and pi number ,Please input the right !!')
    }

});