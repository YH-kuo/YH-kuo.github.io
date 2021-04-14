// GoTop按鈕時的事件
$(document).ready(function() {
            // Show or hide the sticky footer button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $('.go-top').fadeIn(150);
                } else {
                    $('.go-top').fadeOut(500);
                }
            });

            // Animate the scroll to top
            $('.go-top').click(function(event) {
                event.preventDefault();

                $('html, body').animate({scrollTop: 0}, 500);
            })
        });

// GoTop按鈕時的事件  END
// 收藏履歷浮動按鈕
$(document).ready(function() {
            // Show or hide the sticky footer button
            $(window).scroll(function() {
                if ($(this).scrollTop() > 180) {
                    $('.collection_btn').fadeIn(200);
                } else {
                    $('.collection_btn').fadeOut(300);
                }
            });
        });

// 收藏履歷浮動按鈕  END

$(document).ready(function() {
	// 滾動效果
	// console.log("OK")
	$('.contact').click(function(){
		$('html,body').animate({scrollTop:$('#contact_area').offset().top}, 600);
	});
	$('.go_down a').click(function(){
		$('html,body').animate({scrollTop:$('#link_area').offset().top}, 600);
	});



	// 表單回覆
	$('#submit').on('click', function() {
		// 姓名
		var name = $('#guestName').val() || '未填寫';
		// 類別
		var typ = $('#massgaeType').val() || '未填寫';
		// 信箱
		var mail = $('#guestMail').val() || '未填寫';
		// 內容
		var txt = $('#massgaeText').val() || '未填寫';
		// post
		var data = {
		  'entry.1654167756': name,
		  'entry.1735050875': typ,
		  'entry.150237475': mail,
		  'entry.430099248': txt
		};
		$.ajax({
		  type: 'POST',
		  url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3tA5LzT8VxTtIFFj9ED7TsfLy2m8tOh5c-e0f0V6onP95Qg/formResponse',
		  data: data,
		  contentType: 'application/json',
		  dataType: 'jsonp',
		  complete: function() {
		    alert('您填寫的資料已送出！感謝您！');
		  	$("input[type=reset]").trigger("click");//送出表單後清空表單
		  }
		});
	});

	//瀑布流套件 - masonry


});

// external js: isotope.pkgd.js


$(window).load( function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $grid.isotope({ filter: filterValue });
  });

  // bind sort button click
  $('#sorts').on( 'click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $grid.isotope({ sortBy: sortByValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


});