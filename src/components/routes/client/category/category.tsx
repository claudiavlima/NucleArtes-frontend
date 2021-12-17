import React, { useEffect } from 'react'
import { ReduxProps } from './';
import css from './category.module.css';

const Category: React.FC<ReduxProps> = (props) => {
  const {
    publicityOne,
    fetchCategories,
    fetchPublicityOne,
    fetchPublicityTwo,
    fetchPublicityThird,
    fetchPublicityFourth,
    fetchPublicityFive,
    publicityTwo,
    publicityThird,
    publicityFourth,
    publicityFive,
  } = props;

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    fetchPublicityOne();
    fetchPublicityTwo();
    fetchPublicityThird();
    fetchPublicityFourth();
    fetchPublicityFive();
  }, [
    fetchPublicityOne,
    fetchPublicityTwo,
    fetchPublicityThird,
    fetchPublicityFourth,
    fetchPublicityFive
  ])
  console.log('publicityOne', publicityFive);

  return (
    <>
      <div className={css.container}>
        <div className={css.containerImg}>
          <div className={css.publicityOne}>
            <img className={css.imageOne} src={publicityOne ? `http://localhost:5000/${publicityOne}` : 'https://via.placeholder.com/89'} alt="" />
          </div>
          <div className={css.publicityTwo}>
            <img className={css.imageOne} src={publicityTwo ? `http://localhost:5000/${publicityTwo}` : 'https://via.placeholder.com/89'} alt="" />
          </div>
          <div className={css.publicityOne}>
            <img className={css.imageOne} src={publicityThird ? `http://localhost:5000/${publicityThird}` : 'https://via.placeholder.com/89'} alt="" />
          </div>
          <div className={css.publicityOne}>
            <img className={css.imageOne} src={publicityFourth ? `http://localhost:5000/${publicityFourth}` : 'https://via.placeholder.com/89'} alt="" />
          </div>
          <div className={css.publicityOne}>
            <img className={css.imageOne} src={publicityFive ? `http://localhost:5000/${publicityFive}` : 'https://via.placeholder.com/89'} alt="" />
          </div>
        </div>
      </div>
    </>
  )
};

export default Category;