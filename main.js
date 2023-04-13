const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    console.log(`index1 is ${index1}`);
    stars.forEach((item, index2) => {
      console.log("################################");
      console.log(`index2 is ${index2}`);
      //add &remove active class
      //add active to the clicked star and  any stars with a lower index
      //remove active class from any star with a higher index
      index1 >= index2
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  });
});
