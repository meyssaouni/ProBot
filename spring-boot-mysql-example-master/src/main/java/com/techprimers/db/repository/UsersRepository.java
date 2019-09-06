package com.techprimers.db.repository;

import com.techprimers.db.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsersRepository extends JpaRepository<User, Integer> {
	 @Query(value ="select * from user u where u.mail like %?1 and u.password like %?2", nativeQuery = true)
		User findByMailPass(String mail, String password);
			
	
		
}
