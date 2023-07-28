'''
Coding Challenge 5 - Guess the number!

Write a program that asks the user to guess a number between 1 and 10.

The game really is that simple! The user is just guessing a number.

1) Declare a variable with the identifier 'num' and make it equal to
any number between 1 and 10 (inclusive).
2) Create a function called 'validate' that will check that the user's
input is actually an integer.
    - the validate function will have 1 parameter:
        a string for the prompt
    - the user input will need to be in the validate function
    - the validate function will not exit until the user enters
        valid input
3) Create a function called 'inRange' that will check that the user's
input is within the required range (from 1 to 10 inclusive).
    - the inRange function will have 1 parameter:
        the user's number
    - if the number is outside the required range the program will
        go back to the validation stage
4) Loop the program until the user guesses the number correctly.
5) Print out a suitable message to indicate success.
'''
def validate(prompt):
    while True:
        try:
            num = int(input(prompt))
            return num
        except:
            print('you did not type an integer')
        
user_num = validate('Type a number between 1 and 10')

def inRange(user_num):
    if user_num < 0 or user_num > 10:
        print('You typed a number out of range')
    else:
        print(f'you typed {user_num}')

inRange(user_num)

        
