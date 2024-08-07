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