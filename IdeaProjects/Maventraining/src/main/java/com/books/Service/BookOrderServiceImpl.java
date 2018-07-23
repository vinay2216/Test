package com.books.Service;

import java.util.List;

import com.books.DAO.BookOrderDaoImple;
import com.books.DTO.Book;
import com.books.DTO.Order;

public class BookOrderServiceImpl implements BookOrderService {
	
	public int createOrder(Order o) {
		return new BookOrderDaoImple().createOrder(o);
	}

	public List<Order> retriveTotalOrders() {
		return new BookOrderDaoImple().retriveOrders();
	}

	public List<Book> retriveBooks() {
		return new BookOrderDaoImple().retriveBooks();

	}

	public List<Book> retriveBooksBySearch(String name) {
		return new BookOrderDaoImple().retriveBooksBySearch(name);
	}

	public List<Book> retriveBooksBySearchAuthor(String name) {
		return new BookOrderDaoImple().retriveBooksBySearchAuthor(name);
	}
	
}
