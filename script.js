const container = document.getElementById("container");

let count = 1;

infiniteScroll();

function infiniteScroll() {
  for (let i = 0; i < 25; i++) {
    setTimeout(() => {
		const lines = document.createElement("p");
    	lines.innerText = `Masai Student ${count++}`;
    	container.appendChild(lines);
	}, 1500)
  }
}

container.addEventListener("scroll", function () {
  if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
    console.log(
      "scrollTop + clientHeight:",
      container.scrollTop + container.clientHeight,
      "scrollHeight:",
      container.scrollHeight
    );

    infiniteScroll();
  }
});