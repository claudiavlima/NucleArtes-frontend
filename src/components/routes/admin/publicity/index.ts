import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Component from './publicity';
import { logOut } from '../../../../redux/actions/loginActions';
import {
  postPublicityOne,
  updatePublicityOne,
  postPublicityTwo,
  postPublicityThird,
  postPublicityFourth,
  postPublicityFive,
  fetchPublicityOne,
  fetchPublicityTwo,
  fetchPublicityThird,
  fetchPublicityFourth,
  fetchPublicityFive
} from '../../../../redux/actions/publicityActions';
import { FormNames, FormMode } from '../../../../enums';
import {
  reduxForm,
  SubmissionError,
  InjectedFormProps,
} from 'redux-form';
import { RouteComponentProps } from 'react-router-dom';

export interface PublicityValues {
  titleOne: string;
  imgOne: string;
  titleTwo: string;
  imgTwo: string;
  titleThird: string;
  imgThird: string;
  titleFourth: string;
  imgFourth: string;
  titleFive: string;
  imgFive: string;
}

export interface StateProps {
  categories: any,
  isPublicityTwo: boolean,
  isPublicityThird: boolean,
  isPublicityFourth: boolean,
  isPublicityFive: boolean,
  isPublicityOne: boolean,
  isFetchingPublicityOne: boolean,
  isFetchingPublicityTwo: boolean,
  isFetchingPublicityThird: boolean,
  isFetchingPublicityFourth: boolean,
  isFetchingPublicityFive: boolean,
  initialValues: PublicityValues;
}

const mapStateToProps = (state: any) => {
  let initialValues: any;

  if (state.publicity.publicityOne.length > 0) {
    initialValues = {
      ...initialValues,
      titleOne: state.publicity.publicityOne[0].title,
      imgOne: state.publicity.publicityOne[0].img
    }
  }

  if (state.publicity.publicityTwo.length > 0) {
    initialValues = {
      ...initialValues,
      titleTwo: state.publicity.publicityTwo[0].title,
      imgTwo: state.publicity.publicityTwo[0].img
    }
  }

  if (state.publicity.publicityThird.length > 0) {
    initialValues = {
      ...initialValues,
      titleThird: state.publicity.publicityThird[0].title,
      imgThird: state.publicity.publicityThird[0].img
    }
  }

  if (state.publicity.publicityFourth.length > 0) {
    initialValues = {
      ...initialValues,
      titleFourth: state.publicity.publicityFourth[0].title,
      imgFourth: state.publicity.publicityFourth[0].img
    }
  }

  if (state.publicity.publicityFive.length > 0) {
    initialValues = {
      ...initialValues,
      titleFive: state.publicity.publicityFive[0].title,
      imgFive: state.publicity.publicityFive[0].img
    }
  }
  return {
    initialValues,
    isPublicityOne: state.publicity.publicityOne.length > 0,
    isPublicityTwo: state.publicity.publicityTwo.length > 0,
    isPublicityThird: state.publicity.publicityThird.length > 0,
    isPublicityFourth: state.publicity.publicityFourth.length > 0,
    isPublicityFive: state.publicity.publicityFive.length > 0,
    isFetchingPublicityOne: state.publicity.isLoadingOne,
    isFetchingPublicityTwo: state.publicity.isLoadingTwo,
    isFetchingPublicityThird: state.publicity.isLoadingThird,
    isFetchingPublicityFourth: state.publicity.isLoadingFourth,
    isFetchingPublicityFive: state.publicity.isLoadingFive,
  }
}

export interface DispatchProps {
  logOut?: typeof logOut;
  postPublicityOne: typeof postPublicityOne;
  updatePublicityOne: typeof updatePublicityOne;
  postPublicityTwo: typeof postPublicityTwo,
  postPublicityThird: typeof postPublicityThird,
  postPublicityFourth: typeof postPublicityFourth,
  postPublicityFive: typeof postPublicityFive,
  fetchPublicityOne: typeof fetchPublicityOne,
  fetchPublicityTwo: typeof fetchPublicityTwo,
  fetchPublicityThird: typeof fetchPublicityThird,
  fetchPublicityFourth: typeof fetchPublicityFourth,
  fetchPublicityFive: typeof fetchPublicityFive,
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    logOut,
    postPublicityOne,
    updatePublicityOne,
    postPublicityTwo,
    postPublicityThird,
    postPublicityFourth,
    postPublicityFive,
    fetchPublicityOne,
    fetchPublicityTwo,
    fetchPublicityThird,
    fetchPublicityFourth,
    fetchPublicityFive
  }, dispatch)
}

const onSubmit = async (values: PublicityValues, dispatch: any, props: ReduxProps) => {
  try {
    if (values.imgOne !== '' && values.titleOne !== '') {
      const addPayloadOne = {
        title: values.titleOne,
        img: values.imgOne,
      };
      const responseOne: any = await props.postPublicityOne(addPayloadOne);
    }

    if (values.imgTwo !== '' && values.titleTwo !== '') {
      const addPayloadTwo = {
        title: values.titleTwo,
        img: values.imgTwo,
      };
      const responseTwo: any = await props.postPublicityTwo(addPayloadTwo);
    }

    if (values.imgThird !== '' && values.titleThird !== '') {
      const addPayloadThird = {
        title: values.titleThird,
        img: values.imgThird,
      };
      const responseThird: any = await props.postPublicityThird(addPayloadThird);
    }

    if (values.imgFourth !== '' && values.titleFourth !== '') {
      const addPayloadFourth = {
        title: values.titleFourth,
        img: values.imgFourth,
      };
      const responseFourth: any = await props.postPublicityFourth(addPayloadFourth);
    }

    if (values.imgFive !== '' && values.titleFive !== '') {
      const addPayloadFive = {
        title: values.titleFive,
        img: values.imgFive,
      };
      const responseFive: any = await props.postPublicityFive(addPayloadFive);
    }
  }

  catch (error) {
    throw new SubmissionError({
      _error: error ? error.toString().slice(6) : 'Hubo un error',
    });
  };
};

export const reduxFormConfig = {
  form: FormNames.PUBLICITY_FORM,
  onSubmit,
};

export default connect(mapStateToProps, (mapDispatchToProps as any))(reduxForm(reduxFormConfig)(Component as any) as any);
type Props = StateProps & DispatchProps & RouteComponentProps;
export type ReduxProps = Props & InjectedFormProps<PublicityValues, Props>;