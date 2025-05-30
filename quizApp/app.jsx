import React, { useState, useEffect, useCallback, useRef } from 'react';

// Mock data for languages, topics, and questions
// In a real application, this data would come from a backend database.
// To add more questions, expand the 'questions' array following the existing structure.
const quizData = {
  languages: [
    { id: 'c', name: 'C' },
    { id: 'cpp', name: 'C++' },
    { id: 'python', name: 'Python' },
  ],
  topics: {
    c: [
      { id: 'c_basics', name: 'C Basics' },
      { id: 'c_pointers', name: 'Pointers' },
      { id: 'c_arrays', name: 'Arrays' },
      { id: 'c_strings', name: 'Strings' },
      { id: 'c_functions', name: 'Functions' },
      { id: 'c_structs_unions', name: 'Structs and Unions' },
      { id: 'c_file_io', name: 'File I/O' },
      { id: 'c_memory_management', name: 'Memory Management' },
      { id: 'c_preprocessor', name: 'Preprocessor Directives' },
      { id: 'c_data_structures', name: 'Data Structures' },
    ],
    cpp: [
      { id: 'cpp_basics', name: 'C++ Basics' },
      { id: 'cpp_oop', name: 'Object-Oriented Programming' },
      { id: 'cpp_stl', name: 'Standard Template Library (STL)' },
      { id: 'cpp_pointers_references', name: 'Pointers and References' },
      { id: 'cpp_inheritance_polymorphism', name: 'Inheritance and Polymorphism' },
      { id: 'cpp_templates', name: 'Templates' },
      { id: 'cpp_exceptions', name: 'Exception Handling' },
      { id: 'cpp_file_io', name: 'File I/O' },
      { id: 'cpp_memory_management', name: 'Memory Management' },
      { id: 'cpp_smart_pointers', name: 'Smart Pointers' },
    ],
    python: [
      { id: 'py_basics', name: 'Python Basics' },
      { id: 'py_data_types', name: 'Data Types' },
      { id: 'py_control_flow', name: 'Control Flow' },
      { id: 'py_functions', name: 'Functions' },
      { id: 'py_oop', name: 'Object-Oriented Programming' },
      { id: 'py_modules', name: 'Modules and Packages' },
      { id: 'py_error_handling', name: 'Error Handling' },
      { id: 'py_file_io', name: 'File I/O' },
      { id: 'py_data_structures', name: 'Data Structures' },
      { id: 'py_decorators', name: 'Decorators' },
      { id: 'py_generators', name: 'Generators' },
      { id: 'py_concurrency', name: 'Concurrency' },
      { id: 'py_regex', name: 'Regular Expressions' },
      { id: 'py_web', name: 'Web Development Basics' },
      { id: 'py_testing', name: 'Testing' },
      { id: 'py_databases', name: 'Database Interaction' },
      { id: 'py_networking', name: 'Networking' },
      { id: 'py_algorithms', name: 'Algorithms' },
      { id: 'py_data_science', name: 'Data Science Basics' },
      { id: 'py_gui', name: 'GUI Programming' },
    ],
  },
  questions: [
    // --- C Questions (Example Set) ---
    {
      id: 'c_q1', language: 'c', topic: 'c_basics',
      questionText: 'What is the correct way to declare a constant integer in C?',
      options: ['const int x = 10;', 'int const x = 10;', '#define x 10', 'All of the above'],
      correctAnswer: 'All of the above',
    },
    {
      id: 'c_q2', language: 'c', topic: 'c_basics',
      questionText: 'Which function is used to output data to the console in C?',
      options: ['cout', 'printf()', 'print', 'display()'],
      correctAnswer: 'printf()',
    },
    {
      id: 'c_q3', language: 'c', topic: 'c_basics',
      questionText: 'What is the entry point of a C program?',
      options: ['start()', 'run()', 'main()', 'begin()'],
      correctAnswer: 'main()',
    },
    {
      id: 'c_q4', language: 'c', topic: 'c_basics',
      questionText: 'Which header file is required for `malloc()` and `free()` functions?',
      options: ['<stdio.h>', '<stdlib.h>', '<string.h>', '<math.h>'],
      correctAnswer: '<stdlib.h>',
    },
    {
      id: 'c_q5', language: 'c', topic: 'c_basics',
      questionText: 'What does `sizeof()` operator return?',
      options: ['The value of the variable', 'The memory address of the variable', 'The size of the variable in bytes', 'The type of the variable'],
      correctAnswer: 'The size of the variable in bytes',
    },
    {
      id: 'c_q6', language: 'c', topic: 'c_pointers',
      questionText: 'What is a pointer in C?',
      options: ['A variable that stores a memory address', 'A variable that stores a value', 'A function that returns a value', 'A data type'],
      correctAnswer: 'A variable that stores a memory address',
    },
    {
      id: 'c_q7', language: 'c', topic: 'c_pointers',
      questionText: 'What does the `*` operator do when used with a pointer?',
      options: ['Takes the address of a variable', 'Dereferences a pointer (accesses the value at the address)', 'Multiplies two numbers', 'Declares a pointer'],
      correctAnswer: 'Dereferences a pointer (accesses the value at the address)',
    },
    {
      id: 'c_q8', language: 'c', topic: 'c_pointers',
      questionText: 'What is a NULL pointer?',
      options: ['A pointer that points to an invalid memory location', 'A pointer that points to the first memory location', 'A pointer that has been initialized to zero', 'A pointer that cannot be dereferenced'],
      correctAnswer: 'A pointer that has been initialized to zero',
    },
    {
      id: 'c_q9', language: 'c', topic: 'c_pointers',
      questionText: 'Which of the following is true about pointer arithmetic?',
      options: ['You can add or subtract integers from pointers', 'You can multiply pointers', 'You can divide pointers', 'You can only assign pointers to other pointers'],
      correctAnswer: 'You can add or subtract integers from pointers',
    },
    {
      id: 'c_q10', language: 'c', topic: 'c_pointers',
      questionText: 'What is the purpose of `void *` in C?',
      options: ['It declares a pointer to a void function', 'It declares a pointer that can point to any data type', 'It declares a pointer that points to nothing', 'It is an invalid pointer declaration'],
      correctAnswer: 'It declares a pointer that can point to any data type',
    },
    // Add more C questions for other topics here...
    { id: 'c_q11', language: 'c', topic: 'c_arrays', questionText: 'How do you declare an array of 5 integers in C?', options: ['int arr[5];', 'array<int> arr(5);', 'int arr = new int[5];', 'list<int> arr(5);'], correctAnswer: 'int arr[5];' },
    { id: 'c_q12', language: 'c', topic: 'c_arrays', questionText: 'What is the index of the first element in a C array?', options: ['1', '0', 'Any integer', 'Depends on declaration'], correctAnswer: '0' },
    { id: 'c_q13', language: 'c', topic: 'c_strings', questionText: 'Which function is used to copy one string to another in C?', options: ['strcopy()', 'strcpy()', 'string_copy()', 'copy_str()'], correctAnswer: 'strcpy()' },
    { id: 'c_q14', language: 'c', topic: 'c_functions', questionText: 'What is a function prototype in C?', options: ['The function definition', 'A declaration of a function that specifies its name, return type, and parameters', 'The call to a function', 'The memory address of a function'], correctAnswer: 'A declaration of a function that specifies its name, return type, and parameters' },
    { id: 'c_q15', language: 'c', topic: 'c_structs_unions', questionText: 'What is the difference between a `struct` and a `union` in C?', options: ['`struct` members share memory, `union` members have separate memory', '`union` members share memory, `struct` members have separate memory', 'No difference', '`struct` is for C++, `union` is for C'], correctAnswer: '`union` members share memory, `struct` members have separate memory' },


    // --- C++ Questions (Example Set) ---
    {
      id: 'cpp_q1', language: 'cpp', topic: 'cpp_basics',
      questionText: 'Which keyword is used to define a class in C++?',
      options: ['struct', 'object', 'class', 'type'],
      correctAnswer: 'class',
    },
    {
      id: 'cpp_q2', language: 'cpp', topic: 'cpp_basics',
      questionText: 'Which operator is used for dynamic memory allocation in C++?',
      options: ['malloc', 'calloc', 'new', 'alloc'],
      correctAnswer: 'new',
    },
    {
      id: 'cpp_q3', language: 'cpp', topic: 'cpp_basics',
      questionText: 'What is the purpose of `std::cout`?',
      options: ['To read input from the console', 'To write output to the console', 'To declare a variable', 'To perform mathematical operations'],
      correctAnswer: 'To write output to the console',
    },
    {
      id: 'cpp_q4', language: 'cpp', topic: 'cpp_basics',
      questionText: 'Which of the following is a correct way to include a header file in C++?',
      options: ['#include "header.h"', '#include <header.h>', 'Both A and B', 'import header.h'],
      correctAnswer: 'Both A and B',
    },
    {
      id: 'cpp_q5', language: 'cpp', topic: 'cpp_basics',
      questionText: 'What is the default access specifier for members of a class in C++?',
      options: ['public', 'private', 'protected', 'none'],
      correctAnswer: 'private',
    },
    {
      id: 'cpp_q6', language: 'cpp', topic: 'cpp_oop',
      questionText: 'Which OOP concept allows a class to inherit properties and methods from another class?',
      options: ['Encapsulation', 'Polymorphism', 'Abstraction', 'Inheritance'],
      correctAnswer: 'Inheritance',
    },
    {
      id: 'cpp_q7', language: 'cpp', topic: 'cpp_oop',
      questionText: 'What is method overloading in C++?',
      options: ['Defining multiple methods with the same name but different parameters', 'Defining multiple methods with the same name and same parameters', 'Overriding a method in a derived class', 'Defining a method that takes no arguments'],
      correctAnswer: 'Defining multiple methods with the same name but different parameters',
    },
    {
      id: 'cpp_q8', language: 'cpp', topic: 'cpp_oop',
      questionText: 'What is a virtual function used for in C++?',
      options: ['To make a function non-overridable', 'To achieve runtime polymorphism', 'To define a function that does nothing', 'To make a function static'],
      correctAnswer: 'To achieve runtime polymorphism',
    },
    {
      id: 'cpp_q9', language: 'cpp', topic: 'cpp_oop',
      questionText: 'Which access specifier allows members to be accessed within the class and by derived classes?',
      options: ['public', 'private', 'protected', 'default'],
      correctAnswer: 'protected',
    },
    {
      id: 'cpp_q10', language: 'cpp', topic: 'cpp_oop',
      questionText: 'What is a constructor in C++?',
      options: ['A special function that destroys an object', 'A special function that initializes an object', 'A regular member function', 'A function that returns a value'],
      correctAnswer: 'A special function that initializes an object',
    },
    // Add more C++ questions for other topics here...
    { id: 'cpp_q11', language: 'cpp', topic: 'cpp_stl', questionText: 'Which STL container provides dynamic arrays?', options: ['`std::list`', '`std::vector`', '`std::map`', '`std::set`'], correctAnswer: '`std::vector`' },
    { id: 'cpp_q12', language: 'cpp', topic: 'cpp_pointers_references', questionText: 'What is the main difference between a pointer and a reference in C++?', options: ['Pointers can be null, references cannot', 'References can be reassigned, pointers cannot', 'Pointers are safer than references', 'No significant difference'], correctAnswer: 'Pointers can be null, references cannot' },
    { id: 'cpp_q13', language: 'cpp', topic: 'cpp_inheritance_polymorphism', questionText: 'What is a pure virtual function in C++?', options: ['A function that can be overridden', 'A virtual function that must be implemented by derived classes', 'A function that takes no arguments', 'A function that returns void'], correctAnswer: 'A virtual function that must be implemented by derived classes' },
    { id: 'cpp_q14', language: 'cpp', topic: 'cpp_templates', questionText: 'What is the purpose of templates in C++?', options: ['To create generic functions and classes that work with any data type', 'To define constants', 'To handle exceptions', 'To manage memory'], correctAnswer: 'To create generic functions and classes that work with any data type' },
    { id: 'cpp_q15', language: 'cpp', topic: 'cpp_exceptions', questionText: 'Which keywords are used for exception handling in C++?', options: ['`try`, `catch`, `finally`', '`try`, `except`, `else`', '`try`, `catch`, `throw`', '`begin`, `end`, `error`'], correctAnswer: '`try`, `catch`, `throw`' },


    // --- Python Questions (Example Set) ---
    {
      id: 'py_q1', language: 'python', topic: 'py_basics',
      questionText: 'Which keyword is used to define a function in Python?',
      options: ['function', 'def', 'func', 'define'],
      correctAnswer: 'def',
    },
    {
      id: 'py_q2', language: 'python', topic: 'py_basics',
      questionText: 'What is the output of `print(type([]))` in Python?',
      options: ['<class \'list\'>', '<class \'array\'>', '<class \'tuple\'>', '<class \'dict\'>'],
      correctAnswer: '<class \'list\'>',
    },
    {
      id: 'py_q3', language: 'python', topic: 'py_basics',
      questionText: 'Which of the following is NOT a valid variable name in Python?',
      options: ['_my_var', 'myVar', '2myvar', 'my_var2'],
      correctAnswer: '2myvar',
    },
    {
      id: 'py_q4', language: 'python', topic: 'py_basics',
      questionText: 'How do you comment out multiple lines in Python?',
      options: ['// This is a comment', '/* This is a comment */', 'Using triple quotes (single or double)', '# This is a comment'],
      correctAnswer: 'Using triple quotes (single or double)',
    },
    {
      id: 'py_q5', language: 'python', topic: 'py_basics',
      questionText: 'What is the correct way to import a module named `math` in Python?',
      options: ['include math', 'import math', 'use math', 'require math'],
      correctAnswer: 'import math',
    },
    {
      id: 'py_q6', language: 'python', topic: 'py_data_types',
      questionText: 'Which of the following is an immutable data type in Python?',
      options: ['list', 'dictionary', 'set', 'tuple'],
      correctAnswer: 'tuple',
    },
    {
      id: 'py_q7', language: 'python', topic: 'py_data_types',
      questionText: 'What is the result of `3 + 2 * 4` in Python?',
      options: ['20', '11', '14', 'Error'],
      correctAnswer: '11',
    },
    {
      id: 'py_q8', language: 'python', topic: 'py_data_types',
      questionText: 'Which method is used to add an element to the end of a list in Python?',
      options: ['insert()', 'add()', 'append()', 'put()'],
      correctAnswer: 'append()',
    },
    {
      id: 'py_q9', language: 'python', topic: 'py_data_types',
      questionText: 'How do you create an empty dictionary in Python?',
      options: ['{}', 'dict()', 'Both A and B', '[]'],
      correctAnswer: 'Both A and B',
    },
    {
      id: 'py_q10', language: 'python', topic: 'py_data_types',
      questionText: 'What is the purpose of the `len()` function in Python?',
      options: ['To convert to lowercase', 'To check if a variable is empty', 'To get the length of an object', 'To concatenate strings'],
      correctAnswer: 'To get the length of an object',
    },
    {
      id: 'py_q11', language: 'python', topic: 'py_control_flow',
      questionText: 'Which loop is used to iterate over a sequence (like a list or tuple) in Python?',
      options: ['while loop', 'do-while loop', 'for loop', 'repeat loop'],
      correctAnswer: 'for loop',
    },
    {
      id: 'py_q12', language: 'python', topic: 'py_control_flow',
      questionText: 'What does the `break` statement do in a loop?',
      options: ['Skips the current iteration', 'Exits the loop entirely', 'Restarts the loop', 'Continues to the next loop'],
      correctAnswer: 'Exits the loop entirely',
    },
    {
      id: 'py_q13', language: 'python', topic: 'py_control_flow',
      questionText: 'Which statement is used for conditional execution in Python?',
      options: ['switch', 'case', 'if-elif-else', 'choose'],
      correctAnswer: 'if-elif-else',
    },
    {
      id: 'py_q14', language: 'python', topic: 'py_control_flow',
      questionText: 'What is the purpose of the `pass` statement in Python?',
      options: ['It is used to skip a block of code', 'It is a null operation; nothing happens when it executes', 'It is used to exit a function', 'It is used to define a placeholder variable'],
      correctAnswer: 'It is a null operation; nothing happens when it executes',
    },
    {
      id: 'py_q15', language: 'python', topic: 'py_control_flow',
      questionText: 'How do you write an `else if` condition in Python?',
      options: ['else if', 'elif', 'elseif', 'else_if'],
      correctAnswer: 'elif',
    },
    {
      id: 'py_q16', language: 'python', topic: 'py_functions',
      questionText: 'What is a lambda function in Python?',
      options: ['A function that takes no arguments', 'An anonymous function', 'A function that returns another function', 'A function defined inside another function'],
      correctAnswer: 'An anonymous function',
    },
    {
      id: 'py_q17', language: 'python', topic: 'py_functions',
      questionText: 'What is the purpose of the `return` statement in a function?',
      options: ['To print a value to the console', 'To exit the function and send a value back to the caller', 'To define a variable', 'To call another function'],
      correctAnswer: 'To exit the function and send a value back to the caller',
    },
    {
      id: 'py_q18', language: 'python', topic: 'py_functions',
      questionText: 'Which type of argument allows passing a variable number of non-keyword arguments to a function?',
      options: ['Keyword arguments', 'Default arguments', 'Arbitrary arguments (*args)', 'Positional arguments'],
      correctAnswer: 'Arbitrary arguments (*args)',
    },
    {
      id: 'py_q19', language: 'python', topic: 'py_functions',
      questionText: 'What is a docstring in Python?',
      options: ['A single-line comment', 'A string literal used to document a module, class, function, or method', 'A type of variable', 'A special keyword for functions'],
      correctAnswer: 'A string literal used to document a module, class, function, or method',
    },
    {
      id: 'py_q20', language: 'python', topic: 'py_functions',
      questionText: 'What is recursion in Python?',
      options: ['A function calling itself', 'A function that never ends', 'A function that takes no arguments', 'A function that returns a boolean value'],
      correctAnswer: 'A function calling itself',
    },
    {
      id: 'py_q21', language: 'python', topic: 'py_oop',
      questionText: 'What does OOP stand for?',
      options: ['Object-Oriented Programming', 'Ordered Object Protocol', 'Original Object Paradigm', 'Optimal Object Processing'],
      correctAnswer: 'Object-Oriented Programming',
    },
    {
      id: 'py_q22', language: 'python', topic: 'py_oop',
      questionText: 'Which method is automatically called when an object is created from a class in Python?',
      options: ['`__new__`', '`__init__`', '`__call__`', '`__create__`'],
      correctAnswer: '`__init__`',
    },
    {
      id: 'py_q23', language: 'python', topic: 'py_oop',
      questionText: 'What is encapsulation in OOP?',
      options: ['Hiding the implementation details and exposing only the necessary functionalities', 'Creating multiple objects from a single class', 'Allowing objects to take on many forms', 'Inheriting properties from a parent class'],
      correctAnswer: 'Hiding the implementation details and exposing only the necessary functionalities',
    },
    {
      id: 'py_q24', language: 'python', topic: 'py_oop',
      questionText: 'What is polymorphism in Python?',
      options: ['The ability of an object to take on many forms', 'The process of creating multiple instances of a class', 'The concept of bundling data and methods that operate on the data within one unit', 'The mechanism of creating a new class from an existing class'],
      correctAnswer: 'The ability of an object to take on many forms',
    },
    {
      id: 'py_q25', language: 'python', topic: 'py_oop',
      questionText: 'Which keyword is used to refer to the instance of a class in Python?',
      options: ['`this`', '`self`', '`me`', '`instance`'],
      correctAnswer: '`self`',
    },
    // Add more Python questions for other topics here...
    { id: 'py_q26', language: 'python', topic: 'py_modules', questionText: 'How do you install a Python package using pip?', options: ['`pip install package_name`', '`install package_name`', '`python install package_name`', '`get package_name`'], correctAnswer: '`pip install package_name`' },
    { id: 'py_q27', language: 'python', topic: 'py_error_handling', questionText: 'Which block is used to handle exceptions in Python?', options: ['`try-catch`', '`try-except`', '`try-finally`', '`try-error`'], correctAnswer: '`try-except`' },
    { id: 'py_q28', language: 'python', topic: 'py_file_io', questionText: 'Which mode is used to open a file for writing, creating it if it does not exist, and truncating it if it does?', options: ['`"r"`', '`"a"`', '`"w"`', '`"x"`'], correctAnswer: '`"w"`' },
    { id: 'py_q29', language: 'python', topic: 'py_data_structures', questionText: 'What is the primary characteristic of a `set` in Python?', options: ['Ordered and mutable', 'Unordered and allows duplicate elements', 'Ordered and allows duplicate elements', 'Unordered and contains unique elements'], correctAnswer: 'Unordered and contains unique elements' },
    { id: 'py_q30', language: 'python', topic: 'py_decorators', questionText: 'What is the purpose of a decorator in Python?', options: ['To modify a function without changing its source code', 'To define a class method', 'To create a new function', 'To handle errors'], correctAnswer: 'To modify a function without changing its source code' },
  ],
};

