package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.CstActivity;
import org.fjh.entity.CstActivityExample;
import org.fjh.entity.CstActivityWithBLOBs;

public interface CstActivityMapper {
    long countByExample(CstActivityExample example);

    int deleteByExample(CstActivityExample example);

    int deleteByPrimaryKey(Long atvId);

    int insert(CstActivityWithBLOBs record);

    int insertSelective(CstActivityWithBLOBs record);

    List<CstActivityWithBLOBs> selectByExampleWithBLOBs(CstActivityExample example);

    List<CstActivity> selectByExample(CstActivityExample example);

    CstActivityWithBLOBs selectByPrimaryKey(Long atvId);

    int updateByExampleSelective(@Param("record") CstActivityWithBLOBs record, @Param("example") CstActivityExample example);

    int updateByExampleWithBLOBs(@Param("record") CstActivityWithBLOBs record, @Param("example") CstActivityExample example);

    int updateByExample(@Param("record") CstActivity record, @Param("example") CstActivityExample example);

    int updateByPrimaryKeySelective(CstActivityWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(CstActivityWithBLOBs record);

    int updateByPrimaryKey(CstActivity record);
}