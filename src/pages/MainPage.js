import React from "react";
import AppBar from "../components/Appbar";
import Paper from "../components/Paper";
import { connect } from "react-redux";
import { initApi } from "../redux/actions/init";
import Card from "../components/Card";
import LazyLoad from "react-lazy-load";
import Grid from "@material-ui/core/Grid";

class MainPage extends React.PureComponent {
  state={
    inputText:'',
    data:undefined
  }
  componentDidMount() {
    this.props.initApis();
  }
  handleSearch = (text) =>{
    this.setState({inputText:text})
    if(text==''){
      this.props.initApis()
    }
    else{
      this.handleSearchEnter(text)
    }
  }
  handleSearchEnter = (text) =>{
    this.setState({
      data:this.state.data.filter(
        x=>x.name.toLowerCase().includes((text).toLowerCase()))
    })
  }
  handleBackSpace = () =>{
    this.props.initApis()
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({data:nextProps.catalog.data})
  }
  render() {
    if (
      this.props.catalog.data == undefined &&
      this.props.catalog.isFetching == false
    ) {
      return <p>loading</p>;
    }
    return (
      <div>
      <AppBar handleBackSpace={this.handleBackSpace} handleSearch={this.handleSearch} handleSearchEnter={this.handleSearchEnter}>Catalog Comic Frontier 12</AppBar>
      <Grid container spacing={16} style={{padding:16,marginTop:56}}>
        {this.state.data.map(x => {
          return (
            <Grid item xs={12} sm={4} key={x.id}>
              <LazyLoad>
                <Card 
                imgUrl={"https://catalog.comifuro.net/" + x.src} 
                name={x.name} 
                booth_number={x.booth_number}
                fandom={x.fandom}
                />
              </LazyLoad>
            </Grid>
          );
        })}
      </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return { catalog: state.init };
};
const mapDispatchToProps = dispatch => {
  return {
    initApis: () => {
      dispatch(initApi());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
