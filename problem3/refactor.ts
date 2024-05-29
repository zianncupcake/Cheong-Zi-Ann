
//  not effective, tale long to look up because there's so many switch statements
const priorityDict = {
  'Osmosis': 100,
  'Ethereum': 50,
  'Arbitrum': 30,
  'Zilliqa': 20,
  'Neo': 20
}

const getPriorityRefactored = (blockchain: any): number => {
  return priorityDict[blockchain] ?? -99;
};


// wallet balance interface wallet balance. since formattedwalletbalance builds on walletbalance, it should extend the interface, dont need to specify fields again
// getPriority specified too many times, not efficient, should just store it in the walletbalance interface 
interface WalletBalance {
  currency: string;
  amount: number;
  priority: number;
}
interface FormattedWalletBalance extends WalletBalance{
  formatted: string;
}


//lhsPrioriy wrong variable name? supposed to be balancePriority. if not balancePriority variable is just unused......The variable lhsPriority is mentioned but not defined in the filtering logic. This might be a typo or an undeclared variable.
//sorting in descending order. can just minus. if right>left then rreturn 1 if not retun -1. dont need if else statements. unecessary 
//nested if else statments, confusing, combine into 1 statement. return a boolean. if it is true it will return true but if the condition is false then it will return false straight away
// actually dont need return statements. for filter, it will exclude the balances that dont meet the condition, so means it will not return anyway
//Using prices as a dependency in useMemo for sortedBalances when it is not directly used within the memoization logic. This could lead to unnecessary recalculations.
 const sortedBalances = useMemo(() => {
  return balances
    .filter((balance: WalletBalance) => (balance.priority > -99 && balance.amount <= 0  ))
    .sort((lhs: WalletBalance, rhs: WalletBalance) => rhs.priority - lhs.priority);
}, [balances]);

// make sure that our mapped array is in the correct format, espectially since it is an input for variable rows
const formattedBalances: FormattedWalletBalance[] = sortedBalances.map((balance: WalletBalance) => {
  return {
    ...balance,
    formatted: balance.amount.toFixed()
  }
})

//but not very efficient to extend an interface if it is easy to format the amount. dont need to create another interface
//then the mapping of formattedBalances is not needed

//also formattedBalances is unused. in the end sortedBalances is used in the mapping and its items are still WalletBalance, so its the wrong type right

const rows = sortedBalances.map((balance: FWalletBalance, index: number) => {
  const usdValue = prices[balance.currency] * balance.amount;
  const formatted = balance.amount.toFixed()
  return (
    <WalletRow 
      className={classes.row}
      key={index}
      amount={balance.amount}
      usdValue={usdValue}
      formattedAmount={formatted}
    />
  )
})

