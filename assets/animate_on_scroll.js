const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
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


