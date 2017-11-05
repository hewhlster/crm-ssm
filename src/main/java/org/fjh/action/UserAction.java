package org.fjh.action;

import org.fjh.entity.User;
import org.fjh.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller("/user")
@RequestMapping("/user")
public class UserAction {
	@Autowired
	private IUserService userService;
	@RequestMapping("/login")
	public void login(String uid,String upass){
		User loginUser = userService.login(uid, upass);
		System.out.println("---------login---------\t"+loginUser);
	}
	
	@RequestMapping("/regist")
	public void regist(String uname){
		System.out.println(uname);
		User ret = userService.getUserByUname(uname);
		System.out.println(ret);
	}
}