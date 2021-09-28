var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var count = document.getElementById('counter');
var heart = document.getElementById('heart');
plus.addEventListener('click', function(){
    count.innerText= parseInt(count.innerText)+1;
})
minus.addEventListener('click', function(){
    count.innerText= parseInt(count.innerText)-1;
})
heart.addEventListener('click', function(){
    let comment = document.querySelector('#list');
    let li = document.createElement('li')
    li.innerText=`${count.textContent} has been liked`
    document.querySelector('.likes').append(li);
})



var button = document.getElementById('submit');

button.addEventListener('click', function(e){
    e.preventDefault();
    var content = document.getElementById('comment-input');
    var text = content.value;
    var list = document.createElement('li');
    list.innerText = `${text}`;
    document.querySelector('#comment-form').append(list);
    
})