//package com.mightyjava.securityconfig;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@EnableWebSecurity
//public class SecurityConfigucation extends WebSecurityConfigurerAdapter {
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication()
//                .withUser("parth")
//                .password("parth")
//                .roles("ADMIN")
//                .and()
//                .withUser("mitesh")
//                .password("mitesh")
//                .roles("MANAGER")
//                .and()
//                .withUser("dhaval")
//                .password("dhaval")
//                .roles("COUNSELOR")
//                .and()
//                .withUser("kirtan")
//                .password("kirtan")
//                .roles("STUDENT");
//    }
//
//    @Bean
//    PasswordEncoder getPasswordEncoder() {
//        return NoOpPasswordEncoder.getInstance();
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests().antMatchers("/").permitAll().antMatchers("/admin/**").hasRole("ADMIN")
//                .antMatchers("/manage/**").hasAnyRole("MANAGER", "ADMIN")
//                .antMatchers("/counselor/").hasAnyRole("COUNSELOR", "ADMIN")
//                .antMatchers("/student").hasAnyRole("STUDENT", "ADMIN");
//    }
//}
