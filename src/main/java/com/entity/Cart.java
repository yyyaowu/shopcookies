package com.entity;

/**
 * @projectName: shopcookies
 * @package: com.entity
 * @className: Cart
 * @author: yao
 * @description: TODO
 * @date: 2021/12/27 11:33
 * @version: 1.0
 */
public class Cart {
	private int cartid;
	private int userid;
	private int orderid;

	public int getCartid() {
		return cartid;
	}

	public void setCartid(int cartid) {
		this.cartid = cartid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

}
