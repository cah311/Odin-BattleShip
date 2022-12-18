export function moveShip(ship) {
  let shipElement = ship;
  let initialX = 0,
    initialY = 0;

  let moveElement = false;
  let stopMovement;
  // Events Object
  let events = {
    mouse: {
      down: 'mousedown',
      move: 'mousemove',
      up: 'mouseup',
    },
  };

  let deviceType = 'mouse';

  // Start (mouse down)

  shipElement.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;

    // Start movement
    moveElement = true;
  });

  shipElement.addEventListener(events[deviceType].move, (e) => {
    // if movement == true then set top and left to new X and Y while removing offset
    if (moveElement) {
      e.preventDefault();
      let newX = e.clientX;
      let newY = e.clientY;
      shipElement.style.top = shipElement.offsetTop - (initialY - newY) + 'px';
      shipElement.style.left =
        shipElement.offsetLeft - (initialX - newX) + 'px';
      initialX = newX;
      initialY = newY;
    }
  });

  shipElement.addEventListener(
    events[deviceType].up,
    (stopMovement = (e) => {
      moveElement = false;
    })
  );

  shipElement.addEventListener('mouseleave', stopMovement);
  shipElement.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
  });
}
