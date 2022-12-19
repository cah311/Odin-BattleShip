export function moveShip(ship) {
  const gameContainer = document.getElementById('game-page');
  const dimensions = [gameContainer.offsetWidth, gameContainer.offsetHeight];
  console.log(dimensions);

  let currentDroppable = null;

  ship.onmousedown = function (event) {
    const shipPlace = [event.pageX, event.pageY];

    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(ship);

    function moveAt(pageX, pageY) {
      ship.style.left = pageX - ship.offsetWidth / 2 + 'px';
      ship.style.top = pageY - ship.offsetHeight / 2 + 'px';
    }

    // potential droppable that we're flying over right now

    // move our absolutely positioned ship under the pointer
    moveAt(event.pageX, event.pageY);
    // }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);

      let shipCells = document.getElementsByClassName('ship-cell');
      ship.hidden = true;
      for (let cell of shipCells) {
        cell.hidden = true;
      }
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      console.log(shipCells);
      console.log(elemBelow);
      ship.hidden = false;
      for (let cell of shipCells) {
        cell.hidden = false;
      }

      // mousemove events may trigger out of the window (when the ball is dragged off-screen)
      // if clientX/clientY are out of the window, then elementFromPoint returns null
      if (!elemBelow) return;

      // potential droppables are labeled with the class "droppable" (can be other logic)
      let droppableBelow = elemBelow.closest('.game-cell');

      if (currentDroppable != droppableBelow) {
        // we're flying in or out...
        // note: both values can be null
        //   currentDroppable=null if we were not over a droppable before this event (e.g over an empty space)
        //   droppableBelow=null if we're not over a droppable now, during this event

        if (currentDroppable) {
          // the logic to process "flying out" of the droppable (remove highlight)
          leaveDroppable(currentDroppable);
        }
        currentDroppable = droppableBelow;
        if (currentDroppable) {
          // the logic to process "flying in" of the droppable
          enterDroppable(currentDroppable);
        }
      }
    }

    // (2) move the ship on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // (3) drop the ship, remove unneeded handlers
    ship.onmouseup = function () {
      document.removeEventListener('mousemove', onMouseMove);
      ship.onmouseup = null;
    };

    function enterDroppable(elem) {
      elem.style.background = 'pink';
    }

    function leaveDroppable(elem) {
      elem.style.background = '';
    }

    ship.ondragstart = function () {
      return false;
    };
  };
}
