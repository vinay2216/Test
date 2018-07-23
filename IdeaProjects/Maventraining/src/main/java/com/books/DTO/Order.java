
package com.books.DTO;


public class Order{
	private int order_id;
	private String order_by;
	private String order_book_name;
	private int order_quantity;
	private String order_date;
	
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	public String getOrder_by() {
		return order_by;
	}
	public void setOrder_by(String order_by) {
		this.order_by = order_by;
	}
	public String getOrder_book_name() {
		return order_book_name;
	}
	public void setOrder_book_name(String order_book_name) {
		this.order_book_name = order_book_name;
	}
	public int getOrder_quantity() {
		return order_quantity;
	}
	public void setOrder_quantity(int order_quantity) {
		this.order_quantity = order_quantity;
	}
	public String getOrder_date() {
		return order_date;
	}
	public void setOrder_date(String order_date) {
		this.order_date = order_date;
	}
}