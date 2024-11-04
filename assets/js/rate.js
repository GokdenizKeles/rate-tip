const rateNumbers = document.querySelectorAll('.rate-btn')
for (const rateNumber of rateNumbers) {
  rateNumber.addEventListener('click',function() {
    selectedRate.innerHTML = `You selected ${rateNumber.innerText} out of 5`
  })
}
if(selectedRate.innerText === '') {
  selectedRate.innerHTML = '🥲😿'
}

 const submitBtn = document.querySelector('.submit-btn')
 const thxContainer = document.querySelector('.thx-container')
 submitBtn.addEventListener('click', function() {
  display.style.display = 'none'
  thxContainer.style.display = 'block'
 })