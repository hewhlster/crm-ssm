package org.fjh.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

public class CstActivityExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public CstActivityExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        protected void addCriterionForJDBCDate(String condition, Date value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value.getTime()), property);
        }

        protected void addCriterionForJDBCDate(String condition, List<Date> values, String property) {
            if (values == null || values.size() == 0) {
                throw new RuntimeException("Value list for " + property + " cannot be null or empty");
            }
            List<java.sql.Date> dateList = new ArrayList<java.sql.Date>();
            Iterator<Date> iter = values.iterator();
            while (iter.hasNext()) {
                dateList.add(new java.sql.Date(iter.next().getTime()));
            }
            addCriterion(condition, dateList, property);
        }

        protected void addCriterionForJDBCDate(String condition, Date value1, Date value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            addCriterion(condition, new java.sql.Date(value1.getTime()), new java.sql.Date(value2.getTime()), property);
        }

        public Criteria andAtvIdIsNull() {
            addCriterion("atv_id is null");
            return (Criteria) this;
        }

        public Criteria andAtvIdIsNotNull() {
            addCriterion("atv_id is not null");
            return (Criteria) this;
        }

        public Criteria andAtvIdEqualTo(Long value) {
            addCriterion("atv_id =", value, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdNotEqualTo(Long value) {
            addCriterion("atv_id <>", value, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdGreaterThan(Long value) {
            addCriterion("atv_id >", value, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdGreaterThanOrEqualTo(Long value) {
            addCriterion("atv_id >=", value, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdLessThan(Long value) {
            addCriterion("atv_id <", value, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdLessThanOrEqualTo(Long value) {
            addCriterion("atv_id <=", value, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdIn(List<Long> values) {
            addCriterion("atv_id in", values, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdNotIn(List<Long> values) {
            addCriterion("atv_id not in", values, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdBetween(Long value1, Long value2) {
            addCriterion("atv_id between", value1, value2, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvIdNotBetween(Long value1, Long value2) {
            addCriterion("atv_id not between", value1, value2, "atvId");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoIsNull() {
            addCriterion("atv_cust_no is null");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoIsNotNull() {
            addCriterion("atv_cust_no is not null");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoEqualTo(String value) {
            addCriterion("atv_cust_no =", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoNotEqualTo(String value) {
            addCriterion("atv_cust_no <>", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoGreaterThan(String value) {
            addCriterion("atv_cust_no >", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoGreaterThanOrEqualTo(String value) {
            addCriterion("atv_cust_no >=", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoLessThan(String value) {
            addCriterion("atv_cust_no <", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoLessThanOrEqualTo(String value) {
            addCriterion("atv_cust_no <=", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoLike(String value) {
            addCriterion("atv_cust_no like", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoNotLike(String value) {
            addCriterion("atv_cust_no not like", value, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoIn(List<String> values) {
            addCriterion("atv_cust_no in", values, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoNotIn(List<String> values) {
            addCriterion("atv_cust_no not in", values, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoBetween(String value1, String value2) {
            addCriterion("atv_cust_no between", value1, value2, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNoNotBetween(String value1, String value2) {
            addCriterion("atv_cust_no not between", value1, value2, "atvCustNo");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameIsNull() {
            addCriterion("atv_cust_name is null");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameIsNotNull() {
            addCriterion("atv_cust_name is not null");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameEqualTo(String value) {
            addCriterion("atv_cust_name =", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameNotEqualTo(String value) {
            addCriterion("atv_cust_name <>", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameGreaterThan(String value) {
            addCriterion("atv_cust_name >", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameGreaterThanOrEqualTo(String value) {
            addCriterion("atv_cust_name >=", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameLessThan(String value) {
            addCriterion("atv_cust_name <", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameLessThanOrEqualTo(String value) {
            addCriterion("atv_cust_name <=", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameLike(String value) {
            addCriterion("atv_cust_name like", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameNotLike(String value) {
            addCriterion("atv_cust_name not like", value, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameIn(List<String> values) {
            addCriterion("atv_cust_name in", values, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameNotIn(List<String> values) {
            addCriterion("atv_cust_name not in", values, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameBetween(String value1, String value2) {
            addCriterion("atv_cust_name between", value1, value2, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvCustNameNotBetween(String value1, String value2) {
            addCriterion("atv_cust_name not between", value1, value2, "atvCustName");
            return (Criteria) this;
        }

        public Criteria andAtvDateIsNull() {
            addCriterion("atv_date is null");
            return (Criteria) this;
        }

        public Criteria andAtvDateIsNotNull() {
            addCriterion("atv_date is not null");
            return (Criteria) this;
        }

        public Criteria andAtvDateEqualTo(Date value) {
            addCriterionForJDBCDate("atv_date =", value, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateNotEqualTo(Date value) {
            addCriterionForJDBCDate("atv_date <>", value, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateGreaterThan(Date value) {
            addCriterionForJDBCDate("atv_date >", value, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateGreaterThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("atv_date >=", value, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateLessThan(Date value) {
            addCriterionForJDBCDate("atv_date <", value, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateLessThanOrEqualTo(Date value) {
            addCriterionForJDBCDate("atv_date <=", value, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateIn(List<Date> values) {
            addCriterionForJDBCDate("atv_date in", values, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateNotIn(List<Date> values) {
            addCriterionForJDBCDate("atv_date not in", values, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("atv_date between", value1, value2, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvDateNotBetween(Date value1, Date value2) {
            addCriterionForJDBCDate("atv_date not between", value1, value2, "atvDate");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceIsNull() {
            addCriterion("atv_place is null");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceIsNotNull() {
            addCriterion("atv_place is not null");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceEqualTo(String value) {
            addCriterion("atv_place =", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceNotEqualTo(String value) {
            addCriterion("atv_place <>", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceGreaterThan(String value) {
            addCriterion("atv_place >", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceGreaterThanOrEqualTo(String value) {
            addCriterion("atv_place >=", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceLessThan(String value) {
            addCriterion("atv_place <", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceLessThanOrEqualTo(String value) {
            addCriterion("atv_place <=", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceLike(String value) {
            addCriterion("atv_place like", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceNotLike(String value) {
            addCriterion("atv_place not like", value, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceIn(List<String> values) {
            addCriterion("atv_place in", values, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceNotIn(List<String> values) {
            addCriterion("atv_place not in", values, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceBetween(String value1, String value2) {
            addCriterion("atv_place between", value1, value2, "atvPlace");
            return (Criteria) this;
        }

        public Criteria andAtvPlaceNotBetween(String value1, String value2) {
            addCriterion("atv_place not between", value1, value2, "atvPlace");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}