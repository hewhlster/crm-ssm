package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.CstLinkMan;
import org.fjh.entity.CstLinkManExample;

public interface CstLinkManMapper {
    long countByExample(CstLinkManExample example);

    int deleteByExample(CstLinkManExample example);

    int deleteByPrimaryKey(Long lkmId);

    int insert(CstLinkMan record);

    int insertSelective(CstLinkMan record);

    List<CstLinkMan> selectByExampleWithBLOBs(CstLinkManExample example);

    List<CstLinkMan> selectByExample(CstLinkManExample example);

    CstLinkMan selectByPrimaryKey(Long lkmId);

    int updateByExampleSelective(@Param("record") CstLinkMan record, @Param("example") CstLinkManExample example);

    int updateByExampleWithBLOBs(@Param("record") CstLinkMan record, @Param("example") CstLinkManExample example);

    int updateByExample(@Param("record") CstLinkMan record, @Param("example") CstLinkManExample example);

    int updateByPrimaryKeySelective(CstLinkMan record);

    int updateByPrimaryKeyWithBLOBs(CstLinkMan record);

    int updateByPrimaryKey(CstLinkMan record);
}