
import onClickCell from "./events/onClickCell.js";
const addEvenListeners = (grid) => {
  const gridEl = document.querySelector(".grid");

  gridEl.addEventListener("click", ({ target }) =>
    onClickCell({ target, grid })
  );
  gridEl.addEventListener("contextmenu", (evt) => {
    evt.preventDefault();
    const { target } = evt;
    if (target.matches(".cell-flag")) {
      target.classList.add("cell-hidden");
      target.classList.remove("cell-flag");
      return;
    }
    if (!target.matches(".cell-hidden")) {
      return;
    }
    target.classList.remove("cell-hidden");
    target.classList.add("cell-flag");
  });
};
export default addEvenListeners;
