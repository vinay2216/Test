package com.books.Service;

import java.util.List;

import com.books.DTO.Order;
import com.books.DTO.Book;


public interface BookOrderService {
	public int createOrder(Order o);
	//public int deleteCustomer(int custId);
	//public int updateCustomer(Customer customer);
	public List<Order> retriveTotalOrders(); 
	public List<Book> retriveBooks(); 
	
}
