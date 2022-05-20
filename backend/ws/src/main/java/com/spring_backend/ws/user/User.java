package com.spring_backend.ws.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonView;
import com.spring_backend.ws.shared.Views;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
@Entity
public class User implements UserDetails {
	
	@Id
	@GeneratedValue
	private long id;

	@Size(min=4, max=255)
	@UniqueUsername
	@NotNull(message = "{deneme.constraints.username.NotNull.message}")
	@JsonView(Views.Base.class)
	private String username;
	
	@NotNull(message = "{deneme.constraints.displayName.NotNull.message}")
	@JsonView(Views.Base.class)
	private String displayName;

	@NotNull(message = "{deneme.constraints.password.NotNull.message}")
	@Size(min = 6, max = 255)
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$", message = "{deneme.constraints.password.Pattern.message}")
	@JsonView(Views.Sensitive.class)
	private String password;

	@JsonView(Views.Base.class)
	private String image;

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return AuthorityUtils.createAuthorityList("Role_ user");}


	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}
}
