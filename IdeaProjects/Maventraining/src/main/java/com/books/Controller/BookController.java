package com.books.Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.time.LocalDate;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.books.DTO.Order;
import com.books.Service.BookOrderServiceImpl;
import com.google.gson.Gson;

@WebServlet("/BookController")
public class BookController extends HttpServlet {
	
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		int createStatus = 0;
		PrintWriter out = resp.getWriter();
		
		Order order = new Order();
		String order_by = req.getParameter("customer");
		String order_book_name = req.getParameter("bookname");
		int order_quantity = Integer.parseInt(req.getParameter("quantity"));
		LocalDate order_date =  LocalDate.now();
		
		order.setOrder_by(order_by);
		order.setOrder_book_name(order_book_name);
		order.setOrder_quantity(order_quantity);
		order.setOrder_date(order_date.toString());
		
		createStatus = new BookOrderServiceImpl().createOrder(order);
		
		if(createStatus == 1) {
			out.println("sucess");
		}else
			out.println("fail");
		
		out.close();
	}
	
	
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		List<Order> orders  = new BookOrderServiceImpl().retriveTotalOrders();
		
		
		PrintWriter out = resp.getWriter();
		Gson gson = new Gson();
		
		out.println(gson.toJson(orders));
	}
}