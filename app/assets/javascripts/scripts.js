$(document).ready(function(){
	var color;
	
	Cufon.replace('h1');
	Cufon.replace('h2');
	Cufon.replace('#menu > li' , {
		hover:true,
		hoverables: { li: true },
		ignore: { ul: true },
		textless: { li: true }
	});
	
	Cufon.replace('#menu > li > ul > li >  a' , {
		hover:true
	});
	
	Cufon.replace('#membersMenu  li  a' , {
		hover:true
	});

  $(".all a, .board a, .hr a, .fr a, .pr a, .it a, .dt a, .gt a, .trt a").hover(   
    function(){
      color = $(this).css("color");   
      $(this).css("color","#999999");
  },
    function(){
      $(this).css("color",color);
  });

  $('#menu').find('li').hover(
    function(){
      $(this).find('ul').stop(true, true).show('fast');
    },
    
    function(){
      $(this).find('ul').stop(true, true).fadeOut(300);
    }
  )

  var membersHandler = new MembersHandler();
  $('.all').click(function(){
    membersHandler.showAll();
  });
  $('.fr, .hr, .pr, .it, .dt, .gt, .trt').click(function(){
    membersHandler.showGroup($(this).attr('class'))
  });
});

/********** MEMBERS HANDLER **********/
var MembersHandler = function() {
  var that = this;

  var all = $('.memberhr, .memberfr, .memberpr, .memberit, .memberdt, .membergt, .membertrt, .membernone');
  var hr = $('.memberhr');
  var fr = $('.memberfr');
  var pr = $('.memberpr');
  var it = $('.memberit');
  var dt = $('.memberdt');
  var gt = $('.membergt');
  var trt = $('.membertrt');

  var visible = all;
  var hidden;

  this.showMembers = function(members){
    for(var i=0; i<members.length;i++) {
      $(members[i]).animate({opacity: 1}, 300);
    }
  };

  this.hideMembers = function(members){
    for(var i=0; i<members.length;i++) {
      $(members[i]).animate({opacity: 0.1}, 300);
    }
  };

  this.showAll = function(){
    visible = all;
    that.showMembers(visible);
  };

  this.showGroup = function(name){
    hidden = $(visible).filter($(':not(.member'+ name +')'));
    visible = eval(name);

    that.hideMembers(hidden);
    that.showMembers(visible);    
  }
}
