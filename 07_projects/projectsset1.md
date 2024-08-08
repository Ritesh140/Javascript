# Projects realated to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-ritesh4012?file=index.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);

    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id; // = grey
    }

    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2 Soltuion code

```javascript
const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else if (bmi < 18.6 || bmi < 0) {
    results.innerHTML = `${bmi}, which is Under Weight`;
  } else if (bmi === 18.6 || bmi > 18.6 || bmi < 24.9 || bmi === 24.9) {
    results.innerHTML = `${bmi}, which is Normal Weight`;
  }
  if (bmi > 24.9) {
    results.innerHTML = `${bmi}, which is Over Weight`;
  }
});

```

## project 3 solution code

```javascript
const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

