const categories = document.querySelectorAll('.item');
console.log(`Quantity of categories:${categories.length}`);
categories.forEach(category => {
  const nameOfcategory = category.querySelector('h2');
  const items = category.querySelectorAll('ul > li');
  console.log(
    `The category ${nameOfcategory.innerText} contains ${items.length} items`,
  );
});
