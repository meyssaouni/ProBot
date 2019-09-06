package com.techprimers.db.model;

public class UserMessage {
	
	public String sender;
	public String message;
	
	
	
	public UserMessage() {
		super();
		// TODO Auto-generated constructor stub
	}



	public UserMessage(String sender, String message) {
		super();
		this.sender = sender;
		this.message = message;
	}



	public String getSender() {
		return sender;
	}



	public void setSender(String sender) {
		this.sender = sender;
	}



	public String getMessage() {
		return message;
	}



	public void setMessage(String message) {
		this.message = message;
	}
	

	
	
}
