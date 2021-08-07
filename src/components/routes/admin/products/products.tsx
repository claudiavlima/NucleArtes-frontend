import React, { useEffect, useCallback, useState } from 'react';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Table from '../../../shared/table';
import { ModalKey, FormMode } from '../../../../enums';
import RefreshButton from '../../../shared/form/refresh-button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useHistory, useLocation } from 'react-router-dom';
import { ReduxProps } from '.';
import css from './products.module.css';
import {
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_ERROR,
} from '../../../../redux/actions/types';
import Modal from '../../../shared/modals';
import product from '../product';

const ellipsisStyles: React.CSSProperties = {
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  maxWidth: '12ch'
};

const cols: any[] = [
  {
    title: 'Nombre',
    field: 'title',
    cellStyle: ellipsisStyles,
  },
  {
    title: 'Descripción',
    field: 'description',
    cellStyle: ellipsisStyles,
  },
  {
    title: 'Stock',
    field: 'stock',
    cellStyle: ellipsisStyles,
  },
];

const Product: React.FC<ReduxProps> = (props) => {

  const {
    getProductByArtesanoId,
    deleteProduct,
    fetchProducts,
    user,
  } = props;

  const history = useHistory();
  const location = useLocation();

  const [modalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getProductByArtesanoId(user._id);
  }, [getProductByArtesanoId]);

  const getProducts = useCallback(() => {
    getProductByArtesanoId(user._id);
  }, [getProductByArtesanoId]);

  const handleModal = async (productId: string) => {
    const response: any = await deleteProduct(productId);
    if (response.type === DELETE_PRODUCT_ERROR) {
      return response.msg
    }
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.mainTitle}>
          <div test-id="title-brand-page">
            Productos
          </div>
          <RefreshButton
            onClick={() => getProducts}
            disabled={props.isFetching}
          />
        </div>
        <div className={css.pageDivider} />
        <div className={css.containerPaper}>
          <div className={css.paper}>
            <Paper>
              <Table
                columns={cols}
                data={props.products}
                loading={props.isFetching}
                onRowClick={(event, rowData: any) => {
                  history.push(`/admin/product/${rowData._id}`, {
                    mode: FormMode.VIEW,
                    title: 'Detalle Marca'
                  });
                }}
                actions={
                  [
                    (rowData: any) => {
                      return {
                        icon: 'edit',
                        tooltip: 'Editar',
                        onClick: (event: any, rowData: any) => {
                          history.push(`/admin/product/${rowData._id}`, {
                            mode: FormMode.EDIT,
                            title: 'Editar Marca',
                          });
                        }
                      };
                    },
                    (rowData: any) => {
                      return {
                        icon: 'delete',
                        tooltip: 'Eliminar',
                        onClick: (event: any, rowData: any) => {
                          handleModal(rowData._id);
                        }
                      };
                    }
                  ]
                }
              />
            </Paper>
          </div>
        </div>
        <div className={css.fabButtonContainer} >
          <Fab
            test-id="btn-add-brand"
            onClick={() => {
              history.push('/admin/product/new', {
                mode: FormMode.ADD,
                title: 'Agregar Marca'
              });
            }}
            className={css.fabButton}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </div>
      </div>
    </>
  );
};

export default Product;
