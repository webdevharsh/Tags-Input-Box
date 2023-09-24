let ul = document.querySelector('.tag-box ul');
let input = document.querySelector('.userInput');
let remaining_tags_message =  document.querySelector('.container .remaining-tags');

let tags = [];
let max_length = 10;

let createTag =()=>{
ul.querySelectorAll('li').forEach(li=> li.remove()); 
tags.forEach((tag)=>{
 let liTag = `<li>${tag} <i class="fa-sharp fa-solid fa-xmark" onclick="removeElement(this,'${tag}')"></i></li>`;   
 ul.insertAdjacentHTML('afterbegin',liTag);
})     
no_of_tags_count();
}

let addTag =(e)=>{
if(e.key == 'Enter'){      
 let tag = e.target.value.replace(/\s+/g, ' ');
 if(tag.length > 1 && !tags.includes(tag)){
  if(tags.length < 10){  
     tag.split(',').forEach(()=>{
        tags.push(tag);
        createTag();
     });
  }
 };
 e.target.value = "";
}
};

let removeElement =(elem,tag)=>{
let index = tags.indexOf(tag);
tags = [...tags.slice(0,index),...tags.slice(index + 1)];
elem.parentElement.remove();
no_of_tags_count();
}

let no_of_tags_count =()=>{
 let tags_length = max_length - tags.length;
 remaining_tags_message.innerHTML = tags_length + ' tags are remaining';
 remaining_tags_message.style.display = 'block';
}

input.addEventListener('keyup',addTag); 
