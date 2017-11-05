package org.fjh.serivce.impl;

import org.fjh.dao.IUserDao;
import org.fjh.entity.User;
import org.fjh.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements IUserService{
	@Autowired
	private IUserDao userDao;
	@Override
	public User login(String uid, String upass) {
		int row=userDao.getByUidAndUpass(uid, upass);
		System.out.println("row="+row);
		if( row > 0){
			return userDao.getByUid(uid);
		} else {
			return null;
		}
	}

	@Override
	public User getUserByUname(String uname) {
		return userDao.getByUname(uname);
	}
	
}
