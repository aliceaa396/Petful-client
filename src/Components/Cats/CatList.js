import React, { Component } from 'react';
import NextCat from './NextCat';
import PetfulApiService from '../../services/PetfulApiService';
import PetfulContext from '../../Context/PetfulContext';

export class CatList extends Component {
  static contextType = PetfulContext;

  showCats = res => {
    PetfulApiService.displayCats(res)
      .then(dispRes => {
        this.context.setAllCats(dispRes);
      })
      .then(cat => {
        PetfulApiService.deleteCat().then(()=> {
          if(cat) {
            setTimeout(() => {
              this.updateCat();
            }, 2000);
          }
        });
      })
      .catch(this.context.setError)
  };

  componentDidMount() {
    PetfulApiService.getCats().then(res => this.showCats(res));
  }


  renderNextCat() {
    const { nextCat } = this.context;
    return !nextCat.value ? (
      "Sorry there are no cats available"
    ) 
    : 
    (
      <> 
        <NextCat nextCatImg = {nextCat.value.imageURL} />
      </>
    );
  }

  renderNextNextCat() {
    const { nextCat } = this.context;
    return !nextCat.next ? (
      "Sorry there are no cats available"
    ) 
    : 
    (
      <> 
        <NextCat nextCatImg = {nextCat.value.imageURL} />
      </>
    );
  }

  render() {
    return (
      <div>
        {this.renderNextCat()}
        {this.renderNextNextCat()}
      </div>
    )
  }
}

export default CatList;