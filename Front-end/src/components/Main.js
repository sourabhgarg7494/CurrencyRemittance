import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Common/Navbar';
import Profile from './Form/Profile';
import AccountInformation from './Form/AccountInformation';
import PostOffer from './Form/PostOffer';
import OfferList from './OfferSearches/OfferList';
import OfferDetailPage from './OfferSearches/OfferDetailPage';
import TransactionHistory from './OfferSearches/TransactionHistory';
import MyOffers from './MyOffers/MyOffers';
import ExchangeRate from './ExchangeRate/ConversionRate';
import Login from './Login/Login';
import axios from 'axios';
import serverUrl from '../config';
import { updateConversionRates, UpdateUserProfile } from '../constants/action-types';
import MatchingOfferList from './MyOffers/MatchingOfferList';

{
  /*import axios from 'axios';
import serverUrl from '../config';
import CustomerLogin from './Login/CustomerLogin';
import RestaurantLogin from './Login/RestaurantLogin';
import RestaurantHome from './Restaurant/RestaurantHome';
import Home from './Customer/Home/Home';
import CustomerNavBar from './Customer/CommonArea/CustomerNavBar';
import AboutMe from './Customer/AboutMe/AboutMe';
import UpdateProfile from './Customer/UpdateInformation/UpdateProfile';
import UpdateContactInformation from './Customer/UpdateInformation/UpdateContactInformation';
import RestaurantList from './Customer/RestaurantResults/RestaurantList';
import RestaurantPage from './Customer/RestaurantResults/RestaurantPage/RestaurantPage';
import FoodOrderCart from './Customer/RestaurantResults/RestaurantPage/FoodOrderCart';
import Events from './Customer/Events/Events';
import OrdersList from './Customer/OrdersTab/OrdersList';
import CustomerStaticProfile from './Restaurant/CommonComponent/CustomerStaticProfile';
import SnackBar from './CommonComponents/SnackBar';
import Following from './Customer/Following/Following';
import MessageList from './Customer/MessageTab/MessageList';*/
}
// import { updateMasterData, updateFoodData } from '../constants/action-types';
// import compose from 'lodash.flowright';

// Create a Main Component
class Main extends Component {
  componentDidMount() {
    axios.get(serverUrl + 'getConversionRate').then((response) => {
      console.log(response.data);
      const conversionRates = response.data;
      const payload = {
        conversionRates,
      };
      this.props.updateConversionRates(payload);
    });

    axios.get(serverUrl + 'user/' + localStorage.getItem('userId')).then((response) => {
      console.log(response.data);
      const UserProfile = response.data;
      const payload = {
        UserProfile,
      };
      this.props.UpdateUserProfile(payload);
    });
  }
  /*
  componentDidMount() {
    this.props.client.query({ query: getSignupMasterData }).then((response) => {
      console.log('data', response.data);
      let Countries = response.data.signupMasterData.Country.map((country) => {
        return { key: country._id, value: country.Name };
      });
      let States = response.data.signupMasterData.State.map((state) => {
        return { key: state._id, value: state.Name };
      });
      let CountryCodes = response.data.signupMasterData.Country.map((countryCode) => {
        return { key: countryCode._id, value: countryCode.CountryCode };
      });
      let Genders = response.data.signupMasterData.Gender.map((gender) => {
        return { key: gender._id, value: gender.GenderType };
      });

      let Cuisines = response.data.signupMasterData.Cuisine.map((cuisine) => {
        return { key: cuisine._id, value: cuisine.CuisineName };
      });

      let payload2 = {
        Cuisines,
      };
      this.props.updateFoodData(payload2);

      let payload = {
        Countries,
        States,
        CountryCodes,
        Genders,
      };
      this.props.updateMasterData(payload);
    });
    /* axios.get(serverUrl + 'static/signupMasterData').then((response) => {
      console.log('data:', response.data);
      let Countries = response.data[0].map((country) => {
        return { key: country._id, value: country.Name };
      });
      let States = response.data[1].map((state) => {
        return { key: state._id, value: state.Name };
      });
      let CountryCodes = response.data[0].map((countryCode) => {
        return { key: countryCode._id, value: countryCode.CountryCode };
      });
      let Genders = response.data[2].map((gender) => {
        return { key: gender._id, value: gender.GenderType };
      });

      let payload = {
        Countries,
        States,
        CountryCodes,
        Genders,
      };
      this.props.updateMasterData(payload);
      // this.setState({
      //   countries: this.state.countries.concat(allCountries),
      //   states: this.state.states.concat(allStates),
      //   countryCodes: this.state.countryCodes.concat(allCountrieCodes),
      // });
    });

    
  }
  */
  render() {
    return (
      <div>
        {/*this.props.snackbarData != null && <SnackBar />*/}
        {/* Render Different Component based on Route */}
        {/*<Switch>*/}
        <Route path="/" component={Navbar} />
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Login} />
        <Route path="/Profile" component={Profile} />
        <Route path="/AccountInformation" component={AccountInformation} />
        <Route path="/PostOffer" component={PostOffer} />
        <Route path="/OfferList" component={OfferList} />
        <Route path="/OfferDetailPage" component={OfferDetailPage} />
        <Route path="/TransactionHistory" component={TransactionHistory} />
        <Route path="/MyOffers" component={MyOffers} />
        <Route path="/ExchangeRate" component={ExchangeRate} />
        <Route path="/MatchingOfferList" component={MatchingOfferList} />
        {/*
          <Route path="/customerLogin" component={CustomerLogin} />
          <Route path="/customerSignup" component={CustomerLogin} />
          <Route path="/restaurantSignup" component={RestaurantLogin} />
          <Route path="/restaurantLogin" component={RestaurantLogin} />
          <Route path="/home" component={Home} />
          <Route path="/restaurantHome" component={RestaurantHome} />
          <Route path="/cus" component={CustomerNavBar} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Following" component={Following} />
          <Route path="/UpdateProfile" component={UpdateProfile} />
          <Route path="/UpdateContactInformation" component={UpdateContactInformation} />
          <Route path="/RestaurantList" component={RestaurantList} />
          <Route path="/RestaurantPage" component={RestaurantPage} />
          <Route path="/FoodOrderCart" component={FoodOrderCart} />
          <Route path="/Events" component={Events} />
          <Route path="/OrdersList" component={OrdersList} />
          <Route path="/Messages" component={MessageList} />
          <Route path="/CustomerStaticProfile" component={CustomerStaticProfile} />
  */}
        {/*</Switch>*/}
      </div>
    );
  }
}
// Export The Main Component
// export default Main;
// export default EventList;

const mapStateToProps = (state) => {
  const conversionRates = state.ConversionRateReducer;
  return {
    conversionRates: conversionRates,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateConversionRates: (payload) => {
      dispatch({
        type: updateConversionRates,
        payload,
      });
    },
    UpdateUserProfile: (payload) => {
      dispatch({
        type: UpdateUserProfile,
        payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default compose(
//   withApollo,
//   graphql(getSignupMasterData, { name: 'getSignupMasterData' }),
//   connect(mapStateToProps, mapDispatchToProps)
// )(Main);
