document.getElementById("Button-Login")
.addEventListener('click', function(event){
event.preventDefault();

//get phone number event

const phoneNumber = document.getElementById("phone-number").value;
const pinNumber = document.getElementById("pin-number").value;

if(phoneNumber === '5' && pinNumber === '1234'){
    console.log('login successful');
    window.location.href = 'home.html';
}

else{
    alert('wrong password or phone number')
}

})

