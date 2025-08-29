package com.example.library.service;

import com.example.library.entity.User;
import com.example.library.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public User authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }

    public boolean isValidToken(String token) {
        // Simple token validation for demo
        return token != null && token.startsWith("demo-token-");
    }

    public String extractUsernameFromToken(String token) {
        if (token != null && token.startsWith("demo-token-")) {
            return token.substring("demo-token-".length());
        }
        return null;
    }
}
