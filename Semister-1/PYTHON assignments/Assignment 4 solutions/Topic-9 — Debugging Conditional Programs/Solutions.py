# Topic-9 — Debugging Conditional Programs




# Q69. Debug the Condition

age = int(input("Enter age: "))

if age >= 18:
    print("Eligible")
else:
    print("Not Eligible")


# Q70. Debug the Nested Condition

marks = int(input("Enter marks: "))

if marks >= 40:
    if marks >= 90:
        print("A")
    elif marks >= 75:
        print("B")
    else:
        print("Pass")
else:
    print("Fail")
