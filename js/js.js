const employeeOneButton = document.querySelector(".employee-one-button");
const employeeOne = document.querySelector(".employee-one");

employeeOneButton.addEventListener("click", function () {
	employeeOne.classList.toggle("is-flipped");
});
