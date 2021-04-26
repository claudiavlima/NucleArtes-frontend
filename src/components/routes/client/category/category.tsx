import React, { useEffect } from 'react'
import { ReduxProps } from './';
import css from './category.module.css';
import CategoryCard from '../../admin/categories/category';

const Category: React.FC<ReduxProps> = (props) => {
  const { categories, fetchCategories } = props;

  useEffect(() => {
    fetchCategories();
    console.log('ENTRE');
  }, [fetchCategories]);
  console.log('CATEGORY', categories);

  return (
    <>
      <div className={css.container}>

      </div>
    </>
  )
};

export default Category;