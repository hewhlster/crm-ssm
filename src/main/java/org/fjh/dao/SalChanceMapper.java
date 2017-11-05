package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.SalChance;
import org.fjh.entity.SalChanceExample;

public interface SalChanceMapper {
    long countByExample(SalChanceExample example);

    int deleteByExample(SalChanceExample example);

    int deleteByPrimaryKey(Long chcId);

    int insert(SalChance record);

    int insertSelective(SalChance record);

    List<SalChance> selectByExampleWithBLOBs(SalChanceExample example);

    List<SalChance> selectByExample(SalChanceExample example);

    SalChance selectByPrimaryKey(Long chcId);

    int updateByExampleSelective(@Param("record") SalChance record, @Param("example") SalChanceExample example);

    int updateByExampleWithBLOBs(@Param("record") SalChance record, @Param("example") SalChanceExample example);

    int updateByExample(@Param("record") SalChance record, @Param("example") SalChanceExample example);

    int updateByPrimaryKeySelective(SalChance record);

    int updateByPrimaryKeyWithBLOBs(SalChance record);

    int updateByPrimaryKey(SalChance record);
}