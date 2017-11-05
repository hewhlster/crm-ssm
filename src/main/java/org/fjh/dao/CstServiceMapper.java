package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.CstService;
import org.fjh.entity.CstServiceExample;
import org.fjh.entity.CstServiceWithBLOBs;

public interface CstServiceMapper {
    long countByExample(CstServiceExample example);

    int deleteByExample(CstServiceExample example);

    int deleteByPrimaryKey(Long svrId);

    int insert(CstServiceWithBLOBs record);

    int insertSelective(CstServiceWithBLOBs record);

    List<CstServiceWithBLOBs> selectByExampleWithBLOBs(CstServiceExample example);

    List<CstService> selectByExample(CstServiceExample example);

    CstServiceWithBLOBs selectByPrimaryKey(Long svrId);

    int updateByExampleSelective(@Param("record") CstServiceWithBLOBs record, @Param("example") CstServiceExample example);

    int updateByExampleWithBLOBs(@Param("record") CstServiceWithBLOBs record, @Param("example") CstServiceExample example);

    int updateByExample(@Param("record") CstService record, @Param("example") CstServiceExample example);

    int updateByPrimaryKeySelective(CstServiceWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(CstServiceWithBLOBs record);

    int updateByPrimaryKey(CstService record);
}