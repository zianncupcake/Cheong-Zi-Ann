## getPriority function
If there are many cases, the switch statement can become harder to maintain. 
Improvement: Accessing a value from an object using its key has constant time complexity, thus it is more efficient than linearly searching through a switch statement.

## getPriority usage
getPriority function is called repeatedly and is inefficient.
Improvement: Modify WalletBalance interface to include priority field upon creation 

## FormattedWalletBalance interface (option 1)
Redundant field specifications

Improvement: FormattedWalletBalance interface should extend WalletBalance

## FormattedWalletBalance interface (option 2)
FormattedWalletBalance interface as a whole might be redundant when the additional field 'formatted' is derived from an existing field 'amount'

Improvement: Remove FormattedWalletBalance interface and directly input formatted amount into WalletRow params. Priority values can be accessed directly

## sortedBalances
Variable lhsPriority: Either a typo or an undeclared variable
Improvement: rename to balancePriority which is used in the filtering logic

.filter: 
    1. Nested if statements make the logic harder to follow 
    2. The filter method already returns a boolean value based on the conditions, return true/false statements are redundant
Improvement: 
    1. Combine 2 conditions into 1 statement
    2. Remove return staterments

.sort:
    1. It does not handle the case of if values are equal 
    2. Redundant conditional checks
Improvement: Using the subtraction operation rightPriority - leftPriority directly expresses the comparison in a more concise and efficient manner

prices dependency array: Including prices in the dependency array might cause unnecesary recalculations. since prices is not directly used in the calculation of sortedBalances
Improvement: Remove prices from dependency array 

## formattedBalances
The output is not type safe
Improvement: Specifying the return type in formattedBalances