export function moveShip(ship) {
  //let shipElement = document.getElementsByClassName(`${shipType}-element`);
  //shipElement.setAttribute('class', 'moveable');

  let shipElement = ship;
  let initialX = 0,
    initialY = 0;

  let moveElement = false;
  // Events Object

  let events = {
    mouse: {
      down: 'mousedown',
      move: 'mousemove',
      up: 'mouseup',
    },
  };

  const isTouchDevice = () => {
    return false;
  };

  isTouchDevice();

  let deviceType = 'mouse';

  // Start (mouse down)

  shipElement.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    // Start movement
    moveElement = true;
  });

  shipElement.addEventListener(events[deviceType].move, (e) => {
    // if movement == true then set top and left to new X and Y while removing offset
    if (moveElement) {
      e.preventDefault();
      let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
      let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
      shipElement.style.top = shipElement.offsetTop - (initialY - newY) + 'px';
      shipElement.style.left =
        shipElement.offsetLeft - (initialX - newX) + 'px';
      initialX = newX;
      initialY = newY;
    }
  });

  let stopMovement;
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
