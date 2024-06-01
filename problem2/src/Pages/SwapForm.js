import { Row, Container, Form, Button, Alert, Spinner } from "react-bootstrap";
import { prices, wallets, logos } from "../data/Dummy";
import { useState } from "react";

const SwapForm = () => {
  const [success, setSuccess] = useState(false);
  const [showAlertOne, setShowAlertOne] = useState(false);
  const [showAlertTwo, setShowAlertTwo] = useState(false);
  const [fromWallet, setFromWallet] = useState({});
  const [toWallet, setToWallet] = useState({});
  const [sourceValue, setSourceValue] = useState("");
  const [targetValue, setTargetValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getConversionRate = (source, target) => {
    const sourcePrice = prices.find(
      (price) => price.currency === source
    )?.price;
    const targetPrice = prices.find(
      (price) => price.currency === target
    )?.price;

    if (sourcePrice && targetPrice) {
      return sourcePrice / targetPrice;
    }
    return null;
  };

  const handleFromWalletChange = (event) => {
    setFromWallet(wallets.find((wallet) => wallet.id === event.target.value));
    setSourceValue("");
    setTargetValue("");
    setSuccess(false);
  };

  const handleToWalletChange = (event) => {
    setToWallet(wallets.find((wallet) => wallet.id === event.target.value));
    setSourceValue("");
    setTargetValue("");
    setSuccess(false);
  };

  const handleSourceChange = (event) => {
    const amount = parseFloat(event.target.value);
    const conversionRate = getConversionRate(
      fromWallet.currency,
      toWallet.currency
    );

    if (conversionRate !== null) {
      setTargetValue(parseFloat((amount * conversionRate).toFixed(2)));
      setSourceValue(amount);
    }
  };

  const handleTargetChange = (event) => {
    const amount = parseFloat(event.target.value);
    const conversionRate = getConversionRate(
      toWallet?.currency,
      fromWallet?.currency
    );

    if (conversionRate !== null) {
      setSourceValue(parseFloat((amount * conversionRate).toFixed(2)));
      setTargetValue(amount);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowAlertOne(false);
    setShowAlertTwo(false);

    const newBalance1 = parseFloat(fromWallet.balance) - sourceValue;

    if (newBalance1 < 0) {
      setShowAlertOne(true);
      setTimeout(() => {
        setShowAlertOne(false);
      }, 2000);
      return;
    }

    if (fromWallet.id === toWallet.id) {
      setShowAlertTwo(true);
      setTimeout(() => {
        setShowAlertTwo(false);
      }, 2000);
      return;
    }

    const newBalance2 = parseFloat(toWallet.balance) + targetValue;

    const sourceInputs = {
      name: fromWallet.name,
      balance: newBalance1,
      currency: fromWallet.currency,
    };
    console.log("form input from wallet", sourceInputs);

    const targetInputs = {
      name: toWallet.name,
      balance: newBalance2,
      currency: toWallet.currency,
    };
    console.log("form input to wallet", targetInputs);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setFromWallet({});
      setToWallet({});
      setSourceValue("");
      setTargetValue("");
    }, 2000);
  };

  return (
    <Container className="justify-items-center">
      <Row className="mt-5 p-5 w-75 justify-content-center mx-auto">
        <h1 className="text-center">Currency Transfer Form</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Transfer From</Form.Label>
            <Form.Select
              name="walletFromName"
              required
              value={fromWallet?.id ?? ""}
              onChange={(e) => handleFromWalletChange(e)}
            >
              <option value="">Select a Wallet</option>
              {wallets?.map((wallet) => (
                <option key={wallet.id} value={wallet.id}>
                  {wallet.name}
                </option>
              ))}{" "}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Transfer To</Form.Label>
            <Form.Select
              name="walletToName"
              required
              value={toWallet?.id ?? ""}
              onChange={(e) => handleToWalletChange(e)}
            >
              <option value="">Select a Wallet</option>
              {wallets.map((wallet) => (
                <option key={wallet.id} value={wallet.id}>
                  {wallet.name}
                </option>
              ))}{" "}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>

            <div className="d-flex align-items-center">
              <div className="input-group mr-2">
                <div className="input-group-prepend">
                  {fromWallet?.currency && (
                    <span className="input-group-text">
                      <img
                        src={logos[fromWallet.currency]}
                        alt={`${fromWallet.currency} logo`}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "8px",
                        }}
                      />
                      {fromWallet.currency}
                    </span>
                  )}
                </div>
                <Form.Control
                  name="sourceTransferAmount"
                  required
                  type="number"
                  step="0.01"
                  placeholder={
                    fromWallet?.balance
                      ? `Wallet Balance: ${fromWallet.balance} ${fromWallet.currency}`
                      : "Source Currency"
                  }
                  value={sourceValue}
                  onChange={(e) => handleSourceChange(e)}
                  disabled={!fromWallet?.balance || !toWallet?.balance}
                />
              </div>
              <div className="mx-2">&#8594;</div>
              <div className="input-group">
                <div className="input-group-prepend">
                  {toWallet?.currency && (
                    <span className="input-group-text">
                      <img
                        src={logos[toWallet.currency]}
                        alt={`${toWallet.currency} logo`}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "8px",
                        }}
                      />
                      {toWallet.currency}
                    </span>
                  )}
                </div>
                <Form.Control
                  name="targetTransferAmount"
                  required
                  type="number"
                  step="0.01"
                  placeholder={
                    toWallet?.balance
                      ? `Wallet Balance: ${toWallet.balance} ${toWallet.currency}`
                      : "Target Currency"
                  }
                  value={targetValue}
                  onChange={(e) => handleTargetChange(e)}
                  disabled={!fromWallet?.balance || !toWallet?.balance}
                />
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-3 mt-4">
            <Button variant="primary" className="w-100" type="submit">
              {isLoading ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className=""
                  />
                </>
              ) : (
                "Transfer"
              )}
            </Button>
          </Form.Group>
          <Alert variant="success" className="mt-3" show={success}>
            Hooray! Your transfer is successful
          </Alert>
          <Alert variant="danger" className="mt-3" show={showAlertOne}>
            Transfer amount more than wallet balance (maximum:{" "}
            {fromWallet?.balance} {fromWallet?.currency})
          </Alert>
          <Alert variant="danger" className="mt-3" show={showAlertTwo}>
            Unable to transfer money to same wallet
          </Alert>
        </Form>
      </Row>
    </Container>
  );
};

export default SwapForm;
