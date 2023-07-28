print("Welcome to Chole's Classic Coffee Shop!" )
print("Our Menu: latte, cappucino, americano, Flat white, and tea.")

name = input('Name:')
order = input('Drink:')

if 'latte' == order:
    milk = input('whole milk or skimmed milk? ')
    add_sugar = input('with sugar or without sugar? ')
    print('Hello ' + name + '! ' 'Enjoy your ' + order + ' with ' +  milk + ' ' + add_sugar +'!')

if 'cappucino' == order:
    sprinkles = input('with chocolate sprinkles or without chocolate sprinkles?')
    add_sugar = input('with sugar or without sugar? ')
    print('Hello ' + name + '! ' 'Enjoy your ' + order + ' ' + sprinkles +' ' + add_sugar)

if 'americano' == order:
    milk = input('with milk or without milk? ')
    add_sugar = input('with sugar or without sugar? ')
    print('Hello ' + name + '! ' 'Enjoy your ' + order + ' with ' +  milk + ' ' + add_sugar +'!')

if 'flat white' == order:
    milk = input('whole milk or skimmed milk? ')
    add_sugar = input('with sugar or without sugar? ')
    print('Hello ' + name + '! ' 'Enjoy your ' + order + 'with ' +  milk + ' ' + add_sugar +'!')

if 'tea' == order:
    milk = input('with milk or without milk? ')
    add_sugar = input('with sugar or without sugar? ')
    print('Hello ' + name + '! ' 'Enjoy your ' + order + 'with ' +  milk + ' ' + add_sugar +'!')