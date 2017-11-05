package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.SysRightRoleExample;
import org.fjh.entity.SysRightRoleKey;

public interface SysRightRoleMapper {
    long countByExample(SysRightRoleExample example);

    int deleteByExample(SysRightRoleExample example);

    int deleteByPrimaryKey(SysRightRoleKey key);

    int insert(SysRightRoleKey record);

    int insertSelective(SysRightRoleKey record);

    List<SysRightRoleKey> selectByExample(SysRightRoleExample example);

    int updateByExampleSelective(@Param("record") SysRightRoleKey record, @Param("example") SysRightRoleExample example);

    int updateByExample(@Param("record") SysRightRoleKey record, @Param("example") SysRightRoleExample example);
}