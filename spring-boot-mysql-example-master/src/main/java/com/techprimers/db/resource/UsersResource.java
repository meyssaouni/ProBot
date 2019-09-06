package com.techprimers.db.resource;

import com.techprimers.db.model.User;
import com.techprimers.db.model.UserMessage;
import com.techprimers.db.repository.UsersRepository;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(value = "/rest/user")
public class UsersResource {

    @Autowired
    UsersRepository usersRepository;
    
    @Bean
	   public RestTemplate getRestTemplate() {
	      return new RestTemplate();
	   }
    
  RestTemplate restTemp;
    
  @GetMapping(value = "/auth")
    public User getUser(String mail, String password) {
       User u = usersRepository.findByMailPass(mail, password);
       System.out.println(u);
       return u;
    }
    
    @GetMapping(value = "/All")
    public List<User> getAll() {
    	
        return usersRepository.findAll();
    }

    @RequestMapping(value = "/send", method = RequestMethod.POST)
    public String sendMessage(@RequestBody UserMessage message)
    {  	
    	restTemp = new RestTemplate();
    	final	String url = "http://localhost:5005/webhooks/rest/webhook?stream=true&token= HTTP/1.1";
    		System.out.println(message);
    	
    	 HttpHeaders headers = new HttpHeaders();
    	
    	    headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));

         HttpEntity<UserMessage> entity = new HttpEntity<UserMessage>(message,headers);
        
         return restTemp.postForObject(url,entity,String.class);
    			 
    			 
    }

}
