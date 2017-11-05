
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
	//bootstrap文件地址
	var url1 = "/resource/bootstrap/css/bootstrap.min.css'>";
	var url2 = "/resource/bootstrap/css/bootstrap-theme.min.css'>";
	var url3 = "/resource/js/jquery-2.1.0.js'></script>";
	var url4 = "/resource/bootstrap/js/bootstrap.min.js'></script>";
	//bootstrapValidator文件地址
	var url5 = "/resource/bootstrapvalidator/css/bootstrapValidator.css'>";
	var url6 = "/resource/bootstrapvalidator/js/bootstrapValidator.js'></script>";
	if (isHtml != "HTML") {
	    url1 = "/HTML" + url1;
	    url2 = "/HTML" + url2;
	    url3 = "/HTML" + url3;
	    url4 = "/HTML" + url4;

	    url5 = "/HTML" + url5;
	    url6 = "/HTML" + url6;
	}


    //同时引入bootstrap文件
	document.write("<link rel='stylesheet'href='" + getRootPath_dc() + url1);
	document.write("<link rel='stylesheet' href='" + getRootPath_dc() + url2);
	document.write("<script src='" + getRootPath_dc() + url3);
	document.write("<script src='" + getRootPath_dc() + url4);
	//引入bootstrapValidator
	document.write("<link rel='stylesheet' href='" + getRootPath_dc() + url5);
	document.write("<script src='" + getRootPath_dc() + url6);



