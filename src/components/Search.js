// import React, { Component } from 'react';
// import { ListGroup, ListGroupItem, ListItem } from 'reactstrap';
//
// class Search extends Component {
// 
//   constructor(props) {
//     super(props);
//
//     this.handleSearch = this.handleSearch.bind(this);
//     this.state = {
//       acorns: [],
//       filterString: '',
//     };
//   }
//
//   handleSearch = (e) => {
//     let newState = {...this.state}
//     newState.filterString = e.target.value.toLowerCase()
//     this.setState({filterString : newState.filterString})
//   }
//
//
//     render() {
//
//       const filterAcorns = this.props.acorns.filter(item =>  item.acorns.toLowerCase().includes(this.props.filterString) ||
//         item.toLowerCase().includes(this.props.filterString)
//       )
//
//         return (
//           <ListGroup>
//             <ListGroupItem
//               active tag="a"
//               href="#"
//               action>{filterAcorns.map((acorns) => {
//                 return (
//                   <
//                   acorns={this.props.acorns}
//
//                   />
//                 )
//                 })}
//             </ListGroupItem>
//         </ListGroup>
//         );
//       }
//     }
//
//
//
// export default Search;
