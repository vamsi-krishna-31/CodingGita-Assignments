# Topic-8 — Conditional Statements + Previous Concepts




# Q58. Student ID Validation

student_id = input("Enter student ID: ")

parts = student_id.split("-")

degree = parts[0]
batch = parts[1]
branch = parts[2]
roll_number = parts[3]

if branch == "CSE":
    print("CSE Student")
else:
    print("Non-CSE Student")


# Q59. Email Domain Checker

email = input("Enter email: ")

parts = email.split("@")
domain = parts[1]

if domain == "gmail.com":
    print("Gmail User")
else:
    print("Other Email Provider")


# Q60. Username Generator Validation

name = input("Enter full name: ")

parts = name.split()

first_name = parts[0]
last_name = parts[-1]

username = first_name.lower() + "." + last_name.lower()

if "." in username:
    print("Valid Username Format")
else:
    print("Invalid Username Format")


# Q61. Number Digit Analyzer

num = int(input("Enter a positive integer: "))

if num < 10:
    print("One Digit")
elif num < 100:
    print("Two Digits")
elif num < 1000:
    print("Three Digits")
else:
    print("Four or More Digits")


# Q62. Shopping Bill Category

price = float(input("Enter product price: "))
quantity = int(input("Enter quantity: "))

subtotal = price * quantity

if subtotal >= 5000:
    discount_percentage = 20
elif subtotal >= 2000:
    discount_percentage = 10
else:
    discount_percentage = 0

discount = subtotal * discount_percentage / 100
final_amount = subtotal - discount

print("Subtotal:", subtotal)
print("Discount:", str(discount_percentage) + "%")
print("Final:", format(final_amount, ".2f"))


# Q63. Electricity Bill Category

units = int(input("Enter units consumed: "))

if units <= 100:
    rate = 5
elif units <= 300:
    rate = 7
else:
    rate = 10

bill = units * rate

print("Units:", units)
print("Rate: ₹" + str(rate))
print("Bill: ₹" + str(bill))


# Q64. ATM Menu

balance = 10000

print("1. Check Balance")
print("2. Deposit")
print("3. Withdraw")
print("4. Exit")

choice = int(input("Enter choice: "))

match choice:
    case 1:
        print("Balance:", balance)

    case 2:
        amount = int(input("Enter deposit amount: "))
        balance = balance + amount
        print("Deposit Successful, Balance:", balance)

    case 3:
        amount = int(input("Enter withdrawal amount: "))

        if amount <= balance:
            balance = balance - amount
            print("Withdrawal Successful, Balance:", balance)
        else:
            print("Insufficient Balance")

    case 4:
        print("Exit")

    case _:
        print("Invalid Choice")


# Q65. Restaurant Ordering System

print("1. Pizza - ₹250")
print("2. Burger - ₹150")
print("3. Pasta - ₹200")
print("4. Sandwich - ₹120")

choice = int(input("Enter choice: "))
quantity = int(input("Enter quantity: "))

match choice:
    case 1:
        price = 250
    case 2:
        price = 150
    case 3:
        price = 200
    case 4:
        price = 120
    case _:
        price = 0

if price == 0:
    print("Invalid Choice")
else:
    total = price * quantity

    if total >= 500:
        discount = total * 10 / 100
    else:
        discount = 0

    final_amount = total - discount

    print("Total:", total)
    print("Discount:", format(discount, ".2f"))
    print("Final:", format(final_amount, ".2f"))


# Q66. Exam Result Analyzer

mark1 = float(input("Enter first subject marks: "))
mark2 = float(input("Enter second subject marks: "))
mark3 = float(input("Enter third subject marks: "))
attendance = float(input("Enter attendance: "))

total = mark1 + mark2 + mark3
average = total / 3

if attendance >= 75:
    if average >= 90:
        print("Outstanding")
    elif average >= 75:
        print("Very Good")
    elif average >= 60:
        print("Good")
    elif average >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")


# Q67. Cab Fare Calculator

distance = float(input("Enter distance in km: "))
ride_type = input("Enter ride type: ")

match ride_type:
    case "normal":
        rate = 15
    case "premium":
        rate = 25
    case _:
        rate = 0

if rate == 0:
    print("Invalid Ride Type")
else:
    fare = distance * rate

    if distance > 20:
        fare = fare + (fare * 10 / 100)

    print("Fare:", format(fare, ".2f"))


# Q68. College Admission System

score = int(input("Enter entrance score: "))
percentage = float(input("Enter 12th percentage: "))
category = input("Enter category: ")

match category:
    case "general":
        if score >= 80 and percentage >= 75:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")

    case "obc":
        if score >= 70 and percentage >= 70:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")

    case "sc":
        if score >= 60 and percentage >= 60:
            print("Admission Eligible")
        else:
            print("Admission Not Eligible")

    case _:
        print("Invalid Category")
