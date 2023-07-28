print('Welcome to Random Bus Company!')
print('Please follow the promts to continue')

age = int(input('Enter your age: '))
#ticket_price = 0

if age < 6:
    print('Ticket price = $0')
elif age < 16:
    print('Ticket price = $2')
elif age < 66:
    print('Ticket price = $4')
else:
      print('Ticket price = $0')
