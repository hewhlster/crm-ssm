///******************************************************************************************************///
///                                                 这是对搜索表单的校验器                                                                   ///
///引入<script src="../resource/js/checkSelect.js" type="text/javascript" charset="utf-8"></script>///
///*****************************************************************************************************///
//////////////////////////////////////////////////////////////////////////////////////////////
///                                                 对搜索的按钮添加 submitForm 类
//////////////////////////////////////////////////////////////////////////////////////////////
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
                verbose: false,
                feedbackIcons: {
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
//////////////////////////////////这是实例/////////////////////////////////////////////////////////
                    Num: {                                       //对要验证的输入框，添加name="xxxxxx"属性,这里使用xxxxxx选择到相应的输入框
                     group: '.col-sm-7',                    //对选择样式变化的范围
                     resetFormData: false,                 
                     validators: {
                         stringLength: {                    //检查长度
                             min: 0,
                             max: 20,
                             message: '内容不能大于20字符'
                         },
                            regexp: {                          //使用正则表达式
                                regexp: /^[0-9]+$/,
                                message: '只能包含数字'
                            }
                        }
                    }
///////////////////////////////////////////////////////////////////////////////////////////
                    , proName: {
                             group: '.col-sm-7',
                     resetFormData: false,
                     validators: {
                         stringLength: {
                             min: 0,
                             max: 20,
                             message: '内容不能大于20字符'
                         },
                            regexp: {
                                regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                                message: '只能包含中、英文和数字'
                            }
                        }
                    }
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
                    , proAddress: {
                             group: '.col-sm-7',
                     resetFormData: false,
                     validators: {
                         stringLength: {
                             min: 0,
                             max: 20,
                             message: '内容不能大于20字符'
                         },
                            regexp: {
                                regexp: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
                                message: '只能包含中、英文和数字'
                            }
                        }
                    }
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
                    , cstName: {
                        group: '.col-sm-6',
                     resetFormData: false,
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
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
                    , cstManage: {
                        group: '.col-sm-6',
                        resetFormData: false,
                        validators: {
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
//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
                   , input1: {
                       group: '.inscore',                    
                     resetFormData: false,                 
                     validators: {
                         stringLength: {                    
                             min: 0,
                             max: 20,
                             message: '内容不能大于20字符'
                         },
                            regexp: {                          
                                regexp: /^[0-9]+$/,
                                message: '只能包含数字'
                            }
                        }
                    }
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
             , input3: {
                 group: '.inscore',
                 resetFormData: false,
                 validators: {
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
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
                   , odrno: {
                       group: '.inscore',
                       resetFormData: false,
                       validators: {
                           stringLength: {
                               min: 0,
                               max: 20,
                               message: '内容不能大于20字符'
                           },
                           regexp: {
                               regexp: /^[0-9]+$/,
                               message: '只能包含数字'
                           }
                       }
                   }
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
                    , custname: {
                        group: '.col-sm-7',
                        resetFormData: false,
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
 //////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
                    , name: {
                        group: '.col-sm-7',
                        resetFormData: false,
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
//////////////////////////////////////////////////////////////////////////////////////
                }
            }).on('success.field.bv', function (e, data) {//表单中元素验证成功事件
            
                     $(data.element[0]).parent().removeClass("has-success");
                     $(".submitForm").removeAttr("disabled");

              })  .on('error.field.bv', function(e, data) {//表单中元素验证失败事件
                     $(".submitForm").attr("disabled","disabled");
                }).on('error.form.bv', function(e) {//表单全部验证失败事件
                    $(".submitForm").attr("disabled", "disabled");
       
                }).on('success.form.bv', function(e) {//表单全部验证成功事件
                    $(".submitForm").removeAttr("disabled");
                    });
                });