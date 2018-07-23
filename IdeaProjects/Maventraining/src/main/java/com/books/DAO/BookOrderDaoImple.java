package com.books.DAO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.books.DTO.Book;
import com.books.DTO.Order;

import utils.Mysqldb;

public class BookOrderDaoImple implements BookOrderDao {
	public static final String SQL_INSERT_ORDERS = "insert into orders(order_date,order_by) values(?,?)"; 
	public static final String SQL_INSERT_ORDERS_DETAILS = "insert into order_details(order_id,order_book_name,order_quantity) "
			+ "values(?,?,?)";
	public static final String SQL_UPDATE_BOOKS = "update books_schema.books"
			+ " set book_avail_quantity = book_avail_quantity-?"
			+ " where book_name = ?";
	public static final String SQL_SELECT_ORDER_ID = "select (max(order_id)) from orders";
	
	public static final String SQL_SELECT_TOTAL_ORDERS = "select books_schema.order_details.order_id,order_by,order_book_name,order_quantity,order_date "
			+ "FROM books_schema.order_details,books_schema.orders "
			+ "where books_schema.order_details.order_id = books_schema.orders.order_id";
	
	public static final String SQL_AVAILABLE_BOOKS = "select * "
			+ "from books_schema.books";
	public static final String SQL_RETRIVE_BY_SEARCH_BOOK = "select * "
			+ "from books_schema.books "
			+ "where book_name = ? ";
	public static final String SQL_RETRIVE_BY_SEARCH_AUTHOR = "select * "
			+ "from books_schema.books"
			+ " where book_author = ? ";

	
	public int createOrder(Order o) {
		
		Connection con = null;
		PreparedStatement ps = null;
		int createStatus = 0, createStatus1 = 0, updateStatus=0;
		ResultSet rs = null;
		try {
			con = Mysqldb.getConnection();
			ps = con.prepareStatement(SQL_INSERT_ORDERS);
			
			ps.setString(1, o.getOrder_date());
			ps.setString(2, o.getOrder_by());
			
			createStatus  = ps.executeUpdate();
			
			if(createStatus == 1) {
				rs = ps.executeQuery(SQL_SELECT_ORDER_ID);
				int order_id = 0;
				if(rs.next())
				  order_id = rs.getInt(1);

				ps = con.prepareStatement(SQL_INSERT_ORDERS_DETAILS);
				
				ps.setInt(1,order_id );
				ps.setString(2, o.getOrder_book_name());
				ps.setInt(3, o.getOrder_quantity());
				
				createStatus1 = ps.executeUpdate();
			}
			if(createStatus1 == 1) {

				ps = con.prepareStatement(SQL_UPDATE_BOOKS);
	
				ps.setInt(1, o.getOrder_quantity());
				ps.setString(2, o.getOrder_book_name());

				updateStatus = ps.executeUpdate();
				
			}
					
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return createStatus1;
	}

	public int deleteOrder(Order customer) {
		// TODO Auto-generated method stub
		return 0;
	}

	public List<Order> retriveOrders() {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<Order> orders_list = new ArrayList<Order>();
 		try {
			con = Mysqldb.getConnection();
			ps = con.prepareStatement(SQL_SELECT_TOTAL_ORDERS);
			 rs = ps.executeQuery();
	            while (rs.next()) {
	            	Order o = new Order();
	            	o.setOrder_id(rs.getInt(1));
	            	o.setOrder_by(rs.getString(2));
	            	o.setOrder_book_name(rs.getString(3));
	            	o.setOrder_quantity(rs.getInt(4));
	            	o.setOrder_date(rs.getString(5));
	         
	            	orders_list.add(o);
	            }
	            
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return orders_list;
	}

	public List<Book> retriveBooks() {
		Connection con = null;
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		List<Book> orders_list = new ArrayList<Book>();
 		try {
			con = Mysqldb.getConnection();
			ps = con.prepareStatement(SQL_AVAILABLE_BOOKS);
			 rs = ps.executeQuery();
	            while (rs.next()) {
	            	Book b = new Book();
	            	b.setBookId(rs.getInt(1));
	            	b.setBookName(rs.getString(2));
	            	b.setBookAuthor(rs.getString(3));
	            	b.setBookUnitPrice(rs.getInt(4));
	            	b.setBookAvailable(rs.getInt(5));
	            	b.setBookLink(rs.getString(6));
	         
	            	orders_list.add(b);
	            }
	            
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return orders_list;
	}

	public List<Book> retriveBooksBySearch(String name) {
		  Connection conn = null;

	        List<Book> books_list = new ArrayList<Book>();
	        ResultSet rs = null;
	        
	      
	        PreparedStatement ps = null;

	        try {
	            conn = Mysqldb.getConnection();

	            ps = conn.prepareStatement(SQL_RETRIVE_BY_SEARCH_BOOK);
	            ps.setString(1, name);
	            rs = ps.executeQuery();
	                       
	            	            
	          
	            while (rs.next()) {
	                Book b = new Book();
	       
	                b.setBookId(rs.getInt(1));
	                b.setBookName(rs.getString(2));
	                b.setBookAuthor(rs.getString(3));
	                b.setBookUnitPrice(rs.getInt(4));
	                b.setBookAvailable(rs.getInt(5));
	                
	                books_list.add(b);
	            }

	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return books_list;
	}
	public List<Book> retriveBooksBySearchAuthor(String name) {
		  Connection conn = null;

	        List<Book> books_list = new ArrayList<Book>();
	        ResultSet rs = null;
	        
	      
	        PreparedStatement ps = null;

	        try {
	            conn = Mysqldb.getConnection();

	            ps = conn.prepareStatement(SQL_RETRIVE_BY_SEARCH_AUTHOR);
	            ps.setString(1, name);
	            rs = ps.executeQuery();
	                       
	            	            
	          
	            while (rs.next()) {
	                Book b = new Book();
	                
	                b.setBookId(rs.getInt(1));
	                b.setBookName(rs.getString(2));
	                b.setBookAuthor(rs.getString(3));
	                b.setBookUnitPrice(rs.getInt(4));
	                b.setBookAvailable(rs.getInt(5));
	                
	                books_list.add(b);
	            }

	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	        return books_list;
	}

}
