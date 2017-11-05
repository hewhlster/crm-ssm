package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.SysRight;
import org.fjh.entity.SysRightExample;

public interface SysRightMapper {
    long countByExample(SysRightExample example);

    int deleteByExample(SysRightExample example);

    int deleteByPrimaryKey(String rightCode);

    int insert(SysRight record);

    int insertSelective(SysRight record);

    List<SysRight> selectByExample(SysRightExample example);

    SysRight selectByPrimaryKey(String rightCode);

    int updateByExampleSelective(@Param("record") SysRight record, @Param("example") SysRightExample example);

    int updateByExample(@Param("record") SysRight record, @Param("example") SysRightExample example);

    int updateByPrimaryKeySelective(SysRight record);

    int updateByPrimaryKey(SysRight record);
}