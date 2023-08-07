const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const cartItem = document.querySelector('.cart-items-container')
const cartBtn = document.querySelector('#cart-btn')
const navbar = document.querySelector('.navbar')
const menuBtn = document.querySelector('#menu-btn')



searchBtn.addEventListener('click', ()=>{
    searchForm.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm) ){
            searchForm.classList.remove('active');
        }
    })
})

cartBtn.addEventListener('click', ()=>{
    cartItem.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem) ){
            cartItem.classList.remove('active');
        }
    })
})

menuBtn.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn) ){
            navbar.classList.remove('active');
        }
    })
})

const paymentMethods = document.querySelectorAll("input[name='payment-method']");
const paymentDetails = document.querySelectorAll(".payment-details");

for (const paymentMethod of paymentMethods) {
  paymentMethod.addEventListener("change", () => {
    const selectedPaymentMethod = paymentMethod.value;
    const paymentDetailsToShow = document.getElementById(selectedPaymentMethod + "-info");

    for (const paymentDetail of paymentDetails) {
      paymentDetail.style.display = "none";
    }

    paymentDetailsToShow.style.display = "block";
  });
}