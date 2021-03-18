
var priceBtn = document.getElementById('calculate');
priceBtn.addEventListener('click', function(){

  var nomePanino = document.getElementById('burger-name').value;

  if(nomePanino === '' ){
    alert('Per continuare dai un nome al tuo panino')
    return

  }
    var ingredients = document.getElementsByClassName('ingred');

    var prezzoMinimo = 10;

    for(var i = 0; i < ingredients.length; i++ ){

      var ingredient = ingredients[i];
      var isChecked = ingredient.checked;


      if(isChecked){

        prezzoMinimo += parseInt(ingredient.dataset.price);
      }
    }
    var coupons = ['fortuna','luck','gratis'];
    var couponInserito = document.getElementById('burger-coupon').value;

    if(coupons.includes(couponInserito)){
      prezzoMinimo -= prezzoMinimo / 5;
    }

    var spazioPrice = document.getElementById('price');
    spazioPrice.innerHTML = prezzoMinimo;

  });

  var liste = document.getElementsByTagName('li');
  for (var i = 0; i < liste.length; i++) {

    var li = liste[i];
    li.addEventListener('click', function(){



      var wholeLi = this;
      var childsLi = this.children;
      var child2Li = childsLi[1];

      child2Li.checked = !child2Li.checked;

    })


  }
