package org.fjh.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import org.fjh.entity.BasDict;
import org.fjh.entity.BasDictExample;

public interface BasDictMapper {
    long countByExample(BasDictExample example);

    int deleteByExample(BasDictExample example);

    int deleteByPrimaryKey(Long dictId);

    int insert(BasDict record);

    int insertSelective(BasDict record);

    List<BasDict> selectByExample(BasDictExample example);

    BasDict selectByPrimaryKey(Long dictId);

    int updateByExampleSelective(@Param("record") BasDict record, @Param("example") BasDictExample example);

    int updateByExample(@Param("record") BasDict record, @Param("example") BasDictExample example);

    int updateByPrimaryKeySelective(BasDict record);

    int updateByPrimaryKey(BasDict record);
}