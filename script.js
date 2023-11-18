// const totalCost = document.querySelector('#input-el')

function handleKeyDown(event) {
  if(event.key === 'Enter'){
    calculateTotal()
  }
}

function calculateTotal() {

  const inputElement = document.querySelector('#input-el')
  let cost = Number(inputElement.value)

  if (!cost) {
    return;
  }

  if(cost < 40) {
    cost += 10
  }

  document.querySelector('#cost-total')
  .innerHTML = `Total: $${cost}`

 }