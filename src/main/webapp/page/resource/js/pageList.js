
        var json;//储存数据
        var ListCount = 7;//每页显示的条数
        var nowPage = "1";//储存当前页
        var nowListCount = 0;//当前页面显示的条数
        var  allpageNum=0;//记录总页数

 //注意修改
 ///////////////////////////////////////////////////////////////////////////////////////////    
//      function submitFrom() {
//          
//          $.ajax({
//              cache: true,
//              type: "POST",
//              url: "../../Control/rightManageControl/selectTheUer.ashx",
//              data: $("#reigthForm").serialize(),
//              async: false,
//              error: function (request) {
//                  alert("服务器暂时无法响应，请稍后...");
//               
//              },
//              success: function (data) {
//              	//////////////////////注意修改////////
//                  ///json = data;					   //
//                  ////pageList(json, ListCount, "1");//
//               	/////////////////////////////////////
//              }
//          });
//      }
    ///修改说明
 //////////////////////////////////////////////////////////////////////////////////////////////////
//      function viewTable(json, pageListButton) {
//         
//       
//          $("[data-toggle='tooltip']").tooltip();
//          /////////////////////////////////////////////////////////////////////////////////////////////
//         
//          //////////////////////////////////////////////////////////////////////////////////
//          //////////////设置回调函数
//          if (pageListButton) {
//              pageListButton();
//          }
//      }
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
//      function getInfo() {
//          $.ajax({
//              cache: true,
//             
//              type: "POST",
//              url: "../../Control/rightManageControl/selectAllUser.ashx",
//              async: false,
//              error: function (request) {
//                  alert("服务器暂时无法响应，请稍后...");
//              },
//              success: function (data) {
//               //////////////////////////////////注意修改
//               	//更新json
//                  json = data;
//                  //调用分页函数
//                  pageList(json, ListCount, "1")
//               //////////////////////////////////////
//              }
//          });
//
//      }
////////////////////////////////////////////////////////////////////////////////////////
        //设置页面按钮
        function pageListButton()
        {
            var obj = JSON.parse(json);
            var Num = obj.length;
            var pageNum = parseInt(Num / ListCount) + ((Num % ListCount == 0) ? 0 : 1)
            allpageNum=pageNum;
           $(".pagination").children().remove();
           if (pageNum != 0) {
               var pageButtonLats = "<li><a rel='nofollow' href='#' class='pageButtonLats'>上一页</a> </li>";
               var pageButtoNum = "";
               for (var i = 0; i < pageNum; i++) {
                   pageButtoNum += "<li class='pageLi' id='li"+(i+1)+"'><a rel='nofollow' class='pageButtoNum' >" + (i + 1) + "</a> </li>";
               }

               var pageButtonNext = "<li><a rel='nofollow' href='#' class='pageButtonNext'>下一页</a> </li>";
               var pageButton = pageButtonLats + pageButtoNum + pageButtonNext;
               $(".pagination").append(pageButton);

           }
            //给按钮标签绑定事件
           $(".pageButtoNum").click(function () {
               var currentPage = $(this).text();
               pageList(json, ListCount, currentPage);
           });
           $(".pageButtonLats").click(function () {
               if (nowPage > 1) {    
                   pageList(json, ListCount, parseInt(nowPage) - 1);
               }
           });
           $(".pageButtonNext").click(function () {
               if (nowPage < allpageNum) {
                  
                   pageList(json, ListCount, parseInt(nowPage) + 1);
                   
               }
           });
           changePageBtnClass();
           var thiswidth = (72 * 2 + 34.79 * allpageNum+2) + "px";
           $(".pagination").css("width", thiswidth);
           $(".pagination").attr("class", "pagination center-block");
           if (nowListCount < ListCount)
           {
               var colums = $("thead").find("tr").find("th").length;
               var tdStr = "";
               for (var i = 0; i < colums; i++)
               {
                   tdStr = tdStr + "<td></td>";
               }
               for (var i = nowListCount ; i < ListCount ; i++)
               {
                   var nameClass = "";
                   switch (i % 5) {
                       case 0:
                           nameClass = "";
                           break;
                       case 1:
                           nameClass = "active";
                           break;
                       case 2:
                           nameClass = "success";
                           break;
                       case 3:
                           nameClass = "warning";
                           break;
                       case 4:
                           nameClass = "danger";
                           break;
                   }
                  
                  
                   $("#tableBody").append("<tr class='" + nameClass + "'  style='height:36.8px'>" + tdStr + "</tr>");
               }
           }
           window.parent.addClick();
           newButtonClick();
           }
         //修改页码按钮的样式
        function changePageBtnClass()
        {
           
            $(".pageLi").removeClass();
            var liId="#li"+nowPage;
            $(liId).attr("class","active");
        }

           
        //方法:分页；参数:1.要分页的数据，2.每页的条数数，3.当前页
        function pageList(json,ListCount,currentPage)
        {
            $.ajax({
                type: "POST",
                url: "../../Control/pageListControl/pageList.ashx?ListCount=" + ListCount + "&&currentPage=" + currentPage,
                contentType: "application/json; charset=utf-8",
                data: json,
                async: false,
               // dataType: "json",
                error: function (request) {
                    alert("服务器暂时无法响应，请稍后...");
                },
                success: function (data) {
                    nowPage = currentPage;
                    var obj = JSON.parse(data);
                    nowListCount = obj.length;
                    
                    viewTable(data, pageListButton);
                }
            });
        }
        function newButtonClick() {
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
