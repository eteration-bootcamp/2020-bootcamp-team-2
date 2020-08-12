# 2020 Bootcamp Team 2 - Design Pattern and Code Smell Homework

## Template Pattern

Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.

Our Template Pattern: displayPage()

Steps: 
- diplayNavbar() (same for Home Page and Profile Page)
- abstract displayBody() (differs for each page)
- displayFooter() (same for Home Page and Profile Page)

## Iterator Pattern

Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

Iterator pattern is used for accessing the visited places that stored in an array in our example.

## Code Smell

Example 1: Replace Magic Numbers with Named Constants

The pi value is used for the calculation. This constant should be direct taken.

Example 2: Choose Descriptive Names

The naming should be clear for understanding.