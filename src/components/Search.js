const filterAcorns = this.state.acorns.filter(acorn =>  acorn.acorn.toLowerCase().includes(this.state.filterString) ||
    acorn.name.toLowerCase().includes(this.state.filterString)
  )
  handleSearch = (e) => {
  let newState = {...this.state}
  newState.filterString = e.target.value.toLowerCase()
  this.setState({filterString : newState.filterString})
  }
