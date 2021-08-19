(() => {
  // TODO: Dynamically get floors count from somewhere
  const MAX_FLOORS = 10

  const incFloorBtn = document.getElementById('increaseFloor')
  const decFloorBtn = document.getElementById('decreaseFloor')
  const currentFloorEl = document.getElementById('currentFloor')

  /**
   *
   * @param {'+' | '-'} action
   *
   * @returns String
   */
  const changeFloors = (action) => {
    const currentFloor = parseInt(currentFloorEl.innerText)
    let res = currentFloor

    if (action === '+') {
      const nextFloor = currentFloor + 1
      if (nextFloor <= MAX_FLOORS) res = nextFloor
    } else if (action === '-') {
      const nextFloor = currentFloor - 1
      if (nextFloor > 0) res = nextFloor
    }

    return res.toString().padStart(2, '0')
  }

  incFloorBtn.addEventListener('click', () => {
    currentFloorEl.innerText = changeFloors('+')
  })

  decFloorBtn.addEventListener('click', () => {
    currentFloorEl.innerText = changeFloors('-')
  })
})()
