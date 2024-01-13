const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting) {
    //   entry.target.classList.add("show");
    // } else {
    //   entry.target.classList.remove("show");
    // }

    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      // Stop observing the element once it becomes visible
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => {
  observer.observe(element);
});

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      counters.forEach((counter) => {
        let initial_count = 0;
        const final_count = counter.dataset.count;

        const counting = setInterval(updateCounting, 10);
        function updateCounting() {
          initial_count = initial_count + 1;
          counter.innerText = initial_count + "+";

          if (initial_count >= final_count) {
            clearInterval(counting);
            // Stop observing once the counting is done
            observer.unobserve(entry.target);
          }
        }
      });
    }
  });
});

// Assume counters is an array of elements you want to observe
// counters.forEach((counter) => {
//   counterObserver.observe(counter);
// });

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counterObserver.observe(counter);
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get form values
  const firstName = document.getElementById("exampleInputFirstName").value;
  const lastName = document.getElementById("exampleInputLastName").value;
  const email = document.getElementById("exampleInputEmail").value;
  const message = document.getElementById("exampleFormControlTextarea1").value;

  // Display thank you message
  document.getElementById("thankYouMessage").style.display = "block";

  setTimeout(
    () => {
      document.getElementById("thankYouMessage").style.display = "none";
    },

    5000
  );

  // Optionally, you can submit the form data to the server using fetch or AJAX
  // Example using fetch (replace 'your-server-endpoint' with your actual endpoint)
  /*
  fetch('your-server-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      message,
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  */

  // Reset form values
  document.getElementById("exampleInputFirstName").value = "";
  document.getElementById("exampleInputLastName").value = "";
  document.getElementById("exampleInputEmail").value = "";
  document.getElementById("exampleFormControlTextarea1").value = "";
});
