package com.spring_backend.ws.auth;

import com.fasterxml.jackson.annotation.JsonView;
import com.spring_backend.ws.shared.CurrentUser;
import com.spring_backend.ws.shared.Views;
import com.spring_backend.ws.user.User;
import com.spring_backend.ws.user.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;


@RestController
public class AuthController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/api/1.0/auth")
    @JsonView(Views.Base.class)
    ResponseEntity<?> handleAuthentication(@CurrentUser User user) {

        return ResponseEntity.ok(user);
    }
}
