package com.example.library.config;

import com.example.library.entity.Role;
import com.example.library.entity.User;
import com.example.library.repository.RoleRepository;
import com.example.library.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public void run(String... args) throws Exception {
        // Create roles if they don't exist
        if (roleRepository.count() == 0) {
            Role adminRole = new Role("ADMIN", "System Administrator");
            Role userRole = new Role("USER", "Regular User");
            Role librarianRole = new Role("LIBRARIAN", "Library Staff");
            
            roleRepository.save(adminRole);
            roleRepository.save(userRole);
            roleRepository.save(librarianRole);
            
            System.out.println("✅ Created default roles");
        }

        // Create test users if they don't exist
        if (userRepository.count() == 0) {
            Role adminRole = roleRepository.findByName("ADMIN").orElse(null);
            Role userRole = roleRepository.findByName("USER").orElse(null);
            
            // Create admin user
            User admin = new User();
            admin.setUsername("admin");
            admin.setPassword("admin123");
            admin.setEmail("admin@library.com");
            Set<Role> adminRoles = new HashSet<>();
            if (adminRole != null) adminRoles.add(adminRole);
            admin.setRoles(adminRoles);
            userRepository.save(admin);
            
            // Create test user
            User testUser = new User();
            testUser.setUsername("user");
            testUser.setPassword("user123");
            testUser.setEmail("user@library.com");
            Set<Role> testUserRoles = new HashSet<>();
            if (userRole != null) testUserRoles.add(userRole);
            testUser.setRoles(testUserRoles);
            userRepository.save(testUser);
            
            System.out.println("✅ Created test users:");
            System.out.println("   👤 Username: admin, Password: admin123");
            System.out.println("   👤 Username: user, Password: user123");
        }
    }
}
