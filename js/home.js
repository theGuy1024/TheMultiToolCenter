var total = 0, itemsCount = 0, shopIndex = 0;
var shopItem = [];
var cartCount = document.getElementById("cartCounter");

$(document).ready(()=>{
    //clicking on the shopping cart icon - home
    $('#cartButton').on('click', () => {
        /*hiding inventory window*/
        $('#shoppingHomePage').hide();
        /*showing cart window*/
        $('#shoppingCartContainer').fadeIn();  
        /*update user's total*/
        $('#cartTotal').html('$'+total);
        /*calling function to add list*/
        displayItems();
    });
    
    //clicking on the "continue shopping" button - cart form
    $('#closeCart').on('click', () => {
        /*hiding cart window*/
        $('#shoppingCartContainer').hide();   
        /*showing inventory window*/
        $('#shoppingHomePage').fadeIn(); 
        /*clear list*/
        clearList();
    });

    //clicking on the "checkout" button - cart form
    $('#cashout').on('click', () => {
        /*hiding cart window*/
        $('#shoppingCartContainer').hide();
        /*showing checkout window*/
        $('#checkoutContainer').fadeIn();  
        /*clear list*/
        clearList();  
        /*setting number of items and total in checkout summary*/
        $('#cartAm').val(itemsCount);
        $('#gTotal').val('$'+total);
    });
    
    //clicking on the "cancel" button - checkout form
    $('#cancelCheckout').on('click', () => {
        /*hidding checkout window*/
        $('#checkoutContainer').fadeOut();    
        /*showing inventory window*/
        $('#shoppingHomePage').fadeIn(); 
    });
    
});

function displayItems(){
    //checks if list has any item
    var cartListBody = document.getElementById("cartList");
    if(shopIndex > 0){
        for(x = 0; x < shopIndex; x++){
            var addImg = document.createElement('IMG');
            addImg.src = shopItem[x][1];
            addImg.setAttribute('class', 'col-md-3 toolImage dynamicCreation');
            cartListBody.appendChild(addImg);
        
            var addName = document.createElement('h2');
            addName.innerHTML = shopItem[x][0];
            addName.setAttribute('class', 'col-md-3 dynamicCreation');
            cartListBody.appendChild(addName);
        
            var addQuant = document.createElement('P');
            addQuant.innerHTML = shopItem[x][2]+' pcs';
            addQuant.setAttribute('class', 'col-md-2 dynamicCreation');
            cartListBody.appendChild(addQuant);
        
            var addPrice = document.createElement('P');
            addPrice.innerHTML = '$'+shopItem[x][3];
            addPrice.setAttribute('class', 'col-md-2 dynamicCreation');
            cartListBody.appendChild(addPrice);
        }
    }
}

function clearList(){
    var parentObj = document.getElementById("cartList");
    var createdObjs = document.querySelectorAll('.dynamicCreation');
    for(y = 0; y < createdObjs.length; y++){
        parentObj.removeChild(parentObj.childNodes[0]);
    }    
}

function queueItemNew(itemName){
    /*getting price and value as a string*/
    var itemPrice = document.getElementById(itemName+'Price').innerHTML;
    var itemAmount= document.getElementById(itemName+'Input').value;
    /*convert fetched items into INTs*/
    var convertedPricez = parseInt(itemPrice,  10);
    var convertedValuez = parseInt(itemAmount, 10);

    /*validation - converted input and input box*/
    if(convertedValuez < 1 || itemAmount == "")
        /*highlight incorrect value, less than 1 or empty*/
        document.getElementById(itemName+'Input').style.border = "1px solid red";
    else{
        /*track the amount of items in cart*/
        itemsCount += convertedValuez;
        /*unhighlight box if it was/wasnt highlighted*/
        document.getElementById(itemName+'Input').style.border = "1px solid black";
        //update cart item displayed in navbar
        cartCount.value = itemsCount;

        /*track user's total*/
        total +=  (convertedPricez * convertedValuez);
    }

    //ADDING ITEM TO CART
    //getting item source image
    var itemImgSrc = document.getElementById(itemName+'Image').src;
    //storing item as: Name, image source, quantity, price
    shopItem[shopIndex] = [itemName, itemImgSrc, convertedValuez, convertedPricez]
    shopIndex++;

    //clear input box
    document.getElementById(itemName+'Input').value = " ";
}
