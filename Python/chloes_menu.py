'''
Project 2 - Menu

Back to Chloe's Coffee Shop...

Chloe introduces a variety of cakes on different days to keep
the customers interested.
Write an app that allows her to add a new item or remove an old
item from her menu and prints out the revised menu in a user-friendly
format.

Your app must:
1) Create a list with the identifier "cakes" containing 3 cakes
    (in alphabetical order)
2) Print out the current cake menu
3) Offer Chloe the option to add or remove an item
4) If she wishes to add an item:
    - ask what she wants to add
    - add it to the menu, keeping the menu in alphabetical order
5) If she removes an item:
    - ask which item she wants to remove
    - check that this item exists, giving an appropriate error
        message if it doesn't exist
    - remove the item from the menu list
    - print out which item has been removed from the menu
6) Print out the updated menu
7) Ask if she wants to make any more changes
8) If she wants to make further changes, run the program again
9) If she does not want to make further changes, print an
    appropriate exit message
'''

print('Hey Chloe! This app will allow you to customize your menu!')
      
#cakes list
cakes = ['Carrot', 'Cheese', 'Pound']
for cake in cakes:
    print(cake + ' cake')

# add or remove item to list
while True:
    prompt = input('Enter A to add and R to remove an item in your list')

#add item
    if prompt == 'A':
        while True:
            add_item = input('Please enter the item you would like to add.')        
            cakes.append(add_item)

            another_item = input('Would you like to add another item? (Y for yes or N for no)')
     
            if another_item == 'N':
                break


#remove item
    
    if prompt == 'R':
        while True: 
            remove_item = input('Please enter the item you would like to remove.')
            if remove_item in cakes:         
                cakes.remove(remove_item)
            else:
                print('This item is not currently on your menu.')

            another_item = input('Would you like to remove another item? (Y for yes or N for no)')
            if another_item == 'N':
                break

    close = input(' Would you like to quit the program (Y for yes or N for no)?')
    if close == 'Y':
        break

            
                             


for cake in cakes:
    print(cake + ' cake')

