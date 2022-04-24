const blogPosts = [
  {
    image: "images/blog-1.jpg",
    "image alt": "woman sitting with a dog",
    name: "Traveling With Your Dog",
    "text 1": "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    "text 2": "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
  },
  {
    image: "images/blog-2.jpg",
    "image alt": "four dogs on leashes sitting",
    name: "How To Walk Multiple Dogs",
    "text 1": "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    "text 2": "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
  },
  {
    image: "images/blog-3.jpg",
    "image alt": "person playing with dog at sundown",
    name: "Teach Your Dog To Fetch",
    "text 1": "Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.",
    "text 2": "Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam."
  }
];

// header
const heading = document.createElement('h1');
heading.textContent = "Adoptadog Blog";
const main = document.getElementById("blog-main");
main.appendChild(heading);

// blog posts 
for (let i = 0; i < blogPosts.length; i++) {
  const blogPost = blogPosts[i];
  
  const article = document.createElement('article');
  article.setAttribute('class', 'blog');
  main.appendChild(article);

  const blogImage = document.createElement('img');
  blogImage.setAttribute('src', blogPost.image);
  blogImage.setAttribute('alt', blogPost["image alt"]);
  article.appendChild(blogImage);

  const section = document.createElement('section');
  article.appendChild(section);

  const blogName = document.createElement('h2');
  blogName.textContent = blogPost.name;
  const paragraphOne = document.createElement('p');
  paragraphOne.textContent = blogPost["text 1"];
  const paragraphTwo = document.createElement('p');
  paragraphTwo.textContent = blogPost["text 2"];

  section.appendChild(blogName);
  section.appendChild(paragraphOne);
  section.appendChild(paragraphTwo);
}