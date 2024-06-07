function slugify(title) {
  const lowerCaseTitle = title.toLowerCase();
  const trimmedTitle = lowerCaseTitle.trim();
  const slug = trimmedTitle.replace(/\s+/g, "-");
  return slug;
}
console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
