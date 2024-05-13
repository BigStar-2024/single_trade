$(document).ready(function(){


  $('.toggler input').on("change" ,function(){
    $("body *").addClass("no__transition")
    if ($(this).prop('checked') == true) {
      $('body').removeClass('light')
      $('.toggler>p').text("Dark  Mode")
      setTimeout(function(){
        $('body *').removeClass("no__transition");
      }, 200);
      if ($('#tradingview_6fd01').length) {
        new TradingView.widget({
               "width" : "100%",
               "height" :"800px",
              "symbol": "BTCUSDT",
              "interval": "30",
              "timezone": "Etc/UTC",
              "theme": "Dark",
              "style": "1",
              "locale": "en",
              "toolbar_bg": "rgba(255,255,255,.0)",
              "enable_publishing": true,
              "allow_symbol_change": true,
              "withdateranges": true,
        "hide_side_toolbar": false,
          "allow_symbol_change": true,
              "container_id": "tradingview_6fd01"
          });
      }
      $("header>.logo>a>img:nth-child(1)").attr("src" , "img/logo.svg");
    } else {
      $("body *").addClass("no__transition");
      $('body').addClass("light");
      $('.toggler>p').text("Light Mode")
      setTimeout(function(){
        $('body *').removeClass("no__transition");
      }, 200);
      $("header>.logo>a>img:nth-child(1)").attr("src" , "img/logolight.svg");
      if ($('#tradingview_6fd01').length) {
        new TradingView.widget({
               "width" : "100%",
               "height" :"800px",
              "symbol": "BTCUSDT",
              "interval": "30",
              "timezone": "Etc/UTC",
              "theme": "Light",
              "style": "1",
              "locale": "en",
              "toolbar_bg": "rgba(255,255,255,.0)",
              "enable_publishing": true,
              "allow_symbol_change": true,
              "withdateranges": true,
        "hide_side_toolbar": false,
          "allow_symbol_change": true,
              "container_id": "tradingview_6fd01"
          });
      }
    }
  });

  $('body').on("click" , ".connected__info>.el>p>span" ,function(e){
    if ($(this).closest("p").hasClass("active")) {
      $(this).closest("p").removeClass("active");
      $(this).closest("p").html("<span><svg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'>\
            <path d='M1.26387 8.71318C1.12769 8.49754 1.05959 8.38972 1.02147 \
            8.22342C0.992842 8.0985 0.992842 7.9015 1.02147 7.77658C1.05959 \
            7.61028 1.12769 7.50246 1.26387 7.28682C2.38928 5.50484 5.73915 1 10.8442 \
             1C15.9492 1 19.299 5.50484 20.4244 7.28682C20.5606 7.50246 20.6287 7.61028 20.6668 7.77658C20.6955 7.9015 20.6955 8.0985 20.6668 8.22342C20.6287 8.38972 20.5606 8.49754 20.4244 8.71318C19.299 10.4952 15.9492 15 10.8442 \
             15C5.73915 15 2.38928 10.4952 1.26387 8.71318Z' stroke='#EDEDED' stroke-width='1.33' stroke-linecap='round' stroke-linejoin='round'/>\
            <path d='M10.8442 11C12.501 11 13.8442 9.65685 13.8442 8C13.8442 6.34315 12.501 5 10.8442 5C9.1873 5 7.84415 6.34315 7.84415 8C7.84415  9.65685 9.1873 11 10.8442 11Z' stroke='#EDEDED' stroke-width='1.33' stroke-linecap='round' stroke-linejoin='round'/>\
            </svg>\
    </span>"+ $(this).closest("p").attr("data-hidden") +"");
    } else {
      $(this).closest("p").addClass('active');
      $(this).closest("p").attr("data-hidden" , $(this).closest("p").text().trim());
      let text = $(this).closest("p").attr("data-hidden");
      let totalLength = text.length;
      let stars = "";
      for (var i = 0; i < totalLength; i++){
        stars = stars + "*";
      }
      $(this).closest("p").html("<span><svg width='22' height='21' viewBox='0 0 22 21' fill='none' xmlns='http://www.w3.org/2000/svg'>\
    <path d='M9.58633 3.6929C9.99274 3.63282 10.412 3.60059 10.8438 3.60059C15.9488 3.60059 19.2987 8.10543 20.4241 9.88741C20.5603 10.1031\
     20.6284 10.2109 20.6665 10.3773C20.6951 10.5022 20.6951 10.6992 20.6665 10.8242C20.6283 10.9905 20.5597 11.099 20.4226 11.3162C20.1227 11.7907\
      19.6656 12.4577 19.0599 13.181M5.56771 5.31562C3.40563 6.78229 1.93783 8.81996 1.26449 9.88587C1.12767 10.1025 1.05926 10.2108 1.02112 10.3771C0.992481\
       10.502 0.992469 10.699 1.0211 10.8239C1.05921 10.9903 1.12731 11.0981 1.26352 11.3138C2.38893 13.0957 5.7388 17.6006 10.8438 17.6006C12.9022 17.6006 14.6753\
        16.8682 16.1322 15.8772M1.8438 1.60059L19.8438 19.6006M8.72248 8.47927C8.17959 9.02216 7.8438 9.77216 7.8438 10.6006C7.8438 12.2574 9.18695 13.6006 10.8438 \
        13.6006C11.6722 13.6006 12.4222 13.2648 12.9651 12.7219' stroke='#EDEDED' stroke-width='1.33' stroke-linecap='round' stroke-linejoin='round'/>\
    </svg>\
    </span>"+ stars +"")
    }
  });

  $('.account__wrapper form .main__settings .profile .profile__picture>h2>svg').on('click', function(e){
    $(this).closest('h2').find("span").focus();
  });

	$("tr").on('click' ,function(e){
		var $target = $(e.target);
		  if(!$target.closest('.category__switcher').length) {
		  	if ($(this).closest('tr').attr("data-link") != undefined) {
		  		window.open($(this).closest('tr').attr("data-link"), '_blank')
		  	}
		  }  
	});


	$('.category__switcher>a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("opened")) {
			$(this).removeClass('opened');
			$('.category__dropdown').fadeOut(200);
		} else {
			$('.category__switcher>a').removeClass('opened');
			$(this).closest('.table__box').scrollLeft(2000);
			$('.category__dropdown').css("display" ,"none");
			$(this).addClass('opened');
			$('.category__dropdown').css("width" ,$(this).outerWidth());
			$('.category__dropdown').fadeIn(300);
			$(".category__dropdown").css("left" , $(this).offset().left);
			$(".category__dropdown").css("top" , $(this).offset().top + 37);
		}
	});

	$('.category__dropdown ul li a').on("click" ,function(e){
		e.preventDefault();
		$('.category__switcher>a.opened>span').text($(this).text());
		$('.category__switcher>a').removeClass('opened');
		$(this).closest('.category__dropdown').fadeOut(200);
	});


	if ($('.entry__time').length) {
		$('.entry__time').each(function(index,elem){
			let date;
			let dateString = $(elem).find('p').text().replace(/,/g, '').replace('/','-').replace('/','-').replace('/','-');
			    dateTimeParts = dateString.split(' '),
			    timeParts = dateTimeParts[1].split(':'),
			    dateParts = dateTimeParts[0].split('-');

			date = new Date(dateParts[2], parseInt(dateParts[1], 10) - 1, dateParts[0], timeParts[0], timeParts[1]);

			$(elem).closest("td").attr('data-date' , date.getTime())
		});
	}

	function sortTable(e,variant,el,table){
  e.preventDefault();
  if (!$(table).find("tr th:nth-child("+ (+el + 1)+")").hasClass("desc") && !$(table).find("tr th:nth-child("+(+el + 1) +")").hasClass("asc")) {
    $(table).find(".asc").removeClass('asc');
    $(table).find('.desc').removeClass('desc');
    $(table).find("tr  th:nth-child("+ (+el + 1) +")").addClass('asc');
      var rows = $(table).find("tr").get();
      rows.shift();

      rows.sort(function(a, b) {
        if (variant == "text") {
          if ($(a).children('td').eq(el).find('p').text().length != 0 && $(b).children('td').eq(el).find('p').text().length != 0) {
             var A = $(a).children('td').eq(el).find('p').text().toUpperCase();
            var B = $(b).children('td').eq(el).find('p').text().toUpperCase();
          } else if ($(a).children('td').eq(el).find('a').text().length != 0 && $(b).children('td').eq(el).find('a').text().length != 0){
            var A = $(a).children('td').eq(el).find('a').text().toUpperCase();
            var B = $(b).children('td').eq(el).find('a').text().toUpperCase();
          }
        }
        if (variant == "money") {
          var A = +$(a).children('td').eq(el).find('>p').text().substring(1).replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('>p').text().substring(1).replace(/,/g , "").toUpperCase();
        }
        if (variant == "duration") {
        	let numberA;
        	let numberB;
        	// Hours
        	if (+$(a).children('td').eq(el).find('>p').text().toUpperCase().indexOf('H') !== -1) {
        		numberA = +$(a).children('td').eq(el).find('>p').text().slice(0,-2);
        		numberA = numberA*60;
        	}
        	// MINS
        	if (+$(a).children('td').eq(el).find('>p').text().toUpperCase().indexOf('MIN') !== -1) {
        		numberA = +$(a).children('td').eq(el).find('>p').text().slice(0,-4);
        	}
        	// DAYS
        	if (+$(a).children('td').eq(el).find('>p').text().toUpperCase().indexOf('DAYS') !== -1) {
        		numberA = +$(a).children('td').eq(el).find('>p').text().slice(0,-5);
        		numberA = numberA*24*60
        	}

        	if (+$(b).children('td').eq(el).find('>p').text().toUpperCase().indexOf('H') !== -1) {
        		numberB = +$(b).children('td').eq(el).find('>p').text().slice(0,-2);
        		numberB = numberB*60;
        	}
        	// MINS
        	if (+$(b).children('td').eq(el).find('>p').text().toUpperCase().indexOf('MIN') !== -1) {
        		numberB = +$(b).children('td').eq(el).find('>p').text().slice(0,-4);
        	}
        	// DAYS
        	if (+$(b).children('td').eq(el).find('>p').text().toUpperCase().indexOf('DAYS') !== -1) {
        		numberB = +$(b).children('td').eq(el).find('>p').text().slice(0,-5);
        		numberB = numberB*24*60;
        	}
        	var A = numberA;
	        var B = numberB;
        }
        if (variant == "pnl") {
        	let temporaryA;
        	let temporaryB;
        	if ($(a).children('td').eq(el).find(".pnl").hasClass('positive')) {
        		temporaryA = +$(a).children('td').eq(el).find('.pnl>p').text().substring(1).replace(/,/g , "").toUpperCase();
        	}
        	if ($(b).children('td').eq(el).find(".pnl").hasClass('positive')) {
        		temporaryB = +$(b).children('td').eq(el).find('.pnl>p').text().substring(1).replace(/,/g , "").toUpperCase();
        	} 

        	if ($(a).children('td').eq(el).find(".pnl").hasClass('negative')) {
        		temporaryA = "-" + +$(a).children('td').eq(el).find('.pnl>p').text().substring(2).replace(/,/g , "").toUpperCase();
        	}
        	if ($(b).children('td').eq(el).find(".pnl").hasClass('negative')) {
        		temporaryB = "-" + +$(b).children('td').eq(el).find('.pnl>p').text().substring(2).replace(/,/g , "").toUpperCase()
        	} 
          var A = temporaryA;
          var B = temporaryB;
        }

        if (variant == "funding") {
        	var A = +$(a).children('td').eq(el).find('>p').text().replace("$", "").replace(/,/g , "").toUpperCase();
	          var B = +$(b).children('td').eq(el).find('>p').text().replace("$", "").replace(/,/g , "").toUpperCase();
        }
        
        if (variant == "value") {
          var A = +$(a).children('td').eq(el).find('>p').text().slice(0,-4).replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('>p').text().slice(0,-4).replace(/,/g , "").toUpperCase();
        }
        if (variant == "number") {
          var A = +$(a).children('td').eq(el).find('>p').text().replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('>p').text().replace(/,/g , "").toUpperCase();
        }
        if (variant == "entry") {
          var A = +$(a).children('td').eq(el).find('.entry>p').text().replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('.entry>p').text().replace(/,/g , "").toUpperCase();
        }
        if (variant == "percent") {
          var A = +$(a).children('td').eq(el).find("p").text().slice(0,-1).toUpperCase();
          var B = +$(b).children('td').eq(el).find("p").text().slice(0,-1).toUpperCase();
        }
         if (variant == "date") {
          var A = +$(a).children('td').eq(el).attr("data-date").toUpperCase();
          var B = +$(b).children('td').eq(el).attr("data-date").toUpperCase();
        }
        if (variant == "category") {
          var A = $(a).children('td').eq(el).find('.category__switcher>a>span').text().toUpperCase();
          var B = $(b).children('td').eq(el).find('.category__switcher>a>span').text().toUpperCase();
        }
      if(A < B) {
        return -1;
      }
      if(A > B) {
         return 1;
      }
        return 0;
      });
      $.each(rows, function(index, row) {
        $(table).children('tbody').append(row);
      });
  } else if ($(table).find("tr th:nth-child("+ (+el + 1)+")").hasClass("asc")){
    $(table).find('.asc').removeClass("asc");
    $(table).find("tr  th:nth-child("+ (+el + 1) +")").addClass('desc');
      var rows = $(table).find("tr").get();
      rows.shift();
      rows.sort(function(a, b) {
      	if (variant == "duration") {
        	let numberA;
        	let numberB;
        	// Hours
        	if (+$(a).children('td').eq(el).find('>p').text().toUpperCase().indexOf('H') !== -1) {
        		numberA = +$(a).children('td').eq(el).find('>p').text().slice(0,-2);
        		numberA = numberA*60;
        	}
        	// MINS
        	if (+$(a).children('td').eq(el).find('>p').text().toUpperCase().indexOf('MIN') !== -1) {
        		numberA = +$(a).children('td').eq(el).find('>p').text().slice(0,-4);
        	}
        	// DAYS
        	if (+$(a).children('td').eq(el).find('>p').text().toUpperCase().indexOf('DAYS') !== -1) {
        		numberA = +$(a).children('td').eq(el).find('>p').text().slice(0,-5);
        		numberA = numberA*24*60
        	}

        	if (+$(b).children('td').eq(el).find('>p').text().toUpperCase().indexOf('H') !== -1) {
        		numberB = +$(b).children('td').eq(el).find('>p').text().slice(0,-2);
        		numberB = numberB*60;
        	}
        	// MINS
        	if (+$(b).children('td').eq(el).find('>p').text().toUpperCase().indexOf('MIN') !== -1) {
        		numberB = +$(b).children('td').eq(el).find('>p').text().slice(0,-4);
        	}
        	// DAYS
        	if (+$(b).children('td').eq(el).find('>p').text().toUpperCase().indexOf('DAYS') !== -1) {
        		numberB = +$(b).children('td').eq(el).find('>p').text().slice(0,-5);
        		numberB = numberB*24*60;
        	}
        	var A = numberA;
	        var B = numberB;
        }
        if (variant == "text") {
          if ($(a).children('td').eq(el).find('p').text().length != 0 && $(b).children('td').eq(el).find('p').text().length != 0) {
             var A = $(a).children('td').eq(el).find('p').text().toUpperCase();
            var B = $(b).children('td').eq(el).find('p').text().toUpperCase();
          } else if ($(a).children('td').eq(el).find('a').text().length != 0 && $(b).children('td').eq(el).find('a').text().length != 0){
            var A = $(a).children('td').eq(el).find('a').text().toUpperCase();
            var B = $(b).children('td').eq(el).find('a').text().toUpperCase();
          }
        }


        if (variant == "category") {
          var A = $(a).children('td').eq(el).find('.category__switcher>a>span').text().toUpperCase();
          var B = $(b).children('td').eq(el).find('.category__switcher>a>span').text().toUpperCase();
        }
        if (variant == "funding") {
        	var A = +$(a).children('td').eq(el).find('>p').text().replace("$", "").replace(/,/g , "").toUpperCase();
	          var B = +$(b).children('td').eq(el).find('>p').text().replace("$", "").replace(/,/g , "").toUpperCase();
        }
        if (variant == "pnl") {
        	let temporaryA;
        	let temporaryB;
        	if ($(a).children('td').eq(el).find(".pnl").hasClass('positive')) {
        		temporaryA = +$(a).children('td').eq(el).find('.pnl>p').text().substring(1).replace(/,/g , "").toUpperCase();
        		console.log(temporaryA);
        	}
        	if ($(b).children('td').eq(el).find(".pnl").hasClass('positive')) {
        		temporaryB = +$(b).children('td').eq(el).find('.pnl>p').text().substring(1).replace(/,/g , "").toUpperCase();
        	} 

        	if ($(a).children('td').eq(el).find(".pnl").hasClass('negative')) {
        		temporaryA = "-" + +$(a).children('td').eq(el).find('.pnl>p').text().substring(2).replace(/,/g , "").toUpperCase();
        	}
        	if ($(b).children('td').eq(el).find(".pnl").hasClass('negative')) {
        		temporaryB = "-" + +$(b).children('td').eq(el).find('.pnl>p').text().substring(2).replace(/,/g , "").toUpperCase()
        	}  
          var A = temporaryA;
          var B = temporaryB;
        }
        if (variant == "money") {
          var A = +$(a).children('td').eq(el).find('>p').text().substring(1).replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('>p').text().substring(1).replace(/,/g , "").toUpperCase();
        }
        if (variant == "number") {
          var A = +$(a).children('td').eq(el).find('>p').text().replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('>p').text().replace(/,/g , "").toUpperCase();
        }
        if (variant == "percent") {
          var A = +$(a).children('td').eq(el).find("p").text().slice(0,-1).toUpperCase();
          var B = +$(b).children('td').eq(el).find("p").text().slice(0,-1).toUpperCase();
        }
        if (variant == "entry") {
          var A = +$(a).children('td').eq(el).find('.entry>p').text().replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('.entry>p').text().replace(/,/g , "").toUpperCase();
        }
        if (variant == "date") {
          var A = +$(a).children('td').eq(el).attr("data-date").toUpperCase();
          var B = +$(b).children('td').eq(el).attr("data-date").toUpperCase();
        }
        if (variant == "value") {
          var A = +$(a).children('td').eq(el).find('>p').text().slice(0,-4).replace(/,/g , "").toUpperCase();
          var B = +$(b).children('td').eq(el).find('>p').text().slice(0,-4).replace(/,/g , "").toUpperCase();
        }
      if(A < B) {
        return 1;
      }
      if(A > B) {
         return -1;
      }
        return 0;
      });
      $.each(rows, function(index, row) {
        $(table).children('tbody').append(row);
      });
    
  } else if ($(table).find("tr th:nth-child("+ (+el + 1)+")").hasClass("desc")){
    $(table).find('.desc').removeClass("desc");
    var rows = $(table).find("tr").get();
    rows.sort(function(a, b) {
        var A = +$(a).attr('data-index');
        var B = +$(b).attr('data-index');
      if(+A < +B) {
        return -1;
      }
      if(+A > +B) {
         return 1;
      }
      });
      $.each(rows, function(index, row) {
        $(table).children('tbody').append(row);
      });
  }


  
}

	window.sortTable = sortTable;



	if ($('.range__picker').length) {
		$('.range__picker').daterangepicker({
	    "linkedCalendars": false,
	    "alwaysShowCalendars": true,
	    "startDate": "04/13/2024",
	    "endDate": "04/19/2024"
	}, function(start, end, label) {
	  console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
	});
	}

	if ($('.circle').length) {
		$('.circle').each(function(index,elem){
			$(elem).circleProgress({
			    value: $(elem).attr("data-value"),
			    size: 80,
			    startAngle:4.7,
			    animation:false,
			    thickness:11,
			    emptyFill:$(elem).attr("data-background"),
			    fill:$(elem).attr("data-maincolor")
			  });
		})
	}



	$('.regular__dropdown .dropdown ul li a').on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("current")) {
			$(this).removeClass('current');
		} else {
			$(this).addClass("current");
		}
		if ($(this).closest('ul').find('.current').length == 5) {
			$(this).closest('ul').find("li").each(function(index,elem){
				if ($(elem).find('.current').length == 0) {
					$(elem).addClass('disabled');
				}
			});
		} else {
			$(this).closest('ul').find("li").removeClass('disabled');
		}
		$(this).closest('.regular__dropdown').find(".tags").remove();
		if ($(this).closest('ul').find('.current').length != 0) {
			$(this).closest('.regular__dropdown').find(">a").addClass('filled');
			$(this).closest('.regular__dropdown').find(">a").prepend("<div class='tags'></div>");
			let tagsParent = $(this).closest('.regular__dropdown').find(".tags");
			$(this).closest('ul').find('.current').each(function(index,elem){
				$(tagsParent).append("<div class='tag' data-id="+ $(elem).attr("data-id") +">" + $(elem).text()  + "<span class='remove__tag'><svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>\
									<path d='M3.96875 4.15576L10.8083 10.9953' stroke='white' stroke-linecap='round' stroke-linejoin='round'/>\
									<path d='M10.8086 4.15576L3.96905 10.9953' stroke='white' stroke-linecap='round' stroke-linejoin='round'/>\
									</svg>\
									</span></div>");
			});
		} else {
			$(this).closest('.regular__dropdown').find(">a").removeClass('filled');			
		}
	});
	$('.regular__dropdown>a').on("click" ,function(e){
		e.preventDefault();
		 var $target = $(e.target);
		  if(!$target.closest('.remove__tag').length ) {
			if ($(this).hasClass('opened')) {
				$(this).removeClass('opened');
				$(this).closest('.regular__dropdown').find('.dropdown').fadeOut(200);
			} else {
				$('.regular__dropdown>a').removeClass('opened');
				$('.regular__dropdown .dropdown').css('display' ,"none");
				$(this).addClass("opened");
				$(this).closest('.regular__dropdown').find('.dropdown').fadeIn(200);
			}
		  }
	});


	$('body').on('click' , ".regular__dropdown .remove__tag" ,function(e){
		
		$(this).closest('.regular__dropdown').find('.dropdown  ul li a[data-id='+ $(this).closest('.tag').attr("data-id") +']').removeClass('current');
		if ($(this).closest('.tags').find(".tag").length == 1) {
			$(this).closest('.regular__dropdown').find(">a").removeClass("filled");
			$(this).closest('.regular__dropdown').find(".tags").remove();
		}
		$(this).closest('.tag').remove();
	});

	$(".note__wrapper>textarea").on("input" ,function(){
		if ($(this).val().length != 0) {
			$(this).closest('.note__wrapper').find('.save__note').css("pointer-events" ,"initial");
		}
	});
	$('.note__wrapper .delete__note--block>.delete__note').on('click' ,function(e){
		e.preventDefault();
		$(this).closest('.delete__note--block').css("display" , "none");
		$(this).closest('.note__wrapper').find("textarea").val("");
		$(this).closest('.note__wrapper').find("textarea").removeAttr("readonly" ,"none");
		$(this).closest('.note__wrapper').find('.save__note').fadeIn(300);
    $(this).closest('.note__wrapper').find("textarea").removeClass("filled");
	});
	$('.note__wrapper .btn>a.save__note').on("click" ,function(e){
		e.preventDefault();
		$(this).closest('.note__wrapper').find('.save__note').css("display" ,'none');
		$(this).closest('.note__wrapper').find("textarea").attr("readonly" , "true");
    $(this).closest('.note__wrapper').find("textarea").addClass("filled");
		$(this).closest('.note__wrapper').find(".delete__note--block").fadeIn(300);
	});

	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if(!$target.closest('.dropdown__wrap').length) {
	  	$('.dropdown__wrap>a').removeClass('opened');
	  	$('.dropdown__wrap .box').fadeOut(200);
	  }
	  if(!$target.closest('.category__switcher').length && !$target.closest('.category__dropdown').length) {
	  	$('.category__dropdown').fadeOut(200);
	  	$('.category__switcher>a').removeClass('opened');
	  } 
	  if(!$target.closest('.regular__dropdown').length && !$target.closest('.remove__tag').length) {
	  	$('.regular__dropdown>a').removeClass('opened');
	  	$('.regular__dropdown .dropdown').fadeOut(200);
	  }        
	});

	$('.dropdown__wrap .box ul li a').on("click" ,function(e){
		$(this).closest('.dropdown__wrap').find(">a>span").text($(this).text());
		$(this).closest('.dropdown__wrap').find(">a").removeClass('opened');
		$(this).closest(".box").fadeOut(200);
	});

	$('.dropdown__wrap>a').on("click" ,function(e){
		e.preventDefault();
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$(this).closest('.dropdown__wrap').find('.box').fadeOut(200);
		} else {
			$('.dropdown__wrap>a').removeClass('opened');
			$('.dropdown__wrap .box').fadeOut(200);
			$(this).addClass("opened");
			$(this).closest('.dropdown__wrap').find('.box').fadeIn(200);
		}
	});


	$('.profile__picture>a').on('click' ,function(e){
		e.preventDefault();
		$(this).closest('.profile__picture').find("input[type='file']").click();
	});
	$('.profile__picture input[type="file"]').on("change" ,function(e){
		file = this.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onload = function (event) {
                $(".profile__picture>a>img")
                    .attr("src", event.target.result);
            };
            reader.readAsDataURL(file);
        }
	});

	$(".side__menu .menu__button>a").on('click' ,function(e){
		e.preventDefault();
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$('.side__menu').removeClass('active');
		} else {
			$(this).addClass("opened");
			$('.side__menu').addClass("active");
		}
	});

	if ($('.grid__box').length) {
		resizeTrigger();
		$(window).on("resize" ,function(){
			$('.grid__box').each(function(index,elem){
				let topH = 0;
				$(elem).find(".elem .top").css("height" ,"auto");
				$(elem).find(".elem").each(function(ind,el){
					if ($(el).find(".top").outerHeight() > topH) {
						topH = $(el).find(".top").outerHeight();
					}
				});
				$(elem).find(".elem .top").css("height" ,topH + "px");
			});
		});
	}
	function resizeTrigger(){
		$('.grid__box').each(function(index,elem){
			let topH = 0;
			$(elem).find(".elem .top").css("height" ,"auto");
			$(elem).find(".elem").each(function(ind,el){
				if ($(el).find(".top").outerHeight() > topH) {
					topH = $(el).find(".top").outerHeight();
				}
			});
			$(elem).find(".elem .top").css("height" ,topH + "px");
		});
	}



	$('.pricing__wrapper .switcher .price__switcher>span').on('click' ,function(){
		if ($(this).hasClass("monthly")) {
			$('.price__switcher>span').removeClass("current");
			$('.price__switcher>span.monthly').addClass('current');
		}
		if ($(this).hasClass("annually")) {
			$('.price__switcher>span').removeClass("current");
			$('.price__switcher>span.annually').addClass('current');
		}

		if ($('.price__switcher .current').hasClass("monthly")) {
			$('.price__switcher .switch input').prop('checked' ,false);
		}

		if ($('.price__switcher .current').hasClass("annually")) {
			$('.price__switcher .switch input').prop('checked' ,true);
		}
		if ($('.price__switcher .switch input').prop('checked') == true) {
			$('.grid__box').css("display" ,"none");
			$('.grid__box.yearly').css("display" ,"grid");
		}
		if ($('.price__switcher .switch input').prop('checked') == false) {
			$('.grid__box').css("display" ,"none");
			$('.grid__box.monthly').css("display" ,"grid");
		}
		resizeTrigger();
	});

	$('.price__switcher input').on('change' ,function(){
		if ($('.price__switcher .switch input').prop('checked') == true) {
			$('.grid__box').css("display" ,"none");
			$('.grid__box.yearly').css("display" ,"grid");
			$('.price__switcher .annually').addClass('current');
			$('.price__switcher .monthly').removeClass('current');
		}
		if ($('.price__switcher .switch input').prop('checked') == false) {
			$('.grid__box').css("display" ,"none");
			$('.grid__box.monthly').css("display" ,"grid");
			$('.price__switcher .annually').removeClass('current');
			$('.price__switcher .monthly').addClass('current');
		}
		resizeTrigger();
	});


	$('.connected__icon>span').on("mouseenter" ,function(){
		$('.connected__info').fadeIn(200);
	});
	$('.connected__icon').on("mouseleave" ,function(){
		if ($(window).width() < 1200) {
			$('.connected__info').fadeOut(200);
		}
	});


	$('.register__form .group__input>input').on("input" ,function(e){
		e.preventDefault();
		let errors = 0;
		if ($(this).closest('.fields').find('.username__register>input').val().length == 0) {
			errors++;
		}
		if ($(this).closest('.fields').find('.email__register>input').val().length == 0) {
			errors++;
		}
		if ($(this).closest('.fields').find('.password__register>input').val().length == 0) {
			errors++;
		}
		if (errors == 0) {
			$('.register__form .submit button').removeClass("disabled");
		} else {
			$('.register__form .submit button').addClass("disabled");			
		}
	});

	$('.group__input.float>input').on("focus" ,function(){
		$(this).closest('.group__input').addClass("focused");
	});
	$('.group__input.float>input').on("blur" ,function(e){
		if ($(this).val().length == 0) {
			$(this).closest(".group__input").removeClass("focused");
		} else {
			$(this).closest(".group__input").addClass("focused");
		}
	});

	$(".username__email>input").on("input" ,function(){
		if ($(this).closest('.reset__pass--email').length) {
			if ($(this).val().length > 1) {
				$('.submit>button').removeClass("disabled");
			} else {
				$('.submit>button').addClass("disabled");			
			}
		}
		if ($(this).closest('.login__form').length) {
			if ($(this).val().length > 1 && $('.login__form .pass>input').val().length > 1) {
				$('.login__form .submit>button').removeClass("disabled");
			}  else {
				$('.login__form .submit>button').addClass("disabled");
			}
		}
	});
	$('.login__form .pass>input').on('input' ,function(){
		if ($(this).val().length > 1 && $('.login__form .username__email>input').val().length > 1) {
				$('.login__form .submit>button').removeClass("disabled");
			}  else {
				$('.login__form .submit>button').addClass("disabled");
			}
	});





	var validateInput = $('input.pass__validate');
    function validateInputs() {
        var password = $('.pass__new').val(),
            conf = $('.pass__confirm').val(),
            all_pass = true;
            
        var uppercase = password.match(/[A-Z]/),
            number = password.match(/[0-9]/);

        if (password.length < 8) {
            $('.password_length').removeClass('complete');
            all_pass = false;
        } else $('.password_length').addClass('complete');

        if (uppercase) $('.password_uppercase').addClass('complete');
        else {
            $('.password_uppercase').removeClass('complete');
            all_pass = false;
        }
        


        if (password == conf && password != '') $('.password_match').addClass('complete');
        else {
            $('.password_match').removeClass('complete')
            all_pass = false;
        }

        if (all_pass == true) {
			$('.reset__pass .submit>button').removeClass("disabled");
		} else {
			$('.reset__pass .submit>button').addClass("disabled");
		}
    }
    validateInput.each(validateInputs).on('keyup', validateInputs);
});