package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.SalPlan;
import org.fjh.entity.SalPlanExample;
import org.fjh.entity.SalPlanWithBLOBs;

public interface SalPlanMapper {
    long countByExample(SalPlanExample example);

    int deleteByExample(SalPlanExample example);

    int deleteByPrimaryKey(Long plaId);

    int insert(SalPlanWithBLOBs record);

    int insertSelective(SalPlanWithBLOBs record);

    List<SalPlanWithBLOBs> selectByExampleWithBLOBs(SalPlanExample example);

    List<SalPlan> selectByExample(SalPlanExample example);

    SalPlanWithBLOBs selectByPrimaryKey(Long plaId);

    int updateByExampleSelective(@Param("record") SalPlanWithBLOBs record, @Param("example") SalPlanExample example);

    int updateByExampleWithBLOBs(@Param("record") SalPlanWithBLOBs record, @Param("example") SalPlanExample example);

    int updateByExample(@Param("record") SalPlan record, @Param("example") SalPlanExample example);

    int updateByPrimaryKeySelective(SalPlanWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(SalPlanWithBLOBs record);

    int updateByPrimaryKey(SalPlan record);
}