const toggleEditing = square => {
  return {
    type: 'EDITING_TOGGLED',
    payload: square
  }
}

export default toggleEditing;
