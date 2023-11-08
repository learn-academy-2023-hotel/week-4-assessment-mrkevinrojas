# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# create a function and a parameter that will accept a value
def even_odd (num)
    # create a conditional statement and use .even? method to check if the number is even and return the string interpolation if it is even.
    if num.even?
        "#{num} is even"
    else
        # otherwise return the following
        "#{num} is odd"
    end
end
# check if your code works with different numbers
# p even_odd(222)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
#create a function that removes all capital and lowercase vowels and that takes in a string as its parameter
def remove_vowels(str)
    # use the .delete method and put all capital to lower case vowels to be removed from the string.
    str.delete "aeiouAEIOU" # Note: place everything you are trying to remove in a single string.  
end

# p remove_vowels(beatles_album3)


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# create a function that will accept a string as its parameter and return whether or not the string is a palindrome
def is_palindrome(str)
    # create a conditional statement where you you upcase the word (using .upcase) and compare it to it's reveresed self (using.reverse)
    if str.upcase == str.upcase.reverse
        # return the string interpolation if it is true
        "#{str} is a palindrome"
    else
        # otherwise, return the following
        "#{str} is not a palindrome"
    end
end
# test:
# p is_palindrome(palindrome_test_case1)
# p is_palindrome(palindrome_test_case2)
# p is_palindrome(palindrome_test_case3)