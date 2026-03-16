//Add money button 

document.getElementById('btn-add-money').addEventListener('click',function(event){
    
    document.getElementById('cash in-btn-card').classList.remove('hidden');
    document.getElementById('cash out-btn-card').classList.add('hidden');
    event.preventDefault();
})

// Cash out button

document.getElementById('btn-cashout').addEventListener('click',function(event){

    document.getElementById('cash out-btn-card').classList.remove('hidden');
    document.getElementById('cash in-btn-card').classList.add('hidden');
    event.preventDefault();
})