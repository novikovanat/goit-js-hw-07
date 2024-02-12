const categories = document.querySelectorAll('.item');
console.log(`Nuber of categories:${categories.length}`);
categories.forEach(category => {
  const nameOfcategory = category.querySelector('h2');
  const items = category.querySelectorAll('ul > li');
  console.log(`Category: ${nameOfcategory.innerText}`);
  console.log(`Elements: ${items.length}`);
});
