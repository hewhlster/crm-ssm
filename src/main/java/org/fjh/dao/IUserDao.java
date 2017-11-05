package org.fjh.dao;

import org.fjh.entity.User;

public interface IUserDao {
	public int getByUidAndUpass(String uname,String upass);
	public User getByUname(String uname);
	public User getByUid(String uid);
}