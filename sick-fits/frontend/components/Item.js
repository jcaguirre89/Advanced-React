import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

function Item({ item }) {
  return (
    <ItemStyles>
      {item.image && <img src={item.image} alt={item.title} />}
      <Link
        href={{
          pathname: '/item',
          query: { id: item.id },
        }}
      >
        <a>
          <Title>{item.title}</Title>
        </a>
      </Link>
      <PriceTag>{formatMoney(item.price)}</PriceTag>
      <p>{item.description}</p>
      <div className="buttonList">
        <Link
          href={{
            pathname: '/update',
            query: item.id,
          }}
        >
          <a>Edit</a>
        </Link>
        <button type="button">Add to Cart</button>
        <button type="button">Delete</button>
      </div>
    </ItemStyles>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Item;
