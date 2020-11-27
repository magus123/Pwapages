$(document).ready(function(){
    var _url = "https://my-json-server.typicode.com/magus123/pwaapi/products"

    var dataResults = ''
    var catResults = ''
    var categories = []

    $.get(_url, function(data){

        $.each(data, function(key, items)
        {
            _cat = items.category;


            dataResults += "<div>"
                        + "<h3>" + items.name + "</h3>"
                        + "<p>" + items.category +"</p>"
                        "<div>";

            if($.inArray(_cat, categories) == -1){
                categories.push(_cat)
                catResults += "<option value'"+ _cat +"'>" + _cat + "</option>"
            }

        })
    //  $('#product').html(dataResults)
     $('#cat_select').html("<option value='all'>semua</option>" + catResults)
    })

    //fungsi filter
    $("#cat_select").on('change', function(){
        updateProduct($(this).val())
    })

    function updateProduct(cat){
        
        var dataResults = ''
        var _newurl = _url

        if(cat != 'all')
        _newurl = _url + "?category=" + cat

        $.get(_newurl, function (data){

            $.each(data, function (key, items){
                _cat = items.category

                dataResults += "<div>"
                            + "<h3>" + items.name + "</h3>"
                            + "<p>" + _cat + "</p>"
                            "<div>";
        }) 

        $('#product').html(dataResults)

      })
    }
}) //end document jquery

//tespiehighchart
$(function () {
  $('#container').highcharts({
      chart: {
          type: 'pie'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      
      plotOptions: {
          series: {
              cursor: 'pointer',
              point: {
                  events: {
                      click: function() {
                          location.href = this.options.url;
                      }
                  }
              }
          }
      },
      
      series: [{
          data: [{
              y: 29.9,
              url: 'http://bing.com/search?q=foo'
          }, {
              y: 100.5,
              url: 'http://bing.com/search?q=bar'
          }, {
              y: 106.4,
              url: 'http://bing.com/search?q=foo+bar'
          }]        
      }]
  });
});

//PWAServiceWorker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
