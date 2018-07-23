package com.books.DTO;

public class Book {
	private int bookId;
	private String bookName;
	private String bookAuthor;
	private int bookUnitPrice;
	private int BookAvailable;
	private String BookLink;
	public String getBookLink() {
		return BookLink;
	}
	public void setBookLink(String bookLink) {
		BookLink = bookLink;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getBookAuthor() {
		return bookAuthor;
	}
	public void setBookAuthor(String bookAuthor) {
		this.bookAuthor = bookAuthor;
	}
	public int getBookUnitPrice() {
		return bookUnitPrice;
	}
	public void setBookUnitPrice(int bookUnitPrice) {
		this.bookUnitPrice = bookUnitPrice;
	}
	public int getBookAvailable() {
		return BookAvailable;
	}
	public void setBookAvailable(int BookAvailable) {
		this.BookAvailable = BookAvailable;
	}
}
