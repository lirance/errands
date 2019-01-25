package edu.oregonstate.errands.handler;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import org.apache.ibatis.type.MappedTypes;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Arrays;

/**
 * @author: Chendi Zhang
 * @date: 2019-01-24
 * @description:
 **/

@MappedJdbcTypes({JdbcType.VARCHAR})
@MappedTypes({java.util.ArrayList.class})
public class ItemListHandler extends BaseTypeHandler<ArrayList<String>> {

    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, ArrayList<String> parameter, JdbcType jdbcType) throws SQLException {
        StringBuilder str = new StringBuilder(parameter.toString());
        ps.setString(i, str.substring(1, str.length() - 1));
    }

    @Override
    public ArrayList<String> getNullableResult(ResultSet rs, String columnName) throws SQLException {
        String str = rs.getString(columnName);

        return getRoles(str);
    }

    @Override
    public ArrayList<String> getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        String str = rs.getString(columnIndex);

        return getRoles(str);
    }

    @Override
    public ArrayList<String> getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        String str = cs.getString(columnIndex);

        return getRoles(str);
    }

    private ArrayList<String> getRoles(String str) {
        String[] rolesarray = str.split(",");

        return new ArrayList<String>(Arrays.asList(rolesarray));
    }
}
