$(document).ready(function () {
  var dataPage = $('.dataPage').attr('id');

  $('#Slides_prev').click(function () {
    let $slides = $(this).closest('.Slides');
    let index = parseInt($slides.attr('active-item'));

    if (index > 1) {
      console.log("slide to",index-1);

      $slides.attr('active-item', index - 1);
      $('.Slides-indicator a.active').removeClass('active');
      $($('.Slides-indicator a')[index - 2]).addClass('active');

      $('#Receive_btn').attr('data-gtm-event', dataPage + (index - 1) + '-N');
      $('#Receive_btn').data('gtm-event', dataPage + (index - 1) + '-N');
      $('#Receive_mobile_btn').attr('data-gtm-event', dataPage + (index - 1) + '-N');
      $('#Receive_mobile_btn').data('gtm-event', dataPage + (index - 1) + '-N');
      gtmClickTrack('view-'+dataPage+(index-1))
    }
    showReadMore();//閱讀更多顯示
  });

  $('#Slides_next').click(function () {
    let $slides = $(this).closest('.Slides');
    let index = parseInt($slides.attr('active-item'));
    let slidesItems = document.getElementsByClassName('Slides-item');

    if (index < slidesItems.length) {
      console.log("slide to",index+1);

      $slides.attr('active-item', index + 1);
      $('.Slides-indicator a.active').removeClass('active');
      $($('.Slides-indicator a')[index]).addClass('active');

      $('#Receive_btn').attr('data-gtm-event', dataPage + (index + 1) + '-N');
      $('#Receive_btn').data('gtm-event', dataPage + (index + 1) + '-N');
      $('#Receive_mobile_btn').attr('data-gtm-event', dataPage + (index + 1) + '-N');
      $('#Receive_mobile_btn').data('gtm-event', dataPage + (index + 1) + '-N');
      gtmClickTrack('view-'+dataPage+(index+1))
    }
    showReadMore();//閱讀更多顯示
  });

  checkHash();

  $(window).on('hashchange', function () {
    console.log('hashchange', window.location.hash);
    checkHash();
  });

  $('.Animation_defaultShow').each(function (){
    $(this).addClass('Animation_endShowing');
  }); 

  $(window).scroll( function(){
      sectionShow();
  });

  $('[data-gtm-event]').on('click', function () {
    var eventName = $(this).data('gtm-event');
 
    if (eventName) {
      gtmClickTrack(eventName);
    }
  });

  $(window).scroll();
});

function sectionShow() {
  $('.Animation_scrollShow').each(function(i){
      let bottomOfObject = $(this).offset().top + 40;
      let bottomOfWindow = $(window).scrollTop() + $(window).height();
      
      if( bottomOfWindow > bottomOfObject ){
        $(this).addClass('Animation_endShowing');
      }
  });
  
  $('.Animation_scrollShake').each(function(i){
      let bottomOfObject = $(this).offset().top + 40;
      let bottomOfWindow = $(window).scrollTop() + $(window).height();
      
      if( bottomOfWindow > bottomOfObject ){
        $(this).addClass('Animation_endShaking');
      }
  });
}

function changeSlide(element, index) {
  let $slides = $(element).closest('.Slides');

  $('.Slides-indicator a.active').removeClass('active');

  if (index <= 4 && index >= 1) {
    $slides.attr('active-item', index);
    $($('.Slides-indicator a')[index - 1]).addClass('active');
    $('#Receive_btn').attr('data-gtm-event', 'tips' + index + '-N');
    $('#Receive_btn').data('gtm-event', 'tips' + index + '-N');
  }
  showReadMore();//閱讀更多顯示
}

function toggleDialog() {
  if (!$('#Dialog-1').hasClass('d-none')) {
    $('#Dialog-1').addClass('d-none');
  } else {
    $('#Dialog-1').removeClass('d-none');
  }
}

function headToSection(section) {
  let sectionName = section;

  $(document).scrollTop($(sectionName).offset().top);
}

function toggleThanksDialog () {
    if($('#Dialog-2').hasClass('d-none')) {
        $('#Dialog-1').addClass('d-none');
        $('#Dialog-2').removeClass('d-none');
    } else {
      $('form').trigger('reset')
        $('#Dialog-2').addClass('d-none');
    }
}

function gtmClickTrack(event) {
  console.log('gtmClickTrack', event);
  try {
    dataLayer.push({ event: event });
  } catch (error) {}
  showReadMore();//閱讀更多顯示
}

function checkHash() {
  if (window.location.hash) {
    var hash = window.location.hash.substring(1);
    var dataPage = $('.dataPage').attr('id');

    console.log('checkHash',hash);
    if (hash && hash.indexOf(dataPage) >= 0) {
      var index = Number(hash.substr(4,1));

      if (!isNaN(index)) {
        changeSlide($('.Slides-indicator'), index);
      }

      var ele = document.getElementById(dataPage);
      if (ele) {
        // ele.scrollIntoView();
        window.scrollTo({
          top: ele.offsetTop,
          behavior: "smooth"
        });
      }
    }
  }
  showReadMore();//閱讀更多顯示
}

function toggleFooter () {
  if($('#toggleContent').hasClass('d-none')) {
    $('#toggleContent').removeClass('d-none');
    $('#footerToggler').css('transform', 'rotate(180deg)')
  } else {
    $('#toggleContent').addClass('d-none');
    $('#footerToggler').css('transform', 'rotate(0deg)')
  }
}

//展開閱讀更多 
function openMore(){
 let activeItem = $(document.getElementsByClassName('Slides')).attr('active-item');
 let slidesItem = document.getElementsByClassName('Slides-item');
 let readMoreBtn = document.getElementsByClassName('read-more');
 let storyBodyHeight = slidesItem[activeItem-1].offsetHeight;
 let storiesBox = document.getElementById('stories');
 $(storiesBox).attr('style' , 'min-height: calc('+ storyBodyHeight +'px + 120px);');
 $(readMoreBtn).hide();
}
//點擊左右收合
function closeMore(){
 let storiesBox = document.getElementById('stories');
 $(storiesBox).attr('style' , '');
}
//閱讀更多顯示
function showReadMore(){
  var dataPage = $('.dataPage').attr('id');
  if(dataPage == 'product'){
  }else{
    closeMore()
    let activeItem = $(document.getElementsByClassName('Slides')).attr('active-item');
    let slidesItem = document.getElementsByClassName('Slides-item');
    let storyBodyHeight = slidesItem[activeItem-1].offsetHeight;
    let readMoreBtn = document.getElementsByClassName('read-more');
    let windowHeight = $(window).height()-54-40;
    console.log(storyBodyHeight,windowHeight);
    if(storyBodyHeight > windowHeight){
      $(readMoreBtn).show();
    }else{
      $(readMoreBtn).hide();
    }

  }
}