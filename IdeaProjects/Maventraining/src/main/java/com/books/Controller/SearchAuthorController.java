package com.books.Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.books.DTO.Book;
import com.books.DTO.Order;
import com.books.Service.BookOrderServiceImpl;
import com.google.gson.Gson;

@WebServlet("/SearchAuthorController")
public class SearchAuthorController extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {	
		
        String Name = req.getParameter("a_name");
        System.out.println(Name);
		List<Book> books  = new BookOrderServiceImpl().retriveBooksBySearchAuthor(Name);
		
		PrintWriter out = resp.getWriter();
		Gson gson = new Gson();
		
		out.println(gson.toJson(books));
	}
}