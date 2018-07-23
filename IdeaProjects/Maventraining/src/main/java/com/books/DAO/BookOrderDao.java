package com.books.DAO;

import java.util.List;

import com.books.DTO.Book;
import com.books.DTO.Order;


public interface BookOrderDao {
	public int createOrder(Order o);
	public int deleteOrder(Order customer);
	public List<Order> retriveOrders();
	public List<Book> retriveBooks();

}
