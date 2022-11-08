function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  
  // VARIABLES
  let html2 = '';
  var keys = [];
  var values = [];
  var nobject = {};
  var nvalues = [];
  var nobjs = [];
  var top = [];
  var filtered = [];

  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
      // ARRAYS CREATION
      keys.push(people[i][8]);
      values.push(people[i][11]);
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  //container.innerHTML = '<ul id = "data">' + html + "</ul>";


 // NEW OBJECT ONLY NAMES | SALARY
 nobject = Object.assign(...keys.map((k, i) => ({[k]: values[i]})))
 //console.log(nobject);
 
 // Sort the numbers in descending order:
 values.sort(function(a, b){return b-a});
 
 // ARRAY WITH TOP 5 EARNERS
 for (let i = 0; i < 5; i++) {
   nvalues.push(values[i]) // SALARIES ARRAYS TOP EARNERS
   nobjs.push(Object.keys(nobject).find(key => nobject[key] === values[i])); // OARRAY WITH TOP EARNERS NAME
 }
 
 // console.log(nobjs);
 
 //console.log(nobjs);
 
 nobject = Object.assign(...nobjs.map((k, i) => ({[k]: nvalues[i]}))); // OBJECT OF TOP EARNERS NAME | SALARY
 
 for (const [key, value] of Object.entries(nobject)) {
  html2 +=
      '<li class="post">' + '<h2>' + `${key}` + '</h2>' + '<h3>' + `${value}` + '</h3>';

 }


 //console.log(nobject);
 
 // top earners
 //function isPositive(value) {
 //  return value > 200000.00;
 //}
  
 filtered = nvalues.filter(number => number > 200000.00 );
 //console.log(filtered);
 
 //top = Object.assign(...nobjs.map((k, i) => ({[k]: filtered[i]}))); 
 //console.log(top);
 
 top = Object.assign(...nobjs.map((k, i) => ({[nobjs[filtered.length-1]]: filtered[filtered.length-1]})));
 
 
 // PRINT / SHOW KEYS AND VALUES >200000
 //for (const [key, value] of Object.entries(top)) {
 // html2 +=
 //     '<li class="post">' + '<h2>' + `${key}` + '</h2>' + '<h3>' + `${value}` + '</h3>';

 //}

 container.innerHTML = '<ul id = "data">' + html + "</ul>"; 
 topSalaries.innerHTML = '<ul id = "data">' + html2 + "</ul>";
  
}
renderPosts(boston, document.getElementById('container'));

renderPosts(boston, document.getElementById('topSalaries'));
