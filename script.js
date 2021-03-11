
var priceBtn = document.getElementById('calculate');
priceBtn = addEventListener('click', function(){

var nomePanino = document.getElementById('burger-name').value;

if(nomePanino < 1 ){
  alert('Per continuare dai un nome al tuo panino')
} else{

  var ingredients = document.getElementsByClassName('ingred');

  var prezzoMinimo = 10;
  for(var i = 0; i < ingredients.length; i++ ){

    var ingredient = ingredients[i];
    var ingFlag = ingredient.checked;
    var costoAggiuntivo = parseInt(ingredient.dataset.price);

    if(ingFlag){
      prezzoMinimo += costoAggiuntivo;
    }
  }
  var coupons = ['fortuna','luck','gratis'];
  var couponInserito = document.getElementById('burger-coupon').value;

  if(coupons.includes(couponInserito)){
    prezzoMinimo -= prezzoMinimo / 5;
  }

  var spazioPrice = document.getElementById('price');
  spazioPrice.innerHTML = prezzoMinimo;


}

})
