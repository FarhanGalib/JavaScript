// I wish you good luck and happy coding 🥰🤠🥳🥳💯💯

// let headers = document.getElementsByClassName("header");
// let headers = document.getElementsByTagName("h1");
// let headers = document.querySelectorAll("h1");
// let headers = document.querySelector(".header");
// console.log(headers);
// // headers = Array.from(headers);

// headers.forEach(function(header, index){
//     header.style.color="#fff";
//     header.style.backgroundColor = "#000";
//     header.style.padding="10px";
//     header.innerText=`Hello World: ${index}`;
// });

// let tbody = document.querySelector('tbody');
// // console.log(tbody.children);
// console.log(tbody.childElementCount);




// <tbody>
// <tr>
//   <td class="post">post 1</td>
//   <td>
//     <span class="fa fa-times float-right pr-3"></span>
//   </td>
// </tr>

const tr= document.createElement('tr');
const td1= document.createElement('td');
td1.className='post';
td1.innerText='post 6';
td1.setAttribute('title','row-6');


const td2 = document.createElement('td');
const span = document.createElement('span');
span.className="fa fa-times float-right pr-3";
td2.append(span);
tr.append(td1,td2);
const tbody = document.querySelector('tbody');
tbody.append(tr);
console.log(tbody);