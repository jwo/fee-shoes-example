/*

1. on load show the products page
    a) fetch Products
    b) render product list template
2. on click to product, go to that page
    a) hide products
    b) fetch Product
    c) render product detail template
3. on click to back to all shoes
    a) execute #1
*/

var fetchProduct = function(id){
  $("#product-list").hide();
  $.getJSON("/api/products/" + id)
  .then( function(json){
    var productHtmlTemplate = $("#productDetailTemplate").html();
    var compiled = _.template(productHtmlTemplate)
    var theHtml = compiled(json.product)

    $("#product-show").html( theHtml )
    $("#product-show").show();

    $("a.back-link").on("click", fetchProducts)

  })
}

var fetchProducts = function(){
  $("#product-show").hide();
  $("#product-list").show();

  params = {
    brand: $("#brand").val(),
    sport: $("#sport").val(),
    name: $("#name").val(),
  }
  $.getJSON("/api/products", params)
  .then( function(json){
    var productHtmlTemplate = $("#productListTemplate").html();
    var compiled = _.template(productHtmlTemplate)

    var productHtmlNodes = json.products.map( function (product){
      return compiled(product)
    })

    $("#product-list").html( productHtmlNodes )

    $("a[data-role='visitProduct']").on("click", function(event){
      event.preventDefault();
      fetchProduct($(this).data("product-id"))
    })

  })
}

$(document).ready(function() {
  fetchProducts();
  $("#brand").on("change", fetchProducts)
  $("#sport").on("change", fetchProducts)
  $("#name").on("keyup", fetchProducts)






  //
  // // ---- TABS
  // var tabPrefix = 'js-set-tab-';
  //
  // function switchDetailTab(tabName) {
  //   var tabContentClassPrefix = 'js-tab-',
  //       tabContentClass       = '.' + tabContentClassPrefix + tabName;
  //
  //   $('[class*=' + tabContentClassPrefix + ']').addClass('hide');
  //   $(tabContentClass).removeClass('hide');
  //
  //   $('[class*=' + tabPrefix + ']').removeClass('active');
  //   $('.' + tabPrefix + tabName).addClass('active');
  // }
  //
  // $('[class^=' + tabPrefix + ']').click(function(e) {
  //   e.preventDefault();
  //   if ( !$(this).hasClass('active') ) {
  //     var tabName = $(this).attr('class').replace(tabPrefix, '');
  //     switchDetailTab(tabName);
  //   }
  // });
  //
  // switchDetailTab($('[class*=' + tabPrefix + ']').first().attr('class').replace(tabPrefix, ''));
  //
  // // ---- BUY BUTTON
  // $('.js-buy').on('click', function() {
  //   $(this).addClass('active');
  //   $(this).text('Added To Cart!');
  //
  //   var cartCount = parseInt($('.js-cart-count').text());
  //   cartCount += 1;
  //   $('.js-cart-count').text(cartCount);
  //
  //   window.setTimeout(function() {
  //     // $(this) is not available because setTimeout runs in the global scope
  //     $('.js-buy').text('Buy Now!');
  //     $('.js-buy').removeClass('active');
  //   }, 500);
  // });

});
