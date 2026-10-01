Topic-10 — Output Prediction & Execution Flow




# Q71. Condition Order

marks = 85

if marks >= 40:
    print("Pass")
elif marks >= 75:
    print("Very Good")
else:
    print("Fail")

# Output:
# Pass
# Explanation:
# The first condition marks >= 40 is already True.
# Therefore, Python executes it and skips the remaining elif and else.


# Q72. Correct the Condition Order

marks = 85

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
elif marks >= 40:
    print("Pass")
else:
    print("Fail")

# Outputs:
# 95 -> A
# 85 -> B
# 50 -> Pass
# 30 -> Fail

# Explanation:
# Conditions are checked from top to bottom.
# The more specific or higher conditions should come first.
# If a condition becomes True, the remaining conditions are skipped.


# Q73. Nested if Execution Flow

age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry Allowed")
    else:
        print("ID Required")
else:
    print("Underage")

# Output:
# Entry Allowed

# If age = 20 and has_id = False:
# Output:
# ID Required

# If age = 16 and has_id = True:
# Output:
# Underage


# Q74. match-case and Default Case

choice = 5

match choice:
    case 1:
        print("Add")
    case 2:
        print("View")
    case 3:
        print("Delete")
    case _:
        print("Invalid Choice")

# Outputs:
# 1 -> Add
# 3 -> Delete
# 5 -> Invalid Choice

# Explanation:
# case _ is the default case.
# It runs when none of the other cases match.


# Q75. Final Execution Challenge

marks = 82
attendance = 80

if attendance >= 75:
    if marks >= 90:
        print("Grade A")
    elif marks >= 75:
        print("Grade B")
    elif marks >= 40:
        print("Pass")
    else:
        print("Fail")
else:
    print("Not Eligible")

# Outputs:
# 82 80 -> Grade B
# 92 80 -> Grade A
# 55 80 -> Pass
# 92 60 -> Not Eligible

# Explanation:
# The attendance condition is checked first.
# If attendance is at least 75, the marks conditions are checked.
