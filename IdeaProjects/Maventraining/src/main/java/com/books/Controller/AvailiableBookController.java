package com.books.Controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.books.DTO.Book;
import com.books.Service.BookOrderServiceImpl;
import com.google.gson.Gson;

@WebServlet("/AvailiableBookController")
public class AvailiableBookController extends HttpServlet {
	
	static final Logger log=Logger.getLogger(AvailiableBookController.class);

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		log.info("AvailiableBookController started");
		PrintWriter out = resp.getWriter();
		
		Gson gson = new Gson();

		log.info("Getting Total Books to books list ");
		List<Book> books  = new BookOrderServiceImpl().retriveBooks();

				
		log.info("Convert java object to json object");
		out.println(gson.toJson(books));
	}
}
