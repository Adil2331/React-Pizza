import React from 'react';

import Categories from '../Categories';
import Sort from '../Sort';
import Pizzablock from '../Pizzablock';
import MyLoader from '../MyLoader';
import Pagination from '../Pagination';
import { AppContext } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId , setCurrentPage} from '../Redux/filterSlice';
import axios from 'axios';

function Home() {
  const categoryId = useSelector(state => state.filter.categoryId)
  const sortCheck = useSelector(state => state.filter.sort.sortProperty )
  const currentPage = useSelector(state => state.filter.currentPage)
  const dispatch = useDispatch()

  const {searchPizza} = React.useContext(AppContext)
  // const [categoryId, setCategoryId] = React.useState(0);
  // const [sortCheck, setSortCheck] = React.useState({
  //   name: 'популярности',
  //   sortProperty: 'rating',
  // });

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsloading] = React.useState(true);
  // const [currentPage, setCurrentPage] = React.useState(1)


  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sort = sortCheck.replace('-', '');
    const order = sortCheck.includes('-') ? 'asc' : 'desc';
    const search = searchPizza ? `&search=${searchPizza}` : '';

    setIsloading(true);
    // fetch(
    //   `https://6410724cbe7258e1452a25cc.mockapi.io/items/?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`
    // )
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsloading(false);
    //   })
    //   .catch();

    axios.get(`https://6410724cbe7258e1452a25cc.mockapi.io/items/?page=${currentPage}&limit=4&${category}&sortBy=${sort}&order=${order}${search}`)
    .then((res) => res.data)
    .then((arr)=> {
          setItems(arr);
          setIsloading(false);
        })  
    window.scrollTo(0, 0);
  }, [categoryId, sortCheck, searchPizza, currentPage]);

  const skeleton = [...Array(4)].map((_, index) => <MyLoader key={index} />);

//   const pizzas = items.filter(obj => {
//     if(obj.title.toLowerCase().includes(searchPizza.toLowerCase())) {
//     return true;
//   } return false
// }).map((obj) => <Pizzablock key={obj.id} {...obj} />);
  const pizzas = items.map(obj => <Pizzablock key={obj.id} {...obj} />)

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChange={id => dispatch(setCategoryId(id))} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeleton : pizzas}</div>
      <Pagination currentPage = {currentPage}  onchangePage={(number)=>dispatch(setCurrentPage(number))} />
      
    </div>
  );
}

export default Home;
