		//导航栏标签的点击事件
		function traUrl(obj) {
			var Turl = $(obj).attr("data-url");
			$("#main", window.parent.document).attr("src", Turl);
			
			$(document).ready(function() {
				
				var kidNum = $("#ul1").children().length;
				var thisId=$(obj).attr("id");
				
				if(kidNum == 3&&thisId!="thirA") {
					$("#lead", window.parent.document).contents().find("#thirLi").remove();
				}
		
		});
		}