document.querySelector("#ewallet-form").addEventListener('submit',function (e){
    e.preventDefault();

    const type = document.querySelector(".add__type").value;
    const desc = document.querySelector(".add__description").value;
    const value = document.querySelector(".add__value").value;

    if(desc && value){
        addItems(type, desc, value);
        resetForm();
    }
});





showItems();

function showItems(){
    let items = getItemsFromLS();
    const collection = document.querySelector(".collection");  
    for(let item of items){
        let newHtml=`
    <div class="item">
        <div class="item-description-time">
            <div class="item-description">
                <p>${item.desc}</p>
            </div>
            <div class="item-time">
                <p>${item.time}</p>
            </div>
        </div>
        <div class="item-amount ${item.type==="+"?"income-amount":"expense-amount"}">
            <p>${item.type}$${item.value}</p>
        </div>
    </div>
    `;
    collection.insertAdjacentHTML("afterbegin",newHtml);
    }
}





function addItems(type, desc, value){
    let time = getFormattedTime();
    
    let newHtml=`
    <div class="item">
        <div class="item-description-time">
            <div class="item-description">
                <p>${desc}</p>
            </div>
            <div class="item-time">
                <p>${time}</p>
            </div>
        </div>
        <div class="item-amount ${type==="+"?"income-amount":"expense-amount"}">
            <p>${type}$${value}</p>
        </div>
    </div>
    `;

    addItemsToLS(type, desc, value, time);

    const collection = document.querySelector(".collection");
    collection.insertAdjacentHTML("afterbegin",newHtml);

    getTotalIncome();
    getTotalExpanse();
    getTotalBalance();
}




function resetForm(){
    document.querySelector(".add__type").value='+';
    document.querySelector(".add__description").value="";
    document.querySelector(".add__value").value="";
}



function getFormattedTime(){
    let now = new Date().toLocaleTimeString('en-us',{
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute:"2-digit",
    });
    console.log(now);

    const date = now.split(",")[0].split(" ")[1];
    const month =  now.split(",")[0].split(" ")[0];
    const time = now.split(",")[1];

    return `${date} ${month}, ${time}`;
}



///LocalStorage///////////////////

function getItemsFromLS(){
    let items = localStorage.getItem("item");
    return items ? JSON.parse(items) : [];
}

function addItemsToLS(type, desc, value, time){
    const item={type, desc, value, time};

    let items=getItemsFromLS();
    items.push(item);
    localStorage.setItem('item', JSON.stringify(items));
}
///////////////////////////////////////////////////




getTotalIncome();

function getTotalIncome(){

    const items=getItemsFromLS();
    let amount=items
    .filter((item) => item.type==='+')
    .reduce((sum,inc) => sum + parseFloat(inc.value),0);
    document.querySelector(".income__amount p").innerText=`$${sep(amount)}`;
     
}

getTotalIncome();

function getTotalExpanse(){

    const items=getItemsFromLS();
    let amount=items
    .filter((item) => item.type==='-')
    .reduce((sum,inc) => sum + parseFloat(inc.value),0);
    document.querySelector(".expense__amount p").innerText=`$${sep(amount)}`;
}

getTotalBalance()
function getTotalBalance(){
    
    const items=getItemsFromLS();
    let amount=items
    .reduce((sum,inc) => {
        if(inc.type==="+"){
           return sum + parseFloat(inc.value);
        }
        else{
           return sum - parseFloat(inc.value);
        }
    },0);
    console.log(amount);
    document.querySelector(".balance__amount p").innerText=`$${sep(amount)}`;
}


function sep(amount){

    return parseFloat(amount).toLocaleString();

}