document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  let formData = new FormData(this);

  const number = formData.get("mobilephone");

  var expr = /^(0|91)?[6-9][0-9]{9}$/;
  if (!expr.test(number)) {
    document.querySelector("#mobileError").innerHTML =
      "Please enter a valid 10 digit mobile number";
    document.querySelector("#mobileError").style.color = "red";
    document.querySelector("#mobileError").style.display = "block";
    return;
  }

  // Send post request to the server
  fetch(
    "https://forms.hubspot.com/uploads/form/v2/23736002/5f288f3f-b0e0-4f28-96d4-fc665ceeea3d",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        // Show success message
        document.querySelector("#thankYou").innerHTML =
          "Thank you for submitting the form!";
        document.querySelector("#thankYou").style.color = "green";
        document.querySelector("#thankYou").style.display = "block";
      } else {
        // Show error message
        document.querySelector("#thankYou").innerHTML =
          "An error occurred while submitting the form. Please try again later.";
        document.querySelector("#thankYou").style.color = "red";
        document.querySelector("#thankYou").style.display = "block";
      }

      // Remove form
      this.remove();
    })
    .catch((error) => {
      console.error(error);
      // Show error message
      document.querySelector("#thankYou").innerHTML =
        "Something went wrong, please try again later.";
      document.querySelector("#thankYou").style.color = "red";
      document.querySelector("#thankYou").style.display = "block";
      // Remove form
      this.remove();
    });
});

// Slider Movements
const moveSliderToLeft = () => {
  const scrollableElement = document.querySelector("#sliderCont");
  const screenWidth = window.innerWidth;

  if (screenWidth < 500) {
    scrollableElement.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  } else {
    scrollableElement.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  }
};

const moveSliderToRight = () => {
  const scrollableElement = document.querySelector("#sliderCont");
  const screenWidth = window.innerWidth;

  if (screenWidth < 500) {
    scrollableElement.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  } else {
    scrollableElement.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  }
};

// Slider2 Movements
const moveSliderToLeft2 = () => {
  const scrollableElement = document.querySelector("#sliderCont2");
  const screenWidth = window.innerWidth;

  if (screenWidth < 500) {
    scrollableElement.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  } else {
    scrollableElement.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  }
};

const moveSliderToRight2 = () => {
  const scrollableElement = document.querySelector("#sliderCont2");
  const screenWidth = window.innerWidth;

  if (screenWidth < 500) {
    scrollableElement.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  } else {
    scrollableElement.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  }
};
