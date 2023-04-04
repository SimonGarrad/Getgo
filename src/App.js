//Conor Phelan, Shane Kearney, Simon Garrad
//Team Coconut tree
//cs385 Project Submission
import React, { Component } from "react";
import Slider from "./components/Slider";
import img1 from "./images/Getgo.png";
import img2 from "./images/CampusMap.jpg";
import Landscape from "../src/vids/Landscape.mp4"; // imported video sources for each of the pages
import busRide from "../src/vids/busRide.mp4";
import Train from "../src/vids/Train.mp4";
import { busRideArray } from "./busride.js";
import { trainRideArray } from "./trainride.js";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "None"
      // variableForAboutMaynooth: 0,
      // variableForBusJourney: 0,
      // variableForTrainJourney: 0,
      // variableForRideShare: 0
    };

    this.buttonAboutMaynoothAction = this.buttonAboutMaynoothAction.bind(this);
    this.buttonBusJourneyAction = this.buttonBusJourneyAction.bind(this);
    this.buttonTrainJourneyAction = this.buttonTrainJourneyAction.bind(this);
    this.buttonRideShareAction = this.buttonRideShareAction.bind(this);
    this.buttonHomeAction = this.buttonHomeAction.bind(this);
    //binds the buttons to the actions
  } // end constructor

  buttonAboutMaynoothAction() {
    // let curAboutMaynooth = this.state.variableForAboutMaynooth;
    // curAboutMaynooth = curAboutMaynooth + 1;
    // this.setState({ variableForAboutMaynooth: curAboutMaynooth });
    this.setState({ choice: "AboutMaynooth" });
  } //this counts how often the button was clicked (used for troubleshooting Home button)
  buttonBusJourneyAction() {
    // let curBusJourney = this.state.variableForBusJourney;
    // curBusJourney = curBusJourney + 1;
    // this.setState({ variableForBusJourney: curBusJourney });
    this.setState({ choice: "BusJourney" });
  } //this counts how often the button was clicked (used for troubleshooting Home button)
  buttonTrainJourneyAction() {
    // let curTrainJourney = this.state.variableForTrainJourney;
    // curTrainJourney = curTrainJourney + 1;
    // this.setState({ variableForTrainJourney: curTrainJourney });
    this.setState({ choice: "TrainJourney" });
  } //this counts how often the button was clicked (used for troubleshooting Home button)
  buttonRideShareAction() {
    // let curRideShare = this.state.variableForRideShare;
    // curRideShare = curRideShare + 1;
    // this.setState({ RideShare: curRideShare });
    this.setState({ choice: "Ride-share" });
  } //this counts how often the button was clicked (used for troubleshooting Home button)
  buttonHomeAction() {
    this.setState({ choice: "None" });
    // this.setState({ variableForBusJourney: 0 });
    // this.setState({ variableForAboutMaynooth: 0 });
    // this.setState({ variableForTrainJourney: 0 });
    // this.setState({ variableForRideShare: 0 });
  }

  render() {
    return (
      <div className="App">
        {/* <p>Current Choice: {this.state.choice}</p> */}

        <button
          onClick={this.buttonHomeAction}
          style={{ background: "#37542b", color: "white" }}
        >
          <b> Home </b>
        </button>
        <button
          onClick={this.buttonBusJourneyAction}
          style={{ background: "#37542b", color: "white" }}
        >
          <b> Bus </b>
        </button>
        <button
          onClick={this.buttonTrainJourneyAction}
          style={{ background: "#37542b", color: "white" }}
        >
          <b> Train </b>
        </button>
        <button
          onClick={this.buttonRideShareAction}
          style={{ background: "#37542b", color: "white" }}
        >
          <b> Rideshare </b>
        </button>
        <button
          onClick={this.buttonAboutMaynoothAction}
          style={{ background: "#37542b", color: "white" }}
        >
          <b> About Maynooth </b>
        </button>

        {this.state.choice === "AboutMaynooth" && (
          <AboutMaynooth
            varAboutMaynooth={this.state.variableForAboutMaynooth}
          />
        )}
        {this.state.choice === "BusJourney" && (
          <BusJourney varBusJourney={this.state.variableForBusJourney} />
        )}
        {this.state.choice === "TrainJourney" && (
          <TrainJourney varTrainJourney={this.state.variableForTrainJourney} />
        )}
        {this.state.choice === "Ride-share" && (
          <RideShare varRideShare={this.state.variableForRideShare} />
        )}

        <img src={img1} alt="Getgo logo" width="640" height="373" />
        <h3>
          {" "}
          <strong>How would you like to travel today?</strong>
        </h3>
        <br />
        <br />
        <br />

        <p style={{ color: "#1b2e14" }}>
          {/* <hr />  */}
          <b>
            <hr />
            Getgo is an app that focuses on improving our environment by
            removing cars from our roads.
            <br />
            By working together, we can achieve sustainability.{" "}
          </b>
          <hr />
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

//**************************************************//
class AboutMaynooth extends Component {
  render() {
    const varAboutMaynoothFromProps = this.props.varAboutMaynooth;
    return (
      <div className="AboutMaynooth">
        <hr />
        <br />
        <p>{varAboutMaynoothFromProps}</p>
        <p>
          <Slider />
        </p>
        {/* below information from https://en.wikipedia.org/wiki/Maynooth */}
        <hr />
        <b>
          <h1>About Maynooth</h1>
          Maynooth is a university town in County Kildare, Ireland.
          <br />
          It is home to Maynooth University and St. Patrick's College, a
          Pontifical University
          <br />
          and Ireland's sole Roman Catholic seminary. Maynooth is also the seat
          of the Irish Catholic Bishops'
          <br />
          Conference and holds the headquarters of Ireland's largest development
          charity, Trócaire.
        </b>
        <br />
        <br />
        <br />
        Maynooth is located 24 kilometres west of central Dublin.
        {/* Information below is from https://en.wikipedia.org/wiki/Maynooth_University */}
        <br />
        Maynooth University, is a constituent university of the National
        University of Ireland in Maynooth, county Kildare, <br /> Ireland. It
        was Ireland's youngest university until
        <br />
        Technological University Dublin was established in 2019, as it was
        founded
        <br />
        by the Universities Act, 1997 from the secular faculties of the now
        separate
        <br />
        St Patrick's College, Maynooth, which was founded in 1795. Maynooth is
        <br />
        also the only university town in Ireland, all other universities being
        <br />
        based within cities.
        <br />
        <br />
        <br />
        The university consists of two connected campuses: an older southern
        campus,
        <br />
        with 19th-century buildings, shared with St Patrick's College, and,
        <br />
        across a public road, a modern northern campus, occupying circa 100
        acres
        <br />
        (0.40 km2).
        <br />
        <br />
        <br />
        With over 13,000 students enrolled, and over 900 staff from over 20
        <br />
        different countries, it is Ireland's smallest, yet fastest growing,
        <br />
        university. In 2009, Maynooth University was listed as a Top 500
        university
        <br />
        in the Times Higher Education-QS World University Rankings. The 2012 QS
        <br />
        World University Rankings put MU in the 501–550 bracket worldwide,
        <br />
        but most recently, Maynooth University was ranked in the 701–750 bracket
        in
        <br />
        the 2019 QS World University Rankings. In 2008, it was named The Sunday
        <br />
        Times 'University of the Year'. In 2011, Maynooth University became
        <br />
        the first and only institution outside of North America to be included
        in
        <br />
        The Princeton Review of Best Colleges. It also has the highest
        proportion
        <br />
        of university participation in Ireland of mature students (16%) and
        access
        <br />
        students (22%).
        <br />
        <hr />
        <img src={img2} alt="Map of Maynooth University Campus" />
        <b>(Open the map in a new tab to view fullsize) </b>
      </div>
    );
  }
} // close the AboutMaynooth component
//**************************************************//

const localbusride = busRideArray;

class BusJourney extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", len: 0, gArray: localbusride };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onClearButtonClick = this.onClearButtonClick.bind(this);
  } // binds the buttons
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    let sTerm = this.state.searchTerm;
    let n = sTerm.length;
    this.setState({ len: n });
  } //changes the statre when the search is made
  onClearButtonClick() {
    this.setState({ len: 0 });
    this.setState({ searchTerm: " " });
  } //build button build
  render() {
    return (
      <div className="BusJourney">
        <video src={busRide} autoPlay loop muted />
        {/* renders the video at the top of the page */}
        <ComponentJ
          searchTerm={this.state.searchTerm}
          searchLen={this.state.len}
          onFormChange={this.onSearchFormChange}
          onButtonClick={this.onClearButtonClick}
        />
        <ComponentK gArray={this.state.gArray} sTerm={this.state.searchTerm} />
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

//**************************************************//
// Bus search

class ComponentJ extends Component {
  render() {
    let searchTerm = this.props.searchTerm;
    let searchLen = this.props.searchLen;
    let onFormChange = this.props.onFormChange;
    let onButtonClick = this.props.onButtonClick;
    return (
      <div className="ComponentJ">
        <hr />
        <h1>Bus Search</h1>
        <p> </p>
        <form>
          <b> Search below for your bus </b> <br />
          <input
            placeholder="Bus destination Eg:Galway"
            type="text"
            value={searchTerm}
            onChange={onFormChange}
          />
          {/* sets up the search box */}
        </form>
        <button onClick={onButtonClick}> Clear Search </button>
        <p>
          {" "}
          <b> {searchLen} </b>
          characters entered.
        </p>
        {/* displays the amount of characters entered */}
      </div>
    );
  }
} // close the ComponentJ component
//**************************************************//
// Bus results
class ComponentK extends Component {
  busRideFilterFunction(searchTerm) {
    return function (busrideObject) {
      // Filter Functionle

      let OperatorName = busrideObject.OperatorName.toLowerCase();
      let Origin = busrideObject.Origin.toLowerCase();
      let Destination = busrideObject.Destination.toLowerCase();
      let RouteNo = busrideObject.RouteNo;
      let Time1 = busrideObject.Time1;
      let Time2 = busrideObject.Time2;
      let Time3 = busrideObject.Time3;
      let Time4 = busrideObject.Time4;
      let Time5 = busrideObject.Time5;
      let Time6 = busrideObject.Time6;
      let Time7 = busrideObject.Time7;
      let Time8 = busrideObject.Time8;
      let Time9 = busrideObject.Time9;
      let Time10 = busrideObject.Time10;
      let Time11 = busrideObject.Time11;
      let Time12 = busrideObject.Time12;
      let Time13 = busrideObject.Time13;
      let Time14 = busrideObject.Time14;
      let Time15 = busrideObject.Time15;
      let Time16 = busrideObject.Time16;
      let Time17 = busrideObject.Time17;
      //sets up busride objects

      return (
        searchTerm !== " " &&
        searchTerm.length > 3 &&
        (OperatorName.includes(searchTerm.toLowerCase()) ||
          Origin.includes(searchTerm.toLowerCase()) ||
          Destination.includes(searchTerm.toLowerCase()) ||
          RouteNo.includes(searchTerm) ||
          Time1.includes(searchTerm) ||
          Time2.includes(searchTerm) ||
          Time3.includes(searchTerm) ||
          Time4.includes(searchTerm) ||
          Time5.includes(searchTerm) ||
          Time6.includes(searchTerm) ||
          Time7.includes(searchTerm) ||
          Time8.includes(searchTerm) ||
          Time9.includes(searchTerm) ||
          Time10.includes(searchTerm) ||
          Time11.includes(searchTerm) ||
          Time12.includes(searchTerm) ||
          Time13.includes(searchTerm) ||
          Time14.includes(searchTerm) ||
          Time15.includes(searchTerm) ||
          Time16.includes(searchTerm) ||
          Time17.includes(searchTerm))
        //links the JSON file to possible search terms
      );
    };
  }

  render() {
    let gArray = this.props.gArray;
    let sTerm = this.props.sTerm;
    // console.log(gArray);
    let nResult = gArray.filter(this.busRideFilterFunction(sTerm)).length;
    // below is the table of search results
    return (
      <div className="ComponentK">
        <hr />
        <h2>Buses serving Maynooth Town:</h2>
        <h3> We found {nResult} buses in our search</h3>
        {gArray.filter(this.busRideFilterFunction(sTerm)).map((x) => (
          <div key={x.id}>
            <table border="1">
              <tbody style={{ background: "#d7e8d5" }}>
                <td>
                  <i>Operator: {x.OperatorName}</i>
                </td>
                <td>
                  <b>Origin: </b>
                  {x.Origin}
                </td>
                <td>
                  <b>Destination: </b>
                  {x.Destination}
                </td>
                <td>Route: {x.RouteNo}</td>
                <td>Departing at:</td>
                <td>{x.Time1}</td>
                <td>{x.Time2}</td>
                <td>{x.Time3}</td>
                <td>{x.Time4}</td>
                <td>{x.Time5}</td>
                <td>{x.Time6}</td>
                <td>{x.Time7}</td>
                <td>{x.Time8}</td>
                <td>{x.Time9}</td>
                <td>{x.Time10}</td>
                <td>{x.Time11}</td>
                <td>{x.Time12}</td>
                <td>{x.Time13}</td>
                <td>{x.Time14}</td>
                <td>{x.Time15}</td>
                <td>{x.Time16}</td>
                <td>{x.Time17}</td>
              </tbody>
            </table>
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
} // close the ComponentK component
//above is the table of search results

//**************************************************//
const localtrainride = trainRideArray;

class TrainJourney extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "", len: 0, gArray: localtrainride };
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.onClearButtonClick = this.onClearButtonClick.bind(this);
  } //binds buttons
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
    let sTerm = this.state.searchTerm;
    let n = sTerm.length;
    this.setState({ len: n });
  } //sets up search box
  onClearButtonClick() {
    this.setState({ len: 0 });
    this.setState({ searchTerm: " " });
  } //sets up the clear button
  render() {
    return (
      <div className="Train">
        <video src={Train} autoPlay loop muted />
        {/* imports the the video and auto plays , loops and keeps it muted  */}
        <ComponentX
          searchTerm={this.state.searchTerm}
          searchLen={this.state.len}
          onFormChange={this.onSearchFormChange}
          onButtonClick={this.onClearButtonClick}
        />
        <ComponentY gArray={this.state.gArray} sTerm={this.state.searchTerm} />
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

//**************************************************//
//Trainsearch

class ComponentX extends Component {
  render() {
    let searchTerm = this.props.searchTerm; // Look for user input
    let searchLen = this.props.searchLen; // Linked to the state below , project the length but never renders till >3
    let onFormChange = this.props.onFormChange;
    let onButtonClick = this.props.onButtonClick; // links clear search button
    return (
      <div className="ComponentX">
        <hr />
        <h1>Train Search </h1>
        <p></p>
        <form>
          <b> Search for a train below</b> <br />
          <input
            placeholder="Train destination Eg: Sligo"
            type="text"
            value={searchTerm}
            onChange={onFormChange}
          />
        </form>
        <button onClick={onButtonClick}> Clear Search </button>
        <br />
        <br />
        <b> {searchLen} </b> characters entered
      </div>
    );
  }
} // close the ComponentX component
//**************************************************//
// Train results
class ComponentY extends Component {
  trainRideFilterFunction(searchTerm) {
    return function (trainrideObject) {
      // Filter Function , searches by objstation & ID and displayes Times 1-17

      let objStation = trainrideObject.objStation.toLowerCase();
      let StationId = trainrideObject.StationId.toLowerCase();
      let Time1 = trainrideObject.Time1;
      let Time2 = trainrideObject.Time2;
      let Time3 = trainrideObject.Time3;
      let Time4 = trainrideObject.Time4;
      let Time5 = trainrideObject.Time5;
      let Time6 = trainrideObject.Time6;
      let Time7 = trainrideObject.Time7;
      let Time8 = trainrideObject.Time8;
      let Time9 = trainrideObject.Time9;
      let Time10 = trainrideObject.Time10;
      let Time11 = trainrideObject.Time11;
      let Time12 = trainrideObject.Time12;
      let Time13 = trainrideObject.Time13;
      let Time14 = trainrideObject.Time14;
      let Time15 = trainrideObject.Time15;
      let Time16 = trainrideObject.Time16;
      let Time17 = trainrideObject.Time17;

      return (
        searchTerm !== " " &&
        searchTerm.length > 3 && // Will not render a result until input is greater then 3 letters
        (objStation.includes(searchTerm.toLowerCase()) ||
          StationId.includes(searchTerm.toLowerCase()) ||
          Time1.includes(searchTerm) ||
          Time2.includes(searchTerm) ||
          Time3.includes(searchTerm) ||
          Time4.includes(searchTerm) ||
          Time5.includes(searchTerm) ||
          Time6.includes(searchTerm) ||
          Time7.includes(searchTerm) ||
          Time8.includes(searchTerm) ||
          Time9.includes(searchTerm) ||
          Time10.includes(searchTerm) ||
          Time11.includes(searchTerm) ||
          Time12.includes(searchTerm) ||
          Time13.includes(searchTerm) ||
          Time14.includes(searchTerm) ||
          Time15.includes(searchTerm) ||
          Time16.includes(searchTerm) ||
          Time17.includes(searchTerm))
      );
    };
  }

  render() {
    let gArray = this.props.gArray;
    let sTerm = this.props.sTerm;
    // console.log(gArray);
    let nResult = gArray.filter(this.trainRideFilterFunction(sTerm)).length;
    //Displays Table of results below with number of results found
    return (
      <div className="ComponentY">
        <hr />
        <h1>Trains serving Maynooth Town</h1>
        <p>
          {" "}
          We found <b>{nResult}</b> trains for you
        </p>
        {gArray.filter(this.trainRideFilterFunction(sTerm)).map((x) => (
          <div key={x.id}>
            <table border="1">
              <tbody style={{ background: "#d7e8d5" }}>
                <td>
                  <i>Station: {x.objStation}</i>
                </td>
                <td>Station ID: {x.StationId}</td>
                <td>Times for trains departing for {x.objStation}:</td>
                <td>{x.Time1}</td>
                <td>{x.Time2}</td>
                <td>{x.Time3}</td>
                <td>{x.Time4}</td>
                <td>{x.Time5}</td>
                <td>{x.Time6}</td>
                <td>{x.Time7}</td>
                <td>{x.Time8}</td>
                <td>{x.Time9}</td>
                <td>{x.Time10}</td>
                <td>{x.Time11}</td>
                <td>{x.Time12}</td>
                <td>{x.Time13}</td>
                <td>{x.Time14}</td>
                <td>{x.Time15}</td>
                <td>{x.Time16}</td>
                <td>{x.Time17}</td>
              </tbody>
            </table>
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
} // close the TrainJourney component
//**************************************************//
class RideShare extends Component {
  constructor(props) {
    super(props);
    console.log("In the constructor RideShare comp");
    this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    this.onSearchFormChange = this.onSearchFormChange.bind(this);
    this.addToSelecting = this.addToSelecting.bind(this);
    this.emptySelecting = this.emptySelecting.bind(this);
    // sets up the buttons
    this.state = {
      apiData: [],
      isFetched: false,
      errorMsg: null,
      searchTerm: "",
      Selecting: []
      // sets up the api
    };
  }
  addToSelecting(selectedObject) {
    let foundObj = this.state.apiData.filter(
      this.findObjectByRSKey(selectedObject)
    );
    this.setState({ Selecting: this.state.Selecting.concat(foundObj) });
    this.setState({ searchTerm: "" });
  } //sets up the select button
  findObjectByRSKey(objectToCompare) {
    return function (RideShare) {
      return RideShare.RSKey === objectToCompare.RSKey;
    };
  } //finds the objects
  emptySelecting() {
    this.setState({ Selecting: [] });
  } //sets up clearing the selected ride-share
  onSearchFormChange(event) {
    this.setState({ searchTerm: event.target.value });
  } //sets up the search
  handleResetButtonClick() {
    this.setState({ searchTerm: "" });
  } //sets up the reset button
  findObjectByTown(atTownToFind) {
    return function (RideShare) {
      return RideShare.Town === atTownToFind;
    };
  } //helps to find the towns

  async componentDidMount() {
    try {
      const API_URL =
        "https://raw.githubusercontent.com/Simonomi5/cs385Project/main/RideShare.json";
      //api address
      const response = await fetch(API_URL);
      const jsonResult = await response.json();

      this.setState({ apiData: jsonResult.RideShare });
      this.setState({ isFetched: true });
    } catch (error) {
      this.setState({ isFetched: false });
      this.setState({ errorMsg: error });
      // api fetch
    }
  }

  render() {
    if (this.state.errorMsg) {
      return (
        <div className="error">
          <h1>We're very sorry: An error has occured in the API call</h1>

          <p>The error message is: {this.state.errorMsg.toString()}</p>
        </div>
      );
    } else if (this.state.isFetched === false) {
      return (
        <div className="fetching">
          <h1>We're searching for a ride share for you.</h1>
          <p>We will find one very soon!</p>
        </div>
        // error message (just in case) and waiting message
      );
    } else {
      return (
        <div className="RideShare">
          {/* <img src={GetgoLogo} alt="Getgo logo" width="640" height="373" /> */}
          <video src={Landscape} autoPlay playsinline loop muted />
          {/* logo image display */}

          <SearchForm
            searchTerm={this.state.searchTerm}
            onChange={this.onSearchFormChange}
          />
          <b>
            <u>{this.state.searchTerm}</u>
          </b>
          {/* displays the search term */}

          <SearchResults
            searchTerm={this.state.searchTerm}
            globalArray={this.state.apiData}
            addToSelectingHandler={this.addToSelecting}
            SelectingArray={this.state.Selecting}
            emptySelectingHandler={this.emptySelecting}
          />
          {/* the search results */}

          <Reset buttonHandler={this.handleResetButtonClick} />
          {/* the reset button at the bottom of the page */}
        </div>
      );
    }
  }
}

class SearchForm extends Component {
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;
    return (
      <div className="SearchForm">
        <form>
          <p>
            <b>Find a Rideshare to Maynooth University</b>
          </p>
          <p>
            <input
              placeholder="Name your nearest town"
              type="text"
              value={searchTermFromProps}
              onChange={onChangeFromProps}
            />
          </p>
        </form>
      </div>
    );
  }
  // sets up the search box with place holder giving instructions
}

class SearchResults extends Component {
  rideShareFilterFunction(searchTerm) {
    return function (RideShareObject) {
      let Town = RideShareObject.Town.toLowerCase();
      //let Avatar = RideShareObject.Avatar;
      //let First_name = RideShareObject.First_name.toLowerCase();
      //let Last_name = RideShareObject.Last_name.toLowerCase();
      //let Student_number = RideShareObject.Student_number.toLowerCase();
      //let Leaving_from = RideShareObject.Leaving_from.toLowerCase();
      //let Leaving = RideShareObject.Leaving.toLowerCase();
      //let Returning = RideShareObject.Returning.toLowerCase();
      //let Car = RideShareObject.Car.toLowerCase();
      //let Colour = RideShareObject.Colour.toLowerCase();

      // sets what we can search for (useful during troubleshooting)

      let searchTermLC = searchTerm.toLowerCase();
      // no problems with upper/lower case when searching
      return (
        searchTerm !== "" &&
        searchTerm.length > 3 &&
        //>3 increases search speed by restricting search until at least 4 characters have been entered
        Town.includes(searchTermLC) //|| Leaving_from.includes(searchTerm))
        // no searching for empty strings, must have town or address
      );
    };
  }

  render() {
    const arrayPassedAsParameter = this.props.globalArray;
    const searchTermFromProps = this.props.searchTerm;
    const localAddToSelectingHandler = this.props.addToSelectingHandler;
    const localSelectingArray = this.props.SelectingArray;
    const localEmptySelectingHandler = this.props.emptySelectingHandler;
    // These need to be passed from the parent as props - otherwise they
    // cannot be accessed.
    let numberResults = arrayPassedAsParameter.filter(
      this.rideShareFilterFunction(searchTermFromProps)
    ).length;
    //needed to render the result table

    return (
      <div className="SearchResultsDisplay">
        {numberResults === 0 && (
          <p>Simply begin typing above for a ride-share</p>
          //keeps the entire api from displaying and provides instructions
        )}
        {numberResults > 0 && (
          <>
            We found {numberResults} ride-shares for you!
            <h1>Search Results</h1>
            <table border="1" height="50">
              <tbody style={{ background: "#d7e8d5" }}>
                {arrayPassedAsParameter
                  .filter(this.rideShareFilterFunction(searchTermFromProps))
                  .map((a) => (
                    <tr key={a.id}>
                      <td width="150" height="100">
                        <b>
                          {a.First_name} {a.Last_name}
                        </b>
                      </td>
                      <td width="70">
                        <img
                          alt="Person's avatar"
                          src={a.Avatar}
                          width="10"
                          height="10"
                        />
                        Avatar
                      </td>
                      <td width="150">Student number: {a.Student_number}</td>
                      <td width="150">
                        {a.Leaving_from}, {a.Town}
                      </td>
                      <td width="150">
                        Leaving <b>{a.Town}</b> at{" "}
                        <u>
                          <b>{a.Leaving}</b>
                        </u>{" "}
                        and returning at{" "}
                        <u>
                          <b>{a.Returning}</b>
                        </u>
                        .
                      </td>
                      <td width="150">
                        Driving a/an {a.Colour} {a.Car}
                      </td>
                      <td>
                        {" "}
                        <button onClick={() => localAddToSelectingHandler(a)}>
                          Select
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* ride-share search results table presented above */}
          </>
        )}
        <p>
          <br />
          {/* {localSelectingArray.length} */}
          {/* this displays how many ride-shares have been selected for troubleshooting */}
          <br />
          <button onClick={localEmptySelectingHandler}>Deselect</button>
          <ul>
            {localSelectingArray.map((a, id) => (
              <li key={a}>
                <hr />
                Your selected ride-share to and from <br />
                <i>{a.Town}</i> is{" "}
                <b>
                  {a.First_name} {a.Last_name}.
                </b>
                <br />
                <br />
                They will soon be notified that you will be joining them.
                <br />
                <br />
                Please arrive early to ensure you meet your ride-share on time.
                <br />
                Meet them at{" "}
                <u>
                  <i>
                    {a.Leaving_from}, {a.Town}
                  </i>
                </u>
                .
                <br />
                <br />
                <font color="#B42124">
                  <b>⚠</b> <br />
                  <b>For your safety</b>
                  <br />
                  Be sure to confirm the driver's name <b> and </b> that their{" "}
                  <br />
                  student number ends with {a.Student_number} <b>before</b> you
                  enter their vehicle.
                </font>
                <hr />
              </li>
            ))}
          </ul>
        </p>
      </div>
      //select button in search results above
    );
  }
}

class Reset extends Component {
  render() {
    const buttonHandler = this.props.buttonHandler;
    return (
      <div className="ResetComponent">
        <button onClick={buttonHandler}>Clear search</button>
      </div>
    );
  }
  // a button to reset the search
}

//**************************************************//

export default App;
