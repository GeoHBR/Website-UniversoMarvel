element = document.getElementById("animate");

if (element) {
	// reset the transition by...
	element.addEventListener("click", function (e) {
		e.preventDefault;

		console.log('element', element.classList);

		// removing the class
		element.classList.remove("run-animation");

		// triggering reflow
		void element.offsetWidth;

		// and re-adding the class
		element.classList.add("run-animation");
	}, false);
}
function zoom() {
	document.body.style.zoom = "90%"
}
function showModal(element) {
	if (element.tagName === "IMG") {
	  var modal = document.getElementById("myModal");
	  var modalImg = document.getElementById("modalImg");
	  
	  modal.style.display = "block";
	  modalImg.src = element.src;
	}
  }
  
  function hideModal() {
	var modal = document.getElementById("myModal");
	modal.style.display = "none";
  }
  
  


