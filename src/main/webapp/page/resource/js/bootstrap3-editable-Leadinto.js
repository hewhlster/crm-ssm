
	function getRootPath_dc() {
            var pathName = window.location.pathname.substring(1);
            var webName = pathName == '' ? '' : pathName.substring(0, pathName.indexOf('/'));
            if (webName == "") {
                return window.location.protocol + '//' + window.location.host;
            }
            else {
                return window.location.protocol + '//' + window.location.host + '/' + webName;
            }
        }

        var RootPath = getRootPath_dc();
	    arr = RootPath.split("/");
	    var isHtml = arr[arr.length - 1];
	    var url1 = "/resource/bootstrap3-editable/css/bootstrap-editable.css'>";
	    var url2 = "/resource/bootstrap3-editable/js/bootstrap-editable.min.js'></script>";
	    if (isHtml != "HTML") {
	        url1 = "/HTML" + url1;
	        url2 = "/HTML" + url2;
	    }


//同时引入bootstrap文件
	    document.write("<link rel='stylesheet' href='" + getRootPath_dc() + url1);
        document.write("<script src='" + getRootPath_dc() + url2);

