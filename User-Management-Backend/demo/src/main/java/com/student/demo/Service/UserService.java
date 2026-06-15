package com.student.demo.Service;

import com.student.demo.Dto.UserDto;

import java.util.List;

public interface UserService {

    UserDto  createUser(UserDto userDto);

    UserDto getUserById(Long id);

    List<UserDto> getAllUsers();

    UserDto updateUser(Long id, UserDto userDto);

    void deleteUser(Long id);
}
