export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}



// export default (myguy) => {
//   this.me = ['sam', 'me']

//   const self = this;
//   this.addmyguy = (newmyguy) => {
//     self.myguy.push(newmyguy);
//     return self.me;
//   }
// }