package com.dao;

import com.entity.Cart;
import org.apache.ibatis.annotations.Select;

import java.util.List;

public interface CartDao {
	@Select("")
	List<Cart> selectAll();

}
