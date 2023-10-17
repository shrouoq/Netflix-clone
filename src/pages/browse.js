import React from 'react'
import useContent from './../hooks/use-content'
import SelectionFilter from './../utilities/selection-filter';
import BrowseContainer from '../containers/browseContainer';

export default function Browse() {
  const {series} = useContent("series")
  const {films} = useContent('films')

  const Slides = SelectionFilter({series , films})
  
  // console.log(Slides);
  
  return (
    <BrowseContainer slides = {Slides} />
  )
}
