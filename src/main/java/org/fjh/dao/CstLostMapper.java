package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.CstLost;
import org.fjh.entity.CstLostExample;
import org.fjh.entity.CstLostWithBLOBs;

public interface CstLostMapper {
    long countByExample(CstLostExample example);

    int deleteByExample(CstLostExample example);

    int deleteByPrimaryKey(Long lstId);

    int insert(CstLostWithBLOBs record);

    int insertSelective(CstLostWithBLOBs record);

    List<CstLostWithBLOBs> selectByExampleWithBLOBs(CstLostExample example);

    List<CstLost> selectByExample(CstLostExample example);

    CstLostWithBLOBs selectByPrimaryKey(Long lstId);

    int updateByExampleSelective(@Param("record") CstLostWithBLOBs record, @Param("example") CstLostExample example);

    int updateByExampleWithBLOBs(@Param("record") CstLostWithBLOBs record, @Param("example") CstLostExample example);

    int updateByExample(@Param("record") CstLost record, @Param("example") CstLostExample example);

    int updateByPrimaryKeySelective(CstLostWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(CstLostWithBLOBs record);

    int updateByPrimaryKey(CstLost record);
}