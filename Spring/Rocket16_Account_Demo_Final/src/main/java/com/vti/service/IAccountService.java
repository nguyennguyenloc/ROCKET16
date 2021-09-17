package com.vti.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.vti.entity.Account;
import com.vti.form.AccountFormForCreating;
import com.vti.form.AccountFormForCreatingRegister;
import com.vti.form.AccountFormForUpdating;

public interface IAccountService extends UserDetailsService {
	public Page<Account> getAllAccount(Pageable pageable, String search);

	public Account getAccountById(short id);

	public void createAccount(AccountFormForCreating form);

	public void updateAccount(short id, AccountFormForUpdating form);

	public void deleteAccount(short id);

	public Account getAccountByUsername(String username);

	public Account getAccountByEmail(String email);

	public boolean existsByUsername(String name);

	public boolean existsByEmail(String email);

	public void createAccountRegister(AccountFormForCreatingRegister form);

	public void activeUser(String token);
	
	public void  sendConfirmUserRegistrationViaEmail(String email);

}
