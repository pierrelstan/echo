import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import Review from "features/checkout/Review";
import { CheckoutPageStateProvider } from "components/CheckoutPageState";
import AddressForm from "features/checkout/AddressForm";
import PaymentForm from "features/checkout/PaymentForm";
import React from "react";
import theme from "../config/theme";

const steps = ["Shipping address", "Payment details", "Review your order"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const Content = () => {
    switch (activeStep) {
      case 0:
        return <AddressForm />;
      case 1:
        return <PaymentForm />;
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  };

  return (
    <CheckoutPageStateProvider>
      <Paper
        sx={{
          my: 3,
          mx: 2,
          p: 2,
          [theme.breakpoints.up(600 + Number(theme.spacing(3)) * 2)]: {
            my: 6,
            width: 600,
            mx: "auto",
            p: 3,
          },
        }}
      >
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{
            padding: theme.spacing(3, 0, 5),
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Content />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    justifyContent: "space-between",
                  }}
                >
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>Back</Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </Box>
              </Box>
            </React.Fragment>
          )}
        </React.Fragment>
      </Paper>
    </CheckoutPageStateProvider>
  );
}
