
//左侧栏的点击事件,主要是用来保证导航栏标签为二级
function traUrl(Turl,obj)
        	{
        		
        		$("#main", window.parent.document).attr("src",Turl);

        		var buttonName=$(obj).text();
        		var panelTitle=$(obj).parents(".panel-collapse").prev().find('.panel-title').text();
				
        		$("#lead", window.parent.document).contents().find("#firstA").text(panelTitle);
        		$("#lead", window.parent.document).contents().find("#secondA").text(buttonName);
        		$("#lead", window.parent.document).contents().find("#secondA").attr("data-url",Turl);

        		$(document).ready(function() {
				var kidNum = $("#lead", window.parent.document).contents().find("#ul1").children().length;
				if(kidNum == 3) {
					$("#lead", window.parent.document).contents().find("#thirLi").remove();
				}
				});
        	}
 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 			//第三级菜单跳转按钮的点击事件：主要是用来添加导航栏的三级标签
 			//在需要跳转的三级子菜单按钮上添加“newUrlBtn”类名，和属性data-urlName="新增"（双引号中间填写导航栏标签的名字）
        	$(document).ready(function() {

        		
        		//当main中的页面加载完成之后执行
        		$("#main", window.parent.document).load(function(){   
        		    newButtonClick();
	});
        		function newButtonClick()
        		{
        		    var mainContents = $("#main", window.parent.document).contents();
        		    mainContents.find(".newUrlBtn").click(function () {
        		        var kidNum = $("#lead", window.parent.document).contents().find("#ul1").children().length;
        		        if (kidNum == 2) {
        		            var urlName = $(this).attr("data-urlName");
        		            var theString = $(this).closest("a").attr("href");
        		            arr = theString.split("-");
        		            var urlA = arr[0] + "Html/" + theString;

        		            var txt1 = $("<a></a>").attr({
        		                "href": "javascript:void(0)",
        		                "data-url": urlA,
        		                "id": "thirA",
        		                "onclick": "traUrl(this)"
        		            }).text(urlName);
        		            var txt2 = $("<li ></li>").attr({
        		                "class": "active",
        		                "id": "thirLi"
        		            }).append(txt1);
        		            $("#lead", window.parent.document).contents().find("#ul1").append(txt2);
        		        }
        		    });
        		}
       
    });  