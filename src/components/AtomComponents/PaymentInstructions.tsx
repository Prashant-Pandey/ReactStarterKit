import React from 'react';
import Typography from '@material-ui/core/Typography';

interface IPaymentInstructions {
  borderBottomHidden?: boolean;
  payloadKey: any;
  selectedInstructions: any;
}

function PaymentInstructions({
  borderBottomHidden,
  payloadKey,
  selectedInstructions,
}: IPaymentInstructions) {
  const columns = selectedInstructions?.split('|');

  if (payloadKey === 'paymentMethods' && columns?.length !== 1) {
    const column1 = columns ? columns[0] : '';
    const column2 = columns ? columns[1] : '';

    const column1rowsElements = column1
      ? column1.split('&').map((row: any, index: number) => {
          const keyValue = row.split(':');
          return (
            <div key={`coulmn1-row${index}`} className="grid-x margin-bottom-1">
              <div className="cell auto px-text-description">
                <h6>{<strong>{`${keyValue[0]}:`}</strong>}</h6>
              </div>
              <div className="cell auto">{keyValue[1]}</div>
            </div>
          );
        })
      : [];

    const column2rowsElements = column2
      ? column2.split('&').map((row: any, index: number) => {
          const keyValue = row.split(':');
          return (
            <div key={`coulmn2-row${index}`} className="grid-x margin-bottom-1">
              <div className="cell auto px-text-description">
                <h6>{<strong>{`${keyValue[0]}${keyValue[0].length > 0 ? ':' : ''}`}</strong>}</h6>
              </div>
              <div className="cell auto">{keyValue[1]}</div>
            </div>
          );
        })
      : [];

    return (
      <div
        className={`grid-x grid-margin-x ${
          borderBottomHidden ? '' : 'border-bottom'
        } padding-bottom-2 px-payment-method-instruction-container`}>
        <div className="cell small-6 grid-y">{column1rowsElements}</div>
        <div className="cell small-6 grid-y">{column2rowsElements}</div>
      </div>
    );
  }

  return (
    <Typography style={{ marginTop: '4px', marginBottom: '16px' }} className="cell small-12">
      {selectedInstructions}
    </Typography>
  );
}

export default PaymentInstructions;
