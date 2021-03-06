/* @flow */

import React from 'react';
import { RaisedButton, Divider } from 'material-ui';
import { Link } from 'react-router';
import { GIVER_ROUTE, HOME_ROUTE } from '../../constants/routes';
import BasketSummaryListItem from '../BasketSummaryListItem';
import type { BasketType, ItemType } from '../../types';
import css from './index.styl';

type PropsType = {
  basket: BasketType,
  basketCount: number,
  basketTotal: number,
  addToBasket: (item: ItemType) => void,
  removeFromBasket: (item: ItemType) => void,
  deleteFromBasket: (item: ItemType) => void,
};

const styles = {
  button: {
    marginTop: 12,
    marginRight: 12,
  },
};

const BasketSummary = ({ basket, basketCount, basketTotal, addToBasket, removeFromBasket, deleteFromBasket }: PropsType) => {
  if (basketCount <= 0) {
    return (
      <div className={css.root}>
        <div className={css.container}>
          <h1 className={css.title}>
            Your Basket is empty!
          </h1>

          <div className={css.actions}>
            <RaisedButton primary label="Back to Home" containerElement={<Link to={HOME_ROUTE}>Back to Home</Link>} linkButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={css.root}>
      <div className={css.container}>
        <h1 className={css.title}>
          Subtotal ({basketCount} item{basketCount > 1 ? 's' : null}): £{basketTotal}
        </h1>

        <Divider />

        <div className={css.content}>
          {[...basket.entries()].map(([key, item]) => (
            <div key={key}>
              <BasketSummaryListItem item={item} addToBasket={addToBasket} removeFromBasket={removeFromBasket} deleteFromBasket={deleteFromBasket} />

              <Divider />
            </div>
          ))}
        </div>

        <div className={css.actions}>
          <RaisedButton
            primary
            label="Proceed to Checkout"
            containerElement={<Link to={GIVER_ROUTE}>Proceed to Checkout</Link>}
            linkButton
            style={styles.button}
          />

          <RaisedButton label="Back to Home" containerElement={<Link to={HOME_ROUTE}>Back to Home</Link>} linkButton style={styles.button} />
        </div>
      </div>
    </div>
  );
};

export default BasketSummary;
