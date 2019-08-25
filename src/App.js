import React from 'react';

import './App.css';
import { connect } from 'react-redux'
import { loadProductData, loadCategory, deleteProducts } from "./actions/index";

import Feed from './components/Feed';
import Category from './components/Category';




// const responsedCats;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: 0,
      choosedFilter: null
    }
  }

  componentDidMount() {
    this.props.loadProductData(1);
    this.props.loadCategory();

  }
  showMore() {
    const { choosedFilter } = this.state;
    this.props.loadProductData(
      this.props.lastLoadedPageNumber + 1,
      choosedFilter ? choosedFilter.id : undefined
    );
  }
  chooseFilter(typeOfCats) {
    this.props.deleteProducts();
    this.props.loadProductData(this.props.lastLoadedPageNumber, typeOfCats.id);

    this.setState({
      choosedFilter: typeOfCats
    })

  }
  render() {
    const { products, category } = this.props;
    const { choosedFilter } = this.state;


    let cats, categories = [];


    cats = products.map(item => <img width='50%' src={item.url} />);
    categories = category.map(item => <button onClick={this.chooseFilter.bind(this, item)} >{item.name}</button>);


    return (
      <div className='container'>
        <span className='column1'><Category categories={categories} /></span>
        <span className='column2'><Feed cats={cats} /></span>


        <button className='showMeMore' onClick={this.showMore.bind(this)}>show me more</button>
      </div>




    )
  }

}



const mapDispatchToProps = dispatch => ({
  loadProductData: (pageNumber, order) => {
    dispatch(loadProductData(pageNumber, order));
  },
  loadCategory: (pageNumber, order) => {
    dispatch(loadCategory(pageNumber, order));
  },
  deleteProducts: () => {
    dispatch(deleteProducts());
  }
});
const mapStateToProps = (state) => {

  return ({

    products: state.loadcats.products,
    category: state.loadCategory.category,
    lastLoadedPageNumber: state.loadcats.archivePage,
  })
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);