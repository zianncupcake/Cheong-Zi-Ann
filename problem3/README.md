## getPriority function
If there are many cases, the switch statement can become harder to maintain. 

<img width="432" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/25b352e0-c7bf-40e2-ba2d-32ca525ce9d4">

Improvement: Accessing a value from an object using its key has constant time complexity, thus it is more efficient than linearly searching through a switch statement.

## getPriority usage
getPriority function is called repeatedly and is inefficient.

<img width="494" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/31b4bcb6-df8e-4add-b3b0-e9f1e852e698">

<img width="492" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/9eb98d16-a54e-4d4d-a71b-245c72beae55">

Improvement: Modify WalletBalance interface to include priority field upon creation 

## FormattedWalletBalance interface (option 1)
Redundant field specifications

<img width="307" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/a7ef4273-db4a-4301-927d-d5e1597c9065">

Improvement: FormattedWalletBalance interface should extend WalletBalance

## FormattedWalletBalance interface (option 2)
FormattedWalletBalance interface as a whole might be redundant when the additional field 'formatted' is derived from an existing field 'amount'

<img width="342" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/dc964087-8765-4a44-b130-6b6052c95e79">

Improvement: Remove FormattedWalletBalance interface and directly input formatted amount into WalletRow params. Priority values can be accessed directly

## sortedBalances
Variable lhsPriority: Either a typo or an undeclared variable

<img width="201" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/ba48c0e1-930d-4eff-8826-75ec3c7d8eab">

Improvement: rename to balancePriority which is used in the filtering logic

.filter: 
    1. Nested if statements make the logic harder to follow 
    2. The filter method already returns a boolean value based on the conditions, return true/false statements are redundant
    
    <img width="497" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/62918ec8-f7d2-464f-bb1b-f84d5abb2066">

Improvement: 
    1. Combine 2 conditions into 1 statement
    2. Remove return staterments

.sort:
    1. It does not handle the case of if values are equal 
    2. Redundant conditional checks
    
    <img width="466" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/8343c117-e5e3-4437-8487-19e361b4a67f">
    
Improvement: Using the subtraction operation rightPriority - leftPriority directly expresses the comparison in a more concise and efficient manner

prices dependency array: Including prices in the dependency array might cause unnecesary recalculations. since prices is not directly used in the calculation of sortedBalances

<img width="237" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/7f64d2b3-c3eb-4786-91ce-e0c4b968c38f">

Improvement: Remove prices from dependency array 

## formattedBalances
The output is not type safe

<img width="635" alt="image" src="https://github.com/zianncupcake/Cheong-Zi-Ann/assets/100258157/67c7ec9b-cae1-4a61-adb4-a584928704a6">

Improvement: Specifying the return type in formattedBalances
