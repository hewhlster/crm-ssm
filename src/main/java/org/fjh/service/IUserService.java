package org.fjh.service;

import org.fjh.entity.User;

public interface IUserService {
	public User login(String uuid,String upass);
	public User getUserByUname(String uname);
}

