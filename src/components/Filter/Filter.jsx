import React from 'react';
import {
  FilterWrapper,
  FilterInput,
  FilterLabel,
} from 'components/Filter/Filter.styled';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';

const filterInputId = nanoid();

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <FilterWrapper>
      <FilterLabel>Find contacts by name</FilterLabel>
        <FilterInput
          type="text"
          value={value}
          onChange={onChange}
          id={filterInputId}
        />
    </FilterWrapper>
  );
};

export default Filter;