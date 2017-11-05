
//////////////////////////////////////////////////////////////////////////////////////////////////
//                                                               模态框的校验
//第一步：
// 引入文件:<script src="resource/js/checkModel.js" type="text/javascript" charset="utf-8"></script>
//第二步:
//                                      对提交的按钮添加 submitForm 类
/////////////////////////////////////////////////////////////////////////////////////////////////
//第三步:添加范围
///////////////////////////对要改变样式的区域添加一个div class为 inscop
//  <div class="inscop">
//                <label for="inputEmail3" class="col-sm-2 control-label">
//                    负责经理</label>
//                <div class="col-sm-4">
//                    <input type="text" class="form-control" name="cstManage" value="<%=Request["manager"]%>"/>
//                </div>
//   </div>
//////////////////////////////////////////////////////////////////////////////////////////////////
//第四步:修改提交函数
//function submitFrom() {
//    $('form').bootstrapValidator('validate');
//    var formState = $('form').data('bootstrapValidator').isValid()
//    if (formState) {
//////////////////////////////////////////////////////////注意添加以上内容(下面多加一个花括号)
//        $.ajax({
//            cache: true,
//            type: "POST",
//            url: "../../Control/rightManageControl/selectTheUer.ashx",
//            data: $("#reigthForm").serialize(),
//            async: false,
//            error: function (request) {
//                alert("服务器暂时无法响应，请稍后...");

//            },
//            success: function (data) {
//                json = data;
//                pageList(json, ListCount, "1");

//            }
//        });

//    }
//}
////////////////////////////////////////////////////////////////////////////////////////////////////////

 $(function () {
            $('form').bootstrapValidator({
                message: 'This value is not valid',
                verbose: false,
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
//第五步:添加规则 
///////////////////////////////////////////////////////////////////////////////////////////////////////////这里是要添加的校验的地方
                    userName: {                                    //对要验证的输入框，添加name="xxxxxx"属性,这里使用xxxxxx选择到相应的输入框
                        group: '.inscop',                          //对选择样式变化的范围
                        validators: {
                            notEmpty: {                             //不能为空
                                message: '用户名不能为空'
                            },
                            stringLength: {                        //检查长度
                                min: 2,
                                max: 10,
                                message: '用户姓名长度必须在2到10位之间'
                            },
                            regexp: {                                 //使用正则表达式
                                regexp: /^[\u4E00-\u9FA5A-Za-z]+$/,
                                message: '只能包含中英文'
                            }
                        }
                    }
//////////////////////////////////////////////////////////////////////////////
                   , userAddress: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '地址不能为空'
                           },
                           stringLength: {
                               min: 2,
                               max: 10,
                               message: '地址长度必须在3到20位之间'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                               message: '只能包含中英文和数字'
                           }
                       }
                       }
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////以下是clientManage-edit.aspx的校验
 //////////////////////////////////////////////////////////////////////////////
                   , userTel: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '联系电话不能为空'
                           },

                           regexp: {
                               regexp: /^1[0-9]{10}$/,
                               message: '请输入11位联系号码'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
                   , cstManage: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '此处不能为空'
                           },
                           stringLength: {
                               min: 0,
                               max: 20,
                               message: '内容不能答大于20字符'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z]+$/,
                               message: '只能包含中英文'
                           }
                       }
                   }
 ////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
                   , cstName: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '此处不能为空'
                           },
                           stringLength: {
                               min: 0,
                               max: 20,
                               message: '内容不能答大于20字符'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                               message: '只能包含中英文和数字'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
                   , cstRegion: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '此处不能为空'
                           },
                           stringLength: {
                               min: 2,
                               max: 10,
                               message: '内容长度必须在3到20位之间'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                               message: '只能包含中英文和数字'
                           }
                       }
                   }
 ////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
                   , csttel: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '联系电话不能为空'
                           },

                           regexp: {
                               regexp: /^1[0-9]{10}$/,
                               message: '请输入11位联系号码'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////             
//////////////////////////////////////////////////////////////////////////////
                   , cstaddr: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '此处不能为空'
                           },
                           stringLength: {
                               min: 2,
                               max: 10,
                               message: '内容长度必须在3到20位之间'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                               message: '只能包含中英文和数字'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////以下是clientManage-contactAdd.aspx的校验
//////////////////////////////////////////////////////////////////////////////
                   , lkmName: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '此处不能为空'
                           },
                           stringLength: {
                               min: 0,
                               max: 20,
                               message: '内容不能大于20字符'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z]+$/,
                               message: '只能包含中英文'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
                   , lkmTask: {
                       group: '.inscop',
                       validators: {
                           
                           stringLength: {
                               min: 0,
                               max: 20,
                               message: '内容不能大于20字符'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                               message: '只能包含中英文和数字'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////          
//////////////////////////////////////////////////////////////////////////////
                   , lkmTel: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '联系电话不能为空'
                           },

                           regexp: {
                               regexp: /^1[0-9]{10}$/,
                               message: '请输入11位联系号码'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////   
//////////////////////////////////////////////////////////////////////////////
                   , lkmPtel: {
                       group: '.inscop',
                       validators: {
                  
                           regexp: {
                               regexp: /^1[0-9]{10}$/,
                               message: '请输入11位联系号码'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////////////////////////////////////以下是clientManage-contact-edit.aspx的校验      
/////////////////////////////////////////////////////////////////////////////            

////////////////////////////////////////////////////////////////////////////  
///////////////////////////////////////////////////////////////////////////////以下是clientManage-communication-add.aspx的校验      
/////////////////////////////////////////////////////////////////////////////         
                   , date: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '日期不能为空'
                           },
                       }
                   }
////////////////////////////////////////////////////////////////////////////  
/////////////////////////////////////////////////////////////////////////////         
                   , addr: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '此处不能为空'
                           },
                           stringLength: {
                               min: 2,
                               max: 10,
                               message: '内容长度必须在3到20位之间'
                           },
                           regexp: {
                               regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                               message: '只能包含中英文和数字'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////  
/////////////////////////////////////////////////////////////////////////////         
                   , summary: {
                       group: '.inscop',
                       validators: {
                           notEmpty: {
                               message: '此处不能为空'
                           },
                           stringLength: {
                               min: 2,
                               max: 10,
                               message: '内容长度必须在3到20位之间'
                           },
                           regexp: {
                              regexp: /^[\u4E00-\u9FA5A-Za-z]+$/,
                               message: '只能包含中英文'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////  
/////////////////////////////////////////////////////////////////////////////         
                   , tel: {
                       group: '.inscop',
                       validators: {
                            notEmpty: {
                               message: '联系电话不能为空'
                           },

                           regexp: {
                               regexp: /^1[0-9]{10}$/,
                               message: '请输入11位联系号码'
                           }
                       }
                   }
////////////////////////////////////////////////////////////////////////////  

                }
            }).on('success.field.bv', function (e, data) {//表单中元素验证成功事件

                $(data.element[0]).parent().removeClass("has-success");
                $(".submitForm").removeAttr("disabled");

            }).on('error.field.bv', function (e, data) {//表单中元素验证失败事件
                $(".submitForm").attr("disabled", "disabled");
            }).on('error.form.bv', function (e) {//表单全部验证失败事件
                $(".submitForm").attr("disabled", "disabled");

            }).on('success.form.bv', function (e) {//表单全部验证成功事件
                $(".submitForm").removeAttr("disabled");
            });

        });