// Helper function to shuffle an array
const shuffleArray = (array) => {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
};

// ErrorBoundary component to catch and display errors gracefully
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex items-center justify-center min-h-screen bg-red-100 text-red-800 p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">Something went wrong.</h1>
          {this.state.error && <p className="mt-2">{this.state.error.toString()}</p>}
          {this.state.errorInfo && (
            <details className="mt-4 whitespace-pre-wrap text-sm">
              {this.state.errorInfo.componentStack}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

// Language Selection Component
const LanguageSelection = ({ onSelectLanguage }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 font-inter">
          Choose a Language
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {quizData.languages.map((lang) => (
            <button
              key={lang.id}
              onClick={() => onSelectLanguage(lang.id)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Topic Selection Component
const TopicSelection = ({ selectedLanguage, onSelectTopic, onBack }) => {
  const topics = quizData.topics[selectedLanguage] || [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-teal-600 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-2xl w-full">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 font-inter">
          Select a Topic for {selectedLanguage.toUpperCase()}
        </h1>
        {topics.length === 0 ? (
          <p className="text-gray-600 text-lg">No topics available for this language yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-300 text-sm sm:text-base"
              >
                {topic.name}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={onBack}
          className="mt-6 bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
        >
          Back to Languages
        </button>
      </div>
    </div>
  );
};

// Quiz Component
const Quiz = ({ selectedLanguage, selectedTopic, onQuizComplete, onBackToTopics }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  // Use useRef to store previous quiz question IDs. This value is mutable
  // and changes to it do not trigger re-renders, making it suitable for
  // memoized functions without causing infinite loops.
  const previousQuizQuestionIdsRef = useRef({});

  // Function to get 5 unique questions for the quiz
  const getUniqueQuestions = useCallback(() => {
    const allQuestionsForTopic = quizData.questions.filter(
      (q) => q.language === selectedLanguage && q.topic === selectedTopic
    );

    // Get previously asked questions for this topic from the ref
    const previouslyAskedIds = previousQuizQuestionIdsRef.current[selectedTopic] || [];

    // Filter out previously asked questions if possible
    let availableQuestions = allQuestionsForTopic.filter(
      (q) => !previouslyAskedIds.includes(q.id)
    );

    // If not enough unique questions after filtering, reset and use all questions
    if (availableQuestions.length < 5) {
      console.warn("Not enough new questions. Reusing some questions or resetting history.");
      availableQuestions = allQuestionsForTopic;
      // Clear history for this topic in the ref
      previousQuizQuestionIdsRef.current = {
        ...previousQuizQuestionIdsRef.current,
        [selectedTopic]: [] // Clear history for this topic
      };
    }

    // Shuffle and pick 5 questions
    const shuffledQuestions = shuffleArray([...availableQuestions]);
    const selectedFive = shuffledQuestions.slice(0, 5);

    // Store the IDs of the questions selected for this quiz in the ref
    previousQuizQuestionIdsRef.current = {
      ...previousQuizQuestionIdsRef.current,
      [selectedTopic]: selectedFive.map(q => q.id)
    };

    setQuizQuestions(selectedFive);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setScore(0);
  }, [selectedLanguage, selectedTopic]); // Dependencies are only props that change

  // This effect runs only when selectedLanguage or selectedTopic changes,
  // triggering getUniqueQuestions which is stable due to useCallback.
  useEffect(() => {
    getUniqueQuestions();
  }, [getUniqueQuestions]); // getUniqueQuestions is stable due to useCallback dependencies

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;

    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.questionText,
        userAnswer: selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: isCorrect,
      },
    ]);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex < 4) { // 5 questions, so indices 0-4
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      // Quiz finished
      onQuizComplete(quizQuestions, [...userAnswers, { // Pass updated userAnswers including current question
        question: currentQuestion.questionText,
        userAnswer: selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect: isCorrect,
      }], score + (isCorrect ? 1 : 0)); // Pass final score
    }
  };

  if (quizQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-2xl">
        Loading questions...
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-3xl w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center font-inter">
          {selectedLanguage.toUpperCase()} Quiz: {quizData.topics[selectedLanguage]?.find(t => t.id === selectedTopic)?.name}
        </h2>
        <div className="text-lg text-gray-700 mb-4">
          Question {currentQuestionIndex + 1} of 5
        </div>
        <div className="bg-gray-100 p-6 rounded-lg mb-6 shadow-inner">
          {/* Added break-words to ensure long question text wraps */}
          <p className="text-xl font-semibold text-gray-900 mb-4 break-words">
            {currentQuestion.questionText}
          </p>
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                // Disable options after one is selected for the current question
                disabled={selectedOption !== null}
                className={`w-full text-left p-3 rounded-md border-2 transition duration-200 ease-in-out
                  ${selectedOption === option
                    ? (option === currentQuestion.correctAnswer
                        ? 'bg-green-100 border-green-500 text-green-800'
                        : 'bg-red-100 border-red-500 text-red-800')
                    : 'bg-white border-gray-300 text-gray-800 hover:bg-blue-50 hover:border-blue-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-400
                  break-words text-wrap ${selectedOption !== null ? 'cursor-not-allowed' : ''}`}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption && (
            <div className={`mt-4 p-3 rounded-md text-center font-semibold
              ${selectedOption === currentQuestion.correctAnswer ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
              {selectedOption === currentQuestion.correctAnswer ? 'Correct!' : `Incorrect. Correct answer: ${currentQuestion.correctAnswer}`}
            </div>
          )}
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={onBackToTopics}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-300"
          >
            Back to Topics
          </button>
          <button
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            className={`bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300
              ${selectedOption === null ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {currentQuestionIndex === 4 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

// Results Component
const Results = ({ quizQuestions, userAnswers, score, onPlayAgain, onBackToTopics, onBackToLanguages }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-600 p-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-4xl w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6 text-center font-inter">
          Quiz Results
        </h2>
        <p className="text-2xl font-bold text-center mb-8 text-gray-700">
          You scored <span className="text-green-600">{score}</span> out of <span className="text-blue-600">5</span>!
        </p>

        <div className="space-y-6 mb-8">
          {userAnswers.map((answer, index) => (
            <div
              key={index}
              className={`p-5 rounded-lg shadow-md ${answer.isCorrect ? 'bg-green-50 border-l-4 border-green-500' : 'bg-red-50 border-l-4 border-red-500'}`}
            >
              {/* Added break-words to ensure long question text wraps in results */}
              <p className="text-lg font-semibold text-gray-900 mb-2 break-words">
                Question {index + 1}: {answer.question}
              </p>
              {/* Added break-words to ensure long user answer text wraps in results */}
              <p className="text-gray-700 break-words">
                Your Answer: <span className={`${answer.isCorrect ? 'text-green-700 font-medium' : 'text-red-700 font-medium'}`}>
                  {answer.userAnswer || "No answer selected"}
                </span>
                {!answer.isCorrect && (
                  <span className="ml-2 text-gray-500"> (Incorrect)</span>
                )}
              </p>
              {!answer.isCorrect && (
                <p className="text-gray-700 break-words">
                  Correct Answer: <span className="text-blue-700 font-medium">{answer.correctAnswer}</span>
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onPlayAgain}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto"
          >
            Play Again (Same Topic)
          </button>
          <button
            onClick={onBackToTopics}
            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-full sm:w-auto"
          >
            Choose Another Topic
          </button>
          <button
            onClick={onBackToLanguages}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300 w-full sm:w-auto"
          >
            Change Language
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState('languageSelection'); // 'languageSelection', 'topicSelection', 'quiz', 'results'
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  // Handlers for navigation
  const handleSelectLanguage = (langId) => {
    setSelectedLanguage(langId);
    setCurrentView('topicSelection');
  };

  const handleSelectTopic = (topicId) => {
    setSelectedTopic(topicId);
    setCurrentView('quiz');
  };

  const handleQuizComplete = (questions, answers, finalScore) => {
    setQuizQuestions(questions);
    setUserAnswers(answers);
    setScore(finalScore);
    setCurrentView('results');
  };

  const handleBackToTopics = () => {
    setCurrentView('topicSelection');
    setQuizQuestions([]);
    setUserAnswers([]);
    setScore(0);
  };

  const handleBackToLanguages = () => {
    setSelectedLanguage(null);
    setSelectedTopic(null);
    setCurrentView('languageSelection');
    setQuizQuestions([]);
    setUserAnswers([]);
    setScore(0);
  };

  const handlePlayAgain = () => {
    // This will trigger the Quiz component to re-fetch questions for the same topic
    setCurrentView('quiz');
    setQuizQuestions([]); // Clear current quiz questions to force re-fetch
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <div className="font-inter antialiased">
      {/* Tailwind CSS CDN */}
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />

      {currentView === 'languageSelection' && (
        <LanguageSelection onSelectLanguage={handleSelectLanguage} />
      )}

      {currentView === 'topicSelection' && (
        <TopicSelection
          selectedLanguage={selectedLanguage}
          onSelectTopic={handleSelectTopic}
          onBack={handleBackToLanguages}
        />
      )}

      {currentView === 'quiz' && (
        <Quiz
          selectedLanguage={selectedLanguage}
          selectedTopic={selectedTopic}
          onQuizComplete={handleQuizComplete}
          onBackToTopics={handleBackToTopics}
        />
      )}

      {currentView === 'results' && (
        <Results
          quizQuestions={quizQuestions}
          userAnswers={userAnswers}
          score={score}
          onPlayAgain={handlePlayAgain}
          onBackToTopics={handleBackToTopics}
          onBackToLanguages={handleBackToLanguages}
        />
      )}
    </div>
  );
}
