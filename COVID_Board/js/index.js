$(window).ready(function(){

  // 컨트롤 박스 및 배경 Show 
  function control_hide() {
    $("#control_box").css({
      height:0
    }).removeClass("show");
    $("#shadow").hide();
  }
  // 컨트롤 박스 및 배경 hide
  function control_show() {
    $("#control_box").css({
      height:150
    }).addClass("show");
    $("#shadow").show();
  }

  // 컨트롤 박스 버튼 및 배경 클릭 했을때 효과
  $("#btn_control,#shadow").click(function(){
    if($("#control_box").hasClass("show") == false){
      control_show();
    } else if($("#control_box").hasClass("show") == true){
      control_hide();
    }
  });

  // 예방 방법 page
  // 관련 기관 연락처 초기 상태 : show
  $(".list_item:last-child .arrow").css({
    transform: "translateY(-50%) rotateZ(-180deg)"
  })
  
  // 선택한 list show & hide
  $("#prevention_list > li").each(function(index){
    $(this).attr('data-index',index);
  }).click(function(){
    // 선택한 li indext 번호
    var i = $(this).attr('data-index');
    // 선택한 li의 보여줄 자식요소
    var target = $(".list_item[data-index="+i+"] > :last-child");
    // 선택한 li 화살표 요소
    var target_arrow = $(".list_item[data-index="+i+"] .arrow");
    
    if(target.hasClass('show') ==false){
      // show
      target.slideDown();
      target_arrow.css({
        transform: "translateY(-50%) rotateZ(-180deg)"
      })
      target.addClass('show');
    } else if( target.hasClass('show') ==true){
      // hide
      target.slideUp();
      target.removeClass('show');
      target_arrow.css({
        transform: "translateY(-50%)"
      })
    }
  })
})