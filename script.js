const product = [
    {
        id:0,
        image: 'image/intel i3 - 13100F.jpg',
        title: 'Intel i3 - 13100F',
        price: 122.49,
    },
    {
        id:1,
        image: 'image/Intel Core i5-12600K.jpg',
        title: 'Intel Core i5-12600K',
        price:189.09,
    },
    {
        id:2,
        image: 'image/Intel Core i7-13700K.jpg',
        title: 'Intel Core i7-13700K',
        price: 300.09,
    },
    {
        id:3,
        image: 'image/Intel Core i9-14900K.jpg',
        title: 'Intel Core i9-14900K',
        price: 575.66,
    },
    {
        id:4,
        image: 'image/AMD Ryzen 3 4100.jpg',
        title: 'AMD Ryzen 3 4100',
        price: 68.50,
    },
    {
        id:5,
        image: 'image/AMD Ryzen 5 5600G.jpg',
        title: 'AMD Ryzen 5 5600G',
        price: 159.99,
    },
    {
        id:6,
        image: 'image/AMD Ryzen 7 7800X3D.jpg',
        title: 'AMD Ryzen 7 7800X3D',
        price: 449.00,
    },
    {
        id:7,
        image: 'image/AMD Ryzen 9 7950X3D.jpg',
        title: 'AMD Ryzen 9 7950X3D',
        price: 626.53,
    },
    {
        id:8,
        image: 'image/Corsair iCUE H170i ELITE LCD.jpg',
        title: 'Corsair iCUE H170i ELITE LCD',
        price: 299.99,
    },
    {
        id:9,
        image: 'image/Corsair iCUE H150i ELITE CAPELLIX XT.jpg',
        title: 'Corsair iCUE H150i ELITE CAPELLIX XT',
        price: 219.99,
    },
    {
        id:10,
        image: 'image/NZXT Kraken 360.jpg',
        title: 'NZXT Kraken 360',
        price: 164.03,
    },
    {
        id:11,
        image: 'image/NZXT Kraken Elite 360 RGB.jpg',
        title: 'NZXT Kraken 360 RGB',
        price: 350.93,
    },
    {
        id:12,
        image: 'images/NZXT Kraken Z63.jpg',
        title: 'NZXT Kraken Z63',
        price: 265.35,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var{image, title, price} = item;
    return(
        `<div class='box'>
        <div class='img-box'>
        <img class='images'  src=${image}></img>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocartbutton("+(i++)+")'>Add To Cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocartbutton(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    document.getElementById("total").innerHTML="$ "+0+". 00";
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your Cart Is Empty";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
    {
        var {image, title, price,} = items;
        total=total+price;
        document.getElementById("total").innerHTML = "$ "+total+".00";
        return(
            `<div class='cart-item'>
            <div calss='row-img'>
            <img class='rowimg' src=${image}>
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
            "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
        );
    }).join('');
    }
};